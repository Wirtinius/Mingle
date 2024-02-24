const mongoose = require('mongoose');
const geocoder = require('../../utils/geocoder')

const Place = new mongoose.Schema({
    name: String,
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location: {
    type: {
        type: String, 
        enum: ['Point'],
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    },
    formatedAddress: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

Place.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formatedAddress: loc[0].formattedAddress
    }

    this.address = undefined;
    next();
})

module.exports = mongoose.model('Place', Place);
