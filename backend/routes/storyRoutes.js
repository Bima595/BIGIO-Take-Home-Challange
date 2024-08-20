const express = require('express');
const { getAllStories } = require('../controllers/storyController');

const router = express.Router();

router.get('/', getAllStories);

module.exports = router;
