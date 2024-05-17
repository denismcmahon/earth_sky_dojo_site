const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Post = require('../models/Post');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// route to add new post
router.post('/', async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = new Post({ title, content });
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: `Failed to add post: ${err}` });
    }
});

router.post('/imageupload', upload.single('image'), async (req, res) => {
    console.log('DM ==> imageupload called');
    const file = req.file;
    if(!file) {
        return res.status(400).send('No file uploaded.')
    }
    const imageUrl = `http://localhost:3000/uploads/${file.filename}`;
    res.json({ url: imageUrl });
});

module.exports = router; 