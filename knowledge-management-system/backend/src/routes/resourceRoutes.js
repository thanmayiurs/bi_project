const express = require('express');
const Resource = require('../models/Resource');
const router = express.Router();

// Get all resources
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
});

// Add a new resource
router.post('/', async (req, res) => {
    try {
        const { title, description, category, link } = req.body;
        const newResource = new Resource({ title, description, category, link });
        await newResource.save();
        res.status(201).json(newResource);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add resource' });
    }
});

module.exports = router;