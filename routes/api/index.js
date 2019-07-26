const router = require('express').Router();
const authRoutes = require('./auth');
const methodRoutes = require('./methods');

// router.use('/', methodRoutes);
router.use('/methods', methodRoutes);



module.exports = router;
