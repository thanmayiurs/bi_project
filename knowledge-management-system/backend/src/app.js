// filepath: backend/src/app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Make sure this is present

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/resources', require('./routes/resourceRoutes'));

const linkPreviewRouter = require('./routes/linkPreview');
app.use('/api/link', linkPreviewRouter);

const geminiChatRouter = require('./routes/geminiChat');
app.use('/api/gemini', geminiChatRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the AI and Machine Learning Research Wiki API!');
});

module.exports = app;