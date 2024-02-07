const express = require('express');
const router = express.Router();
const dateController = require('../../controllers/date/dateController');
const { validateDateCreation } = require('../../middleware/date/dateMiddleware');

router.post('/', validateDateCreation, dateController.createDate);
router.get('/', dateController.getAllDates);
router.put('/:id', dateController.updateDate);
router.delete('/:id', dateController.deleteDate);

module.exports = router;
