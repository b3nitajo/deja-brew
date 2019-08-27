const router = require('express').Router();
const auth = require('./auth');
const users = require('./users');
const saved = require('./saved_recipes');
const methodRoutes = require('./methods');

// router.use('/', methodRoutes);
router.use('/methods', methodRoutes);
router.use('/auth', auth);
router.use('/users', users);
router.use('/saved', saved);



module.exports = router;
