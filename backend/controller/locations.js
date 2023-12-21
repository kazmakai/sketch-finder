const Location = require('../models/location');

module.exports = {
    index
};

async function index(req, res) {
    const locations = await Location.find({});
    console.log(locations);
  }