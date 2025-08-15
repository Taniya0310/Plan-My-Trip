const mongoose = require('mongoose');

const packingSchema = new mongoose.Schema(
  {
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    activities: { type: [String], required: true },
    tripType: { type: String, enum: ['family', 'friends', 'couple', 'solo'], required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('PackingRequest', packingSchema);
