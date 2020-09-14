const router = require('express').Router();
const apiRoutes = require('./api-routes');
// const htmlRoutes = require('./html/html-routes');

// router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
