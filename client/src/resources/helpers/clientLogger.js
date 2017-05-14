'use strict';

module.exports = {
    log: function (msg, type) {
        console.log(msg + (type ? '(' + type + ')' : ''))
    },
    logError: function (msg) {
        window.alert(msg);
        this.log(location, msg);
    },
    testError: function (pass, msg) {
        if (!pass) {
            this.logError(msg);
        }
    }
};