const router = require('express').Router();
const apiRoutes = require('./api');
const yelpRoutes = require('./yelpapi');

// API Routes
router.use('/api/v1', apiRoutes);
router.use('/yelpapi/v1', yelpRoutes);

module.exports = router;
