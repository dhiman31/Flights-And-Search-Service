const express = require('express');
const router = express.Router();
const city_Controller = require('../../controllers/city_controller');

router.post('/', city_Controller.create); // will be called at POST: /api/v1/city/
router.delete('/:id',city_Controller.destroy);
router.get('/:id',city_Controller.get);
router.get('/',city_Controller.getall);
router.patch('/:id',city_Controller.update);

module.exports = router;
