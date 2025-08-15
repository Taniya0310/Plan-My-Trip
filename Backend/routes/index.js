const express = require('express');
const router = express.Router();

router.use('/packing', require('../services/packeging-service/packingRoute'));

module.exports = router;
