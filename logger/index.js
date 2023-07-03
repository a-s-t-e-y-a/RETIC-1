const loggerConf = require('./logger.conf_dev');

let logger = null;
/*
    Add your coustom logger according to the development or production way
*/
logger = loggerConf();

module.exports = logger;
