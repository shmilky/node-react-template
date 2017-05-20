'use strict';

import {demo as demoActionTypes } from '../actions/actionTypes'

module.exports = function (oldState = {}, action) {
    switch (action.type) {
        case demoActionTypes.DEMO_ACTION_TYPE :
            return {demo: 'demo'};
        default :
            return oldState;
    }

};




