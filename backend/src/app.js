const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
//cors are added
const cors = require("cors");

app.use(cors());

// 1. Add this Middleware (Crucial for reading data from the frontend)
app.use(express.json());
app.use("/api/auth", authRoutes);

// 2. Your existing home route
app.get("/", (req, res) => {
    res.json({ message: "Backend Running Successfully" });
});

// 3. Add this new temporary test route
app.post("/test", (req, res) => {
    console.log(req.body); // This will print the incoming data in your VS Code terminal
    res.json({ 
        success: true, 
        data: req.body 
    });
});

module.exports = app;