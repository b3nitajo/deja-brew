const router = require('express').Router();
const methodRoutes = require('./auth');

router.use('/methods', methodRoutes);

module.exports = router;
