const Verification = require('../../models/date/dateVerificationModel');
const Date = require('../../models/date/dateModel')

class dateVerificationController {

async createVerifDate(req, res) {
    try {
        const { userId, partnerId, location, dateTime, description } = req.body;
        const newDateVerification = await Verification.create({ userId, partnerId, location, dateTime, description });
        res.status(201).json(newDateVerification);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

async getAllVerifDates (req, res) {
    try {
        const dateVerifications = await Verification.find();
        res.status(200).json(dateVerifications);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

async updateVerifDate(req, res) {
    try {
        const { id } = req.params;
        const updatedDateVerification = await Verification.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedDateVerification);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

async deleteVerifDate (req, res) {
    try {
        const { id } = req.params;
        await Verification.findByIdAndDelete(id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

async acceptDate(req, res) {
    try {
        const { id } = req.params;
        const dateVerification = await Verification.findById(id);
        if (!dateVerification) {
            return res.status(404).json({ error: 'Date verification record not found' });
        }
        const { userId, partnerId, location, dateTime, description } = dateVerification;
        const newDate = await Date.create({ userId, partnerId, location, dateTime, description });
        await Verification.findByIdAndDelete(id);
        return res.status(201).json(newDate);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

async declineDate(req, res) {
    try {
        const { id } = req.params;
        const dateVerification = await Verification.findById(id);
        if (!dateVerification) {
            return res.status(404).json({ error: 'Date verification record not found' });
        }
        await Verification.findByIdAndDelete(id);
        return res.status(201).json("Date was declined");
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}


}
module.exports = new dateVerificationController()