const express = require('express');
const router = express.Router();
const city_router = require('./city_routes');

router.use('/city',city_router);   //   /api/v1/city

module.exports = router;