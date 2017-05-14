'use strict';

/**
 * Returns the received function name
 * @param fn - received function
 */
module.exports.getFunctionName = function (fn) {
    var ret = fn.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    return ret;
};

/**
 * Return true if the received obj is function and false otherwise
 * @param obj - checked object
 */
module.exports.isFunction = function(obj) {
    return typeof obj === 'function';
};

module.exports.isPositiveNumber = function (n) {
    return !(isNaN(n) || n <= 0)
};

module.exports.removeNullKeys = function (obj) {
    var newObj = {};

    Object.keys(obj).forEach(function (key) {
        if (obj[key] !== null && obj[key] !== undefined){
            newObj[key] = obj[key];
        }
    });

    return newObj;
};