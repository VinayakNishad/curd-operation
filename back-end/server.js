import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from './Users.js';
import CustomerModel from './customer.js';


const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true })); // For form submissions
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

const asyncHandler = fn => (req, res) =>
    fn(req, res).catch(
        err => res.status(500).json({ error: err.message }));

app.post("/", asyncHandler(
    async (req, res) => 
    res.json(
        await CustomerModel.create(req.body)
    )
));

app.post("/login", asyncHandler(async (req, res) => {
    console.log("Login request received:", req.body);

    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await CustomerModel.findOne({ email });

    if (!user) {
        console.log("User not found:", email);
        return res.status(400).json({ message: "Invalid email or password" });
    }

    console.log("User found:", user);

    if (user.password !== password) {
        console.log("Incorrect password for user:", email);
        return res.status(400).json({ message: "Invalid email or password" });
    }

    console.log("Login successful for:", email);
    res.json({ message: "Login successful", user });
}));

app.get("/home", asyncHandler(async (req, res) => res.json(await UserModel.find({}))));
app.post("/createUser", asyncHandler(async (req, res) => res.json(await UserModel.create(req.body))));
app.put("/updateUser/:id", asyncHandler(async (req, res) =>
    res.json(await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }))
));


app.get("/getUser/:id", asyncHandler(async (req, res) => res.json(await UserModel.findById(req.params.id))));
app.delete("/deleteUser/:id", asyncHandler(async (req, res) =>
    res.json({ message: "User deleted", user: await UserModel.findByIdAndDelete(req.params.id) })
));

app.listen(3001, () => console.log("Server running on port 3001"));
