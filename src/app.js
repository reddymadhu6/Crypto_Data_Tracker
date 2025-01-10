require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');


// Initialize App
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();


// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

