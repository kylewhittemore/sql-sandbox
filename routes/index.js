// this is the entry point to the routing tree that we will be creating for our api

// the first step is to instantiate a new instance of express router as below.
// express router behaves similarly to an express app that you would create in the server file, however it is generic and can be modularized/exported
const router = require('express').Router();

// 
const apiRoutes = require('./apiRoutes')
router.use('/api', apiRoutes)

const htmlRoutes = require('./htmlRoutes')
router.use('/',htmlRoutes)

module.exports = router;