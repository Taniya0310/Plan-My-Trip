require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/trip_planner',
  weatherApiKey: process.env.WEATHER_API_KEY || '',
  openaiApiKey: process.env.OPENAI_API_KEY || ''
};
