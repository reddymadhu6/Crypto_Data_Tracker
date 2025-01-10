require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const startFetchJob = require('./jobs/fetchData');

// Routes
const statsRoute = require('./routes/stats');
const deviationRoute = require('./routes/deviation');

// Initialize App
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Start Background Job
startFetchJob();

// API Routes
app.use(statsRoute);
app.use(deviationRoute);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
