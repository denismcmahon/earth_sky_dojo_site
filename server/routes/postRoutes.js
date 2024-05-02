const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// route to add new post
router.post('/', async (req, res) => {
    try {
        const { title, content, image } = req.body;
        const post = new Post({ title, content, image });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add post' });
    }
});

module.exports = router; 