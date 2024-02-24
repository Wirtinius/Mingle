const express = require('express');
const router = express.Router();
const dateController = require('../../controllers/date/dateController');
const { validateDateCreation } = require('../../middleware/date/dateMiddleware');

router.post('/', validateDateCreation, dateController.createDate);
router.get('/', dateController.getAllDates);
router.get('/:id', dateController.getDate);
router.get('/user/:userId', dateController.getDateByUserId);
router.put('/:id', dateController.updateDate);
router.delete('/:id', dateController.deleteDate);
router.put('/accept/:id', dateController.acceptDate);
router.put('/decline/:id', dateController.declineDate);

module.exports = router;
