'use strict';

import React from 'react';

import {helpers} from '../../resources';
import {modalNames} from '../../routes';

const MODAL_NAME = modalNames.DEMO_MODAL;

export default class extends React.Component {
    closeModal () {
        const {pathname, search} = this.props.location;
        const urlWithNoModal = helpers.routingHelpers.addQueryParam(pathname, search, {modal: null});

        this.props.history.push(urlWithNoModal);
    }

    render () {
        const queryParams = helpers.routingHelpers.parseQueryString(this.props.location.search);
        const isOpened = queryParams.modal === MODAL_NAME;

        return (
            <div
                className={'modal fade' + (isOpened ? ' in' : '')}
                id={MODAL_NAME}
                style={{display: (isOpened ? 'block' : 'none')}}
            >
                <div
                    style={{position: 'absolute', zIndex: '-1', height: '100%', width: '100%', backgroundColor: 'rgba(99, 99, 99, 0.45)'}}
                ></div>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <p>Demo Modal</p>
                            <button onClick={this.closeModal.bind(this)}>X</button>
                        </div>
                        <div className="modal-body">
                            <p>Modal Content</p>
                        </div>
                        <div className="modal-footer">
                            <p>Footer</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}