const router = require('express').Router();
const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('../apiRoutes/zoopkeeperRoutes');

router.use(animalRoutes, zookeeperRoutes);

module.exports = router;