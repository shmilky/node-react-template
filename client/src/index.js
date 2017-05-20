'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import thunkMiddleware from 'redux-thunk';
import reduxLoggerMiddlewareCreator from 'redux-logger';

import storeReducers from './store';

const store = createStore(
    storeReducers,
    applyMiddleware(
        thunkMiddleware,
        reduxLoggerMiddlewareCreator()
    )
);

import App from './App';

function Main () {
    return (
        <Provider store={store}>
            <App/>
        </Provider>

    );
}

ReactDOM.render(
    <Main/>,
  document.getElementById('root')
);