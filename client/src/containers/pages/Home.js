'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

import routingHelpers from 'react-router-routing-helpers';
import {demoPages as demoPagesRoutes, modalNames} from '../../routes';

import {SharedComponent} from '../../components';

import styleGuide from '../../styleMain/styleGuide.global.sass';

export default class extends React.Component {
    openModal () {
        const {pathname, search} = this.props.location;
        const urlWithNoModal = routingHelpers.addQueryParam(pathname, search, {modal: modalNames.DEMO_MODAL});

        this.props.history.push(urlWithNoModal);
    }

    render () {
        return (
            <div>
                <h1>Home Page</h1>
                <h2 className="only-mobile">Mobile Only</h2>
                <h2 className="only-desktop">Desktop Only</h2>
                <p>For data using demo go to - <Link to={demoPagesRoutes.DEMO_PAGE}>Demo Page</Link></p>
                <p>To see modal behavior click on - <button onClick={this.openModal.bind(this)}>Open Modal</button></p>
                <SharedComponent/>
            </div>
        );
    }
}

