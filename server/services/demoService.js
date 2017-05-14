'use strict';

module.exports = {
    getDemoData: function (cb) {
        cb(null, [{id: 1, name: 'element 1'}, {id: 2, name: 'element 2'}]);
    }
};