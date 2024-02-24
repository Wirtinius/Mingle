const { sendMessage, getMessages } = require("../../controllers/chat/messageController");
const authMiddleware = require('../../middleware/user/authMiddleware')
const router = require("express").Router();

router.get("/:id", authMiddleware, getMessages);
router.post("/send/:id", authMiddleware, sendMessage);

module.exports = router;
