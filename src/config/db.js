require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cryptoDB";
    if (!mongoURI) {
        console.error("MongoDB URI is not defined in the .env file.");
        process.exit(1); // Exit if MONGODB_URI is missing
      }
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
