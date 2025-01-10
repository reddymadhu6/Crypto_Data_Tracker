require('dotenv').config();
const express = require('express');


// Initialize App
const app = express();
app.use(express.json());


// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

