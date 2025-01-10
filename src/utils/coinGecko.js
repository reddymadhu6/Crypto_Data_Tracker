const axios = require('axios');

const fetchCryptoData = async (coins) => {
  const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price';
  try {
    const response = await axios.get(COINGECKO_API, {
      params: {
        ids: coins.join(','),
        vs_currencies: 'usd',
        include_market_cap: true,
        include_24hr_change: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from CoinGecko:', error.message);
    throw error;
  }
};

module.exports = fetchCryptoData;
