const express = require('express');
const router = express.Router();
const city_router = require('./city_routes');
const airport_router = require('./airport_routes');

router.use('/city',city_router);   //   /api/v1/city
router.use('/airport',airport_router);// /api/v1/airport

module.exports = router;