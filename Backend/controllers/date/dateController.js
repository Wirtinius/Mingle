const Date = require('../../models/date/dateModel');


class dateController {

async createDate(req, res) {
    try {
        const { userId, partnerId, location, dateTime, description } = req.body;
        const newDate = await Date.create({ userId, partnerId, location, dateTime, description });
        res.status(201).json(newDate);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

async getAllDates (req, res) {
    try {
        const dates = await Date.find();
        res.status(200).json(dates);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

async updateDate(req, res) {
    try {
        const { id } = req.params;
        const updatedDate = await Date.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedDate);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

async deleteDate (req, res) {
    try {
        const { id } = req.params;
        await Date.findByIdAndDelete(id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

}
module.exports = new dateController()