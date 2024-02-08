exports.validateDateCreation = (req, res, next) => {
    const { userId, partnerId, location, dateTime } = req.body;
    if (!userId || !partnerId || !location || !dateTime) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
};
