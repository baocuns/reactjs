//Model: import / export
import logger from './logger/logger.js'; //export default
import {
    TYPE_LOG,
    TYPE_WARN,
    TYPE_ERROR
}
from './constants.js';

logger('Test message...', TYPE_WARN);

//obj
import * as constants from './constants.js';
console.log(constants);

logger('Test message...', constants.TYPE_WARN);