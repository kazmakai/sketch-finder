const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artworkSchema = new Schema({
    // ArtworkID: {type: String, unique: true},
    title: {type: String},
    picture: {type: String},
    description: {type: String},
}, {
    timestamps: true
});

module.exports = mongoose.model('Artwork', artworkSchema);