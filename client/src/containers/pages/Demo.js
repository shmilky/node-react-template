'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

import {landing as landingRoutes} from '../../routes';

import {SharedComponent} from '../../components';

export default class extends React.Component {
    render () {
        const {data=[]} = this.state || {};

        return (
            <div>
                <h1>Demo Page</h1>
                <ul>
                    {data.map(function (itElement, id) {
                        return (<li key={id}>{itElement.name}</li>)
                    })}
                </ul>
                <Link to={landingRoutes.HOME_PAGE}>Home</Link>
                <SharedComponent/>
            </div>
        );
    }
}