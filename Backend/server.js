require('dotenv').config();
const express = require('express');
const env = require('./configs/env');
const connectDB = require('./configs/db');

const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Register routes
app.use('/api', require('./routes'));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`);
});
