const Store = require('../../models/map/mapModel');


class mapController {

async createStore(req, res) {
    try {
        const { name, address } = req.body;
        const newStore = await Store.create({ name, address });
        res.status(201).json(newStore);
        
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

async getAllStores (req, res) {
    try {
        const stores = await Store.find();
        res.status(200).json(stores);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

// async getDateByUserId (req, res) {
//     try {
//         const { userId } = req.params;
//         const dates = await Date.find({partnerId: userId});
//         res.status(200).json(dates);
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// async getDate (req, res) {
//     try {
//         const { id } = req.params;
//         const date = await Date.findById(id);
//         res.status(200).json(date);
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// async updateDate(req, res) {
//     try {
//         const { id } = req.params;
//         const updatedDate = await Date.findByIdAndUpdate(id, req.body, { new: true });
//         res.status(200).json(updatedDate);
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

// async deleteDate (req, res) {
//     try {
//         const { id } = req.params;
//         await Date.findByIdAndDelete(id);
//         res.status(204).end();
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

}
module.exports = new mapController()