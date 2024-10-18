const express = require("express");
const User = require("../models/userModel"); // No need to require it inside the route handler

const router = express.Router();

// Create operation
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const userAdded = await User.create({ name, email, age });
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message }); // Use status method here
    }
});

// Get all users
router.get("/", async (req, res) => {
    try {
        const showAll = await User.find();
        res.status(200).json(showAll);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message }); // Use status method here
    }
});

// Get by single user
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await User.findById(id); // Fixed the method name
        if (!singleUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(singleUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message }); // Use status method here
    }
});

// Delete operation
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id); // Fixed the method name
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message }); // Use status method here
    }
});

// Update operation
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message }); // Use status method here
    }
});

module.exports = router;
