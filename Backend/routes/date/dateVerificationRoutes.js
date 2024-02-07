const express = require('express');
const router = express.Router();
const dateVerificationController = require('../../controllers/date/dateVerificationController');
const { validateDateCreation } = require('../../middleware/date/dateMiddleware');

router.post('/', validateDateCreation, dateVerificationController.createVerifDate);
router.get('/', dateVerificationController.getAllVerifDates);
router.put('/:id', dateVerificationController.updateVerifDate);
router.delete('/:id', dateVerificationController.deleteVerifDate);
router.post('/accept/:id', dateVerificationController.acceptDate);
router.post('/decline/:id', dateVerificationController.declineDate);

module.exports = router;
