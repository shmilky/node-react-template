'use strict';

import request from 'simple-client-request';

export default {
    getDemoData: function (cb) {
        request.get('/api/v1/get-demo-data', cb);
    }
}