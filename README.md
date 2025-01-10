
# Crypto_Data_Tracker

This project is a Node.js application that fetches cryptocurrency data (Bitcoin, Matic, and Ethereum) from CoinGecko, stores it in MongoDB, and provides various endpoints to retrieve and analyze this data.

## Features

- Fetches real-time cryptocurrency data from CoinGecko (price, market cap, 24h change) every 2 hours.
- Provides an API `/stats` to get the latest data for a specified cryptocurrency.
- Provides an API `/deviation` to calculate the standard deviation of the price for a cryptocurrency based on the last 100 records in the database.

## Installation

### Prerequisites

1. **Node.js**: Ensure that you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).
2. **MongoDB**: You need a MongoDB instance running. You can use either a local MongoDB instance or a cloud-based MongoDB like MongoDB Atlas.

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   Inside the project directory, run the following command to install all required dependencies:

   ```bash
   npm install
   ```

   This will install the following packages:

   - `express`: Web framework for building the API server.
   - `mongoose`: MongoDB ORM for interacting with the MongoDB database.
   - `axios`: To make HTTP requests to the CoinGecko API.
   - `dotenv`: To load environment variables from a `.env` file.
   - `node-cron`: For scheduling the background job to fetch cryptocurrency data every 2 hours.

### Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/cryptoDB  # MongoDB connection string
PORT=3000  # Port to run the server
```

For MongoDB Atlas, the `MONGODB_URI` would look like:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/cryptoDB?retryWrites=true&w=majority
```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000` by default.

2. You should now be able to access the following endpoints:
   - **`/stats`**: To get the latest data for a cryptocurrency. Example: `http://localhost:3000/stats?coin=bitcoin`
   - **`/deviation`**: To get the standard deviation of the price for a cryptocurrency. Example: `http://localhost:3000/deviation?coin=bitcoin`

### Cron Job

A background cron job is set up to fetch data from CoinGecko every 2 hours and store it in the MongoDB database. This will run automatically as soon as the server starts.

## API Endpoints

1. **`/stats`**  
   **GET**: Retrieve the latest data for a specified cryptocurrency.

   - **Query Parameters**:
     - `coin`: The cryptocurrency to fetch data for. Can be one of the following: `bitcoin`, `matic`, `ethereum`.

   - **Example**:
     ```bash
     GET /stats?coin=bitcoin
     ```

   - **Response**:
     ```json
     {
       "price": 40000,
       "marketCap": 800000000,
       "24hChange": 3.4
     }
     ```

2. **`/deviation`**  
   **GET**: Calculate the standard deviation of the price for the last 100 records for a specified cryptocurrency.

   - **Query Parameters**:
     - `coin`: The cryptocurrency to calculate the deviation for. Can be one of the following: `bitcoin`, `matic`, `ethereum`.

   - **Example**:
     ```bash
     GET /deviation?coin=bitcoin
     ```

   - **Response**:
     ```json
     {
       "deviation": 4082.48
     }
     ```

## NPM Packages

The following NPM packages are required to run this project:

- **express**: Web framework for building the server.
- **mongoose**: MongoDB ORM for managing MongoDB interactions.
- **axios**: HTTP client for making API requests to CoinGecko.
- **dotenv**: For loading environment variables.
- **node-cron**: To schedule the background job for fetching cryptocurrency data.

To install all the dependencies, run:

```bash
npm install
```

## Development

If you want to contribute or make modifications to the project:

1. Fork the repository.
2. Clone your fork.
3. Make your changes.
4. Push your changes and create a pull request.

## Additional Notes

- Ensure MongoDB is running before starting the application.
- The background job that fetches cryptocurrency data from CoinGecko runs every 2 hours. You can modify this frequency by updating the cron job in `cron.js`.
- Make sure your MongoDB URI is correctly set up in the `.env` file for connecting to your MongoDB instance.
