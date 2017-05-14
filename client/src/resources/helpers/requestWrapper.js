'use strict';

require('es6-promise').polyfill();

// import * as fetch from 'isomorphic-fetch';
// import $ from 'jquery';
//
// import * as Logger from './clientLogger';

var fetch = require('isomorphic-fetch');
var $ = require('jquery');
var Logger = require('./clientLogger');
var currVersion = new Date().getTime();

// Using the async isomorphic fetch for sending crud requests
function asyncReq(url, method, body, cb) {
    // var headers = new Headers({
    //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
    //     'Content-Type': 'application/json'
    // });

    var defaultOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'text/plain'
        },
        method: method
    };

    if (method === 'post' || method === 'put') {
        defaultOptions.body = JSON.stringify(body);
    }

    fetch(url, defaultOptions).then(function(response) {
        // TODO: need to add check if we have a error message in the response and use it instead
        if (response.status >= 400) {
            Logger.log('helpers.asyncReq (checkErrorCodeHandler)', 'Got error of code ' + response.status + ' for request' + response.url);
        }

        // return response.text();
        return response.json();
    }).then(function (json) {
        var actualResData = json.data || json;
        var errorMsg = json.errorMessage;
        var succMsg = json.successMessage;

        if (succMsg) {
            Logger.log('helpers.asyncReq (resHandler)', 'Success response - ' + succMsg);
        }
        else if (errorMsg) {
            throw new Error(JSON.stringify(errorMsg));
        }
        else {
            Logger.log('helpers.asyncReq (resHandler)', method.toUpperCase() + ' ' + url + ' request responded with neither success or error messages were received with the response');
        }

        if (!actualResData && !errorMsg) {
            errorMsg = method.toUpperCase() + ' ' + url + ' request responded with neither data or error message, will be handled as error response';
            throw new Error(errorMsg);
        }

        cb(null, actualResData);
    }).catch (function(err) {
        Logger.logError('helpers.asyncReq (resErrHandler)', JSON.stringify({message: err.message || 'No Message attached to error', stack: err.stack}), null, 2);

        cb(err.message || err);
    });
}

module.exports = {
    get: function (url, queryParams, cb) {
        url+= '?v=' + currVersion;

        if (typeof queryParams === 'function') {
            cb = queryParams;
        }
        else {
            if (queryParams) {
                url += '&' + $.param(queryParams);
            }
        }

        asyncReq(url, 'get', null, function(err, data) {
            cb(err, data);
        });
    },

    post: function (url, data, cb) {
        if (typeof data === 'function') {
            cb = data;
            data = {};
        }

        asyncReq(url, 'post', data, function(err, data) {
            cb(err, data);
        });
    },

    put: function (url, data, cb) {
        if (typeof data === 'function') {
            cb = data;
            data = {};
        }

        asyncReq(url, 'put', data, function(err, data) {
            cb(err, data);
        });
    },

    postFile: function (url, data, cb) {
        function onProgress (progEvent) {
            if (progEvent.lengthComputable) {
                Logger.log('helpers.postFile (onProgress)', 'File upload completion - ' + (progEvent.loaded/progEvent.total)*100 + '%');
            }
        }

        function onReady (readyEvent) {
            cb(null, readyEvent)
        }

        function onError (err) {
            cb(err)
        }

        var formData = new FormData();
        var xhr = new XMLHttpRequest();

        Object.keys(data).forEach(function (key) {
            formData.append(key, data[key]);
        });

        xhr.open('post', url, true);
        xhr.addEventListener('error', onError, false);
        xhr.addEventListener('progress', onProgress, false);
        xhr.send(formData);
        xhr.addEventListener('readystatechange', onReady, false);
    }
};