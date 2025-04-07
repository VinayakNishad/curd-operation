import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import EmployeeModel from './Employees.js';
import AdminModel from './Admin.js';
import multer from 'multer'
import StudioModel from './Studio.js';
import path from 'path';
import fs from "fs";
import SubEventModel from './SubEvent.js';
import PhotographerSampleModel from './PhotographerSampleSchema.js';
import Contact from './contact.js';
import HallModel from './Hall.js';
import PackageModel from "./Package.js"; 
import UserDataModel from './user_data.js';
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true })); // For form submissions
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/EmployeeManagement");

const asyncHandler = fn => (req, res) =>
    fn(req, res).catch(
        err => res.status(500).json({ error: err.message }));


app.post("/", asyncHandler(
    async (req, res) =>
        res.json(
            await AdminModel.create(req.body)
        )
));

app.post("/login", asyncHandler(async (req, res) => {
    console.log("Login request received:", req.body);

    const { admin_email, admin_password } = req.body;
    if (!admin_email || !admin_password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const admin = await AdminModel.findOne({ admin_email });

    if (!admin) {
        console.log("User not found:", admin_email);
        return res.status(400).json({ message: "Invalid email or password" });
    }

    console.log("User found:", admin);

    if (admin.admin_password !== admin_password) {
        console.log("Incorrect password for user:", admin_email);
        return res.status(400).json({ message: "Invalid email or password" });
    }

    console.log("Login successful for:", admin_email);
    res.json({ message: "Login successful", admin });
}));

app.get("/home", asyncHandler(async (req, res) => res.json(await EmployeeModel.find({}))));
app.post("/createUser", asyncHandler(async (req, res) => res.json(await EmployeeModel.create(req.body))));
app.put("/updateUser/:id", asyncHandler(async (req, res) =>
    res.json(await EmployeeModel.findByIdAndUpdate(req.params.id, req.body, { new: true }))
));
app.get("/getUser/:id", asyncHandler(async (req, res) => res.json(await EmployeeModel.findById(req.params.id))));
app.delete("/deleteUser/:id", asyncHandler(async (req, res) =>
    res.json({ message: "User deleted", user: await EmployeeModel.findByIdAndDelete(req.params.id) })
));

//Studios

// Set up storage engine for Multer
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});

const upload = multer({ storage });

// Ensure the uploads folder is publicly accessible
app.use("/uploads", express.static("uploads"));
// Route to add a studio with image upload
app.post("/addStudios", upload.single("studio_image"), async (req, res) => {
    try {
        const { studio_name, studio_location, studio_description, studio_contact, studio_email } = req.body;
        const studio_image = req.file ? `/uploads/${req.file.filename}` : "";
        const newStudio = await StudioModel.create({
            studio_name,
            studio_location,
            studio_description,
            studio_contact,
            studio_email,
            studio_image,
        });

        res.json({ message: "Studio added successfully!", studio: newStudio });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/getStudios", async (req, res) => {
    try {
        const studios = await StudioModel.find();
        res.json(studios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});






// Route to upload multiple images for a specific studio
const photographerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const studioId = req.query.studioId; // ✅ Fetch studioId from query parameters
        if (!studioId) {
            return cb(new Error("Studio ID is required"), false);
        }
        const dir = `./uploads/photographer_samples/${studioId}`;
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const photographerUpload = multer({ storage: photographerStorage });

// ✅ Fix the Upload Route
app.post("/uploadImages", photographerUpload.array("images", 10), async (req, res) => {
    try {
        const { studioId } = req.query; // ✅ Use req.query to get studioId
        if (!studioId) {
            return res.status(400).json({ message: "Studio ID is required" });
        }
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "No images uploaded" });
        }

        const imagePaths = req.files.map(file => `/uploads/photographer_samples/${studioId}/${file.filename}`);
        
        await PhotographerSampleModel.create({ studioId, images: imagePaths });

        res.json({ message: "Images uploaded successfully", images: imagePaths });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Get uploaded images for a studio
app.get("/getPhotographerImages/:studioId", async (req, res) => {
    try {
        const { studioId } = req.params;
        console.log("Requested Studio ID:", studioId); // Debugging log

        if (!studioId) {
            return res.status(400).json({ message: "Studio ID is required" });
        }

        const photographerSample = await PhotographerSampleModel.findOne({ studioId });

        if (!photographerSample) {
            console.log("No images found for this Studio ID");
            return res.status(404).json({ message: "No images found" });
        }

        console.log("Found images:", photographerSample.images);
        res.json({ images: photographerSample.images });
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ error: error.message });
    }
});

// contact section

  // Routes
  app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
      const newContact = new Contact({ name, email, message });
      await newContact.save();
      res.status(200).json({ message: 'Message received' });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  });

//   SubEvents
// Add sub-event for a studio
app.post("/studios/:studioId/subevents", asyncHandler(async (req, res) => {
    const { studioId } = req.params;
    const { title, price, description } = req.body;
  
    if (!title || !price || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    const newSubEvent = await SubEventModel.create({
      studioId,
      title,
      price,
      description
    });
  
    res.status(201).json({ message: "Sub-event added successfully!", subEvent: newSubEvent });
  }));
  app.get("/studios/:studioId/subevents", asyncHandler(async (req, res) => {
    const { studioId } = req.params;
    const subEvents = await SubEventModel.find({ studioId });
    res.json(subEvents);
  }));

// Hall 
app.use('/upload_halls', express.static('upload_halls'));

app.post("/add_halls", upload.single("hall_image"), async (req, res) => {
    try {
        const { hall_name, hall_location, hall_description, hall_contact, hall_email } = req.body;
        const hall_image = req.file ? `/upload_halls/${req.file.filename}` : "";
        const newHall = await HallModel.create({
            hall_name,
            hall_location,
            hall_description,
            hall_contact,
            hall_email,
            hall_image,
        });

        res.json({ message: "Hall added successfully!", hall: newHall });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get("/get_halls", async (req, res) => {
    try {
        const halls = await HallModel.find();
        res.json(halls);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to add package
const package_storage = multer.diskStorage({
    destination: "./upload_package/",
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    }
});



app.post("/add_package", upload.single("package_image"), async (req, res) => {
    try {
        const {
            package_name,
            package_price,
            package_photographer,
            package_caterer,
            package_hall,
            package_bertender,
            package_decoration,
            package_description
        } = req.body;

        const newPackage = new PackageModel({
            package_name,
            package_price,
            package_photographer,
            package_caterer,
            package_hall,
            package_bertender,
            package_decoration,
            package_description,
            package_image: req.file ? req.file.path : ""
        });

        await newPackage.save();
        res.status(200).json({ message: "Package added successfully" });
    } catch (error) {
        console.error("Error adding package:", error);
        res.status(500).json({ message: "Server error" });
    }
});
app.get("/get_packages", async (req, res) => {
    try {
        const packages = await PackageModel.find();
        res.json(packages);
    } catch (error) {
        console.error("Error fetching packages:", error);
        res.status(500).json({ message: "Server error" });
    }
});


// POST: Save user enquiry
app.post("/user_form", async (req, res) => {
    try {
      const { user_name, email, location, phone, package_id } = req.body;
  
      const newUserData = new UserDataModel({
        user_name,
        email,
        location,
        phone,
        package_id
      });
  
      await newUserData.save();
      res.status(201).json({ message: "User enquiry saved successfully!" });
    } catch (error) {
      console.error("Error saving user data:", error);
      res.status(500).json({ message: "Failed to save user data." });
    }
  });
  
  app.get("/admin_home", async (req, res) => {
    try {
      const users = await UserDataModel.find();
      const enrichedUsers = await Promise.all(
        users.map(async (user) => {
          const pkg = await PackageModel.findById(user.package_id);
          return {
            ...user._doc,
            packageDetails: pkg || null
          };
        })
      );
  
      res.json(enrichedUsers);
    } catch (error) {
      console.error("Error fetching admin dashboard data:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  
app.listen(3001, () => console.log("Server running on port 3001"));
