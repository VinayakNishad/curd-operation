import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import EmployeeModel from './Employees.js';
import AdminModel from './Admin.js';
import multer from 'multer'
import StudioModel from './Studio.js';
import path from 'path';
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


app.listen(3001, () => console.log("Server running on port 3001"));
