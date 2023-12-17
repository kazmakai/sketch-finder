const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String},
    googleID: {
        type: String,
        required : true
    },
    email: {type: String},
    avatar: {type: String}

}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);