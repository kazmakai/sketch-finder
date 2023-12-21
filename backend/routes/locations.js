const express = require('express');
const router =express.Router();

const locationController = require('../controller/locations');

// GET /movies
router.get('/', locationController.index);

module.exports = router;