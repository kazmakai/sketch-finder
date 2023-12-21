const Location = require('../models/location');
const Artwork = require('../models/artwork');


module.exports = {
    index,
    show
};

async function index(req, res) {
    await Location.find({}).then(locations => {
        res.json(locations);
    // console.log(locations);
    })
  }

async function show(req, res) {
    await Location.findById(req.params.id).populate('artwork').then(location => {
        res.json(location);
    console.log(location);
    })
  }