const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

router.post('/preview', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    const { data } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const $ = cheerio.load(data);

    const getMeta = (name) =>
      $(`meta[property='og:${name}']`).attr('content') ||
      $(`meta[name='${name}']`).attr('content') || '';

    const preview = {
      title: getMeta('title') || $('title').text(),
      description: getMeta('description'),
      image: getMeta('image'),
      url,
    };

    res.json(preview);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch preview' });
  }
});

module.exports = router;