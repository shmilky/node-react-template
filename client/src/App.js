'use strict';

import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import layoutStyles from './styleMain/layout.sass';

import {demoPages} from './routes';
import {DemoModal} from './containers/modals';

import {HomePage, DemoPage} from './containers/pages';

class App extends React.Component {
    //noinspection JSMethodCanBeStatic
    render () {
        return (
            <div className={layoutStyles.layout}>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path={'/'} component={HomePage}/>
                            <Route exact path={demoPages.DEMO_PAGE} component={DemoPage}/>
                            <Redirect from={'*'} to={'/'}/>
                        </Switch>
                        <Route path="*" component={DemoModal}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;