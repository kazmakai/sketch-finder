const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleID: {
        type: String,
        required : true
    },
    name: {type: String},
    email: {type: String},
    avatar: {type: String},
    checkIns: {type: Number},
    bio: {type: String},
    city: {type: String}
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);