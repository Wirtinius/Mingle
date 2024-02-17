const Router = require('express');
const router = new Router()
const mapController = require('../../controllers/map/mapController')

router.get('/', mapController.getAllStores);
router.post('/', mapController.createStore);



module.exports = router;
