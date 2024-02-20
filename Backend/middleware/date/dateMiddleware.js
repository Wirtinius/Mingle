exports.validateDateCreation = (req, res, next) => {
    const { userId, partnerId, dateTime } = req.body;
    if (!userId || !partnerId || !dateTime) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
};
