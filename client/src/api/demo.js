'use strict';

import {helpers} from '../resources';
const {requestHelpers} = helpers;

export default {
    getDemoData: function (cb) {
        requestHelpers.get('/api/v1/get-demo-data', cb);
    }
}