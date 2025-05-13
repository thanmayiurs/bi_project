const express = require('express');
const { GoogleGenAI } = require('@google/genai');
const router = express.Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

router.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'No message provided' });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash', // or 'gemini-2.0-flash' if you want the flash model
      contents: [{ role: 'user', parts: [{ text: message }] }]
    });
    // The SDK returns a slightly different structure
    const aiReply = response?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
    res.json({ reply: aiReply });
  } catch (err) {
    console.error('Gemini SDK error:', err.message, err.response?.data);
    res.status(500).json({ error: 'Gemini SDK error', details: err.message });
  }
});

module.exports = router;