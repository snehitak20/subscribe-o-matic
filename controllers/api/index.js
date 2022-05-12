const router = require('express').Router();
const userRoutes = require('./userRoutes');
const subscribeRoutes = require('./subscribeRoutes')

router.use('/users', userRoutes);
router.use('/subscribe', subscribeRoutes);

module.exports = router;
