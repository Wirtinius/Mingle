const Date = require('../../models/date/dateModel');
const createPlace = require('../map/placeController').createPlace;
const Place = require('../../models/map/placeModel');

class dateController {

async createDate(req, res) {
    try {
        const { name, address, userId, partnerId, dateTime, description } = req.body;
        const newPlace = await Place.create({ name, address });
        const newDate = await Date.create({ userId, partnerId, locationId: newPlace.id, dateTime, description });
        res.status(201).json(newDate);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

async getAllDates (req, res) {
    try {
        const dates = await Date.find({status: "Accepted"});
        res.status(200).json(dates);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

async getDateByUserId (req, res) {
    try {
        const { userId } = req.params;
        const dates = await Date.find({partnerId: userId});
        res.status(200).json(dates);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

async getDate (req, res) {
    try {
        const { id } = req.params;
        const date = await Date.findById(id);
        res.status(200).json(date);
    } catch (err) {
        console.log(err)
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

async acceptDate (req, res) {
    try {
        const { id } = req.params;
        const acceptedDate = await Date.findByIdAndUpdate(id, {"status": "Accepted"});
        res.status(200).json(acceptedDate);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

async declineDate (req, res) {
    try {
        const { id } = req.params;
        const decinedDate = await Date.findByIdAndUpdate(id, {"status": "Declined"});
        res.status(200).json(decinedDate);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


}
module.exports = new dateController()