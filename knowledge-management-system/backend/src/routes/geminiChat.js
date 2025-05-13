const express = require('express');
const axios = require('axios');
const router = express.Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Set this in your .env

router.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
      {
        contents: [{ parts: [{ text: message }] }]
      },
      {
        params: { key: GEMINI_API_KEY },
        headers: { 'Content-Type': 'application/json' }
      }
    );
    const aiReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
    res.json({ reply: aiReply });
  } catch (err) {
    res.status(500).json({ error: 'Gemini API error', details: err.message });
  }
});

module.exports = router;