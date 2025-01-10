const express = require('express');
const { std } = require('mathjs');
const Crypto = require('../models/crypto');

const router = express.Router();

router.get('/deviation', async (req, res) => {
  const { coin } = req.query;
  if (!coin) return res.status(400).json({ error: 'Coin query parameter is required' });

  try {
    const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
    if (records.length === 0) return res.status(404).json({ error: 'No data found for the requested coin' });

    const prices = records.map((record) => record.price);
    const deviation = std(prices);

    res.json({ deviation: deviation.toFixed(2) });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
