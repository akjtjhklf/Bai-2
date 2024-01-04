const jwt = require("jsonwebtoken");
require('dotenv').config();

const { db } = require("../utils/connectDb");

const login = async(req, res) => {
    try {
    // Create checkAcount function to check students account with name and age
        const { username, password } = req.body;
        const user = await db.users.findOne({ username: username, });
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
    
        const isPasswordMatch = (password === user.password);
    
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
        res.json({
            message: 'Login successful',
            token,
            user: user,
            isSuccess: 1,
        });
        } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Failed to log in' });
        }
};

module.exports = { login };