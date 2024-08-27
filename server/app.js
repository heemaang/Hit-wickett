const express = require('express');
const connectDB = require('./config/db');
const gameRoutes = require('./routes/gameRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api/game', gameRoutes);

module.exports = app;
