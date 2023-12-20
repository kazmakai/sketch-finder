const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    locationID: {type: String, unique: true},
    placeName: {type: String},
    address: {type: String},
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true },
    type: {type: String},
    artwork: {
        type: Schema.Types.ObjectId,
        ref: 'Artwork',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Location', userSchema);