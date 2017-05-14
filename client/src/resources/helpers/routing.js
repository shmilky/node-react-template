'use strict';

import $ from 'jquery';
import objectHelpers from './object'

function parseQueryString (queryStr) {
    if (!queryStr) {
        return {}
    }

    if (queryStr[0] === '?') {
        queryStr = queryStr.substr(1);
    }

    return JSON.parse('{"' + decodeURI(queryStr.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
}

module.exports.addQueryParam = function (path, currQueryStr, newParams) {
    const currQueryParams = parseQueryString(currQueryStr);
    const updatedQueryParams = objectHelpers.removeNullKeys(Object.assign(currQueryParams, newParams));

    return path + '?' + $.param(updatedQueryParams);
};

module.exports.parseQueryString = parseQueryString;
