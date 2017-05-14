'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

import {demoApi} from '../../api';
import {logger} from '../../resources/helpers';

import {landing as landingRoutes} from '../../routes';

import {SharedComponent} from '../../components';

export default class extends React.Component {
    componentWillMount () {
        demoApi.getDemoData(function (err, demoData) {
            if (err) {
                logger.logError(err);
            }
            else {
                this.setState({data: demoData});
            }
        }.bind(this))
    }

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