'use strict';

global.express       = require('express');
global.router        = express.Router();
global.mongoose      = require('mongoose');

global.jwt           = require('express-jwt');
global.auth          = jwt({secret: process.env.JWT_CERT, userProperty: 'payload'});


require('./items');
require('./users');
require('./fileUpload');

module.exports = router;