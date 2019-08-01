const router = require('express').Router();
const auth = require('./auth');
const users = require('./users');
const methodRoutes = require('./methods');

// router.use('/', methodRoutes);
router.use('/methods', methodRoutes);
router.use('/auth', auth);
router.use('/users', users);



module.exports = router;
