const express = require('express');
const router = express.Router();
const packingController = require('./packingController');

// POST /api/packing
router.post('/', packingController.createPackingRequest);

module.exports = router;
