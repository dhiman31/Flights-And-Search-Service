const express = require('express');
const router = express.Router();
const city_Controller = require('../../controllers/city_controller');

router.post('/', city_Controller.create); // will be called at POST: /api/v1/city/

module.exports = router;
