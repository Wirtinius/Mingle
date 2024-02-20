const Router = require('express');
const router = new Router()
const placeController = require('../../controllers/map/placeController')

router.get('/', placeController.getAllPlaces);
router.post('/location', placeController.getPlacesByLocationIds);
router.get('/:id', placeController.getPlace);
router.post('/', placeController.createPlace);



module.exports = router;
