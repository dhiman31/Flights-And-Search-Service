const express = require('express');
const router = express.Router();
const airport_Controller = require('../../controllers/airport_controller');

router.post('/', airport_Controller.create); // will be called at POST: /api/v1/airport/
router.delete('/:id',airport_Controller.destroy);
router.get('/:id',airport_Controller.get);
router.patch('/:id',airport_Controller.update);

module.exports = router;