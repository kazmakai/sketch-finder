const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Artworkid: {type: String, unique: true},
    title: {type: String},
    picture: {type:String},
    description: {type: String},
}, {
    timestamps: true
});

module.exports = mongoose.model('Artwork', userSchema);