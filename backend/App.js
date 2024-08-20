const express = require('express');
const cors = require('cors');
const storyRoutes = require('./routes/storyRoutes');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/stories', storyRoutes);

module.exports = app;
