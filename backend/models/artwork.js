const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: {type: String},
    description: {type: String},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Artwork', userSchema);