const cron = require('node-cron');
const Crypto = require('../models/crypto');
const fetchCryptoData = require('../utils/coinGecko');

const COINS = ['bitcoin', 'matic-network', 'ethereum'];

// Schedule Job
const startFetchJob = () => {
  cron.schedule('0 */2 * * *', async () => {
    console.log('Fetching crypto data...');
    try {
      const data = await fetchCryptoData(COINS);

      for (const coin of COINS) {
        const record = new Crypto({
          coin,
          price: data[coin].usd,
          marketCap: data[coin].usd_market_cap,
          change24h: data[coin].usd_24h_change,
        });
        await record.save();
      }

      console.log('Crypto data updated successfully.');
    } catch (error) {
      console.error('Error in background job:', error.message);
    }
  });
};

module.exports = startFetchJob;
