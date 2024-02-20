const Place = require('../../models/map/placeModel');


class PlaceController {

async createPlace(req, res) {
    try {
        const { name, address } = req.body;
        const newPlace = await Place.create({ name, address });
        res.status(201).json(newPlace);
        
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

async getAllPlaces (req, res) {
    try {
        const places = await Place.find();
        res.status(200).json(places);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

async getPlace (req, res) {
    try {
        const { id } = req.params;
        const place = await Place.findById(id);
        res.status(200).json(place);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
};

async getPlacesByLocationIds (req, res) {
    const places = []
    try {
        const { locationIds } = req.body;
        for (let i = 0; i < locationIds.length; i++) {
            const id = locationIds[i];
            const place = await Place.findById(id);
            places.push(place);
            console.log(place);
        }
        
        res.status(200).json(places);
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
module.exports = new PlaceController()