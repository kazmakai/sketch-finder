const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    placeName: {type: String},
    address: {type: String},
    type: {type: String},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    artwork: {
        type: Schema.Types.ObjectId,
        ref: 'Artwork',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Location', userSchema);