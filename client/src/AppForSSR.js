'use strict';

import React from 'react';
import {StaticRouter, Route, Switch} from 'react-router-dom';

import {demoPages} from './routes';

import {HomePage, DemoPage} from './containers/pages';

import layoutStyles from './styleMain/layout.sass';

export default function (route) {
    return class extends React.Component {
        render() {
            return (
                <div className={layoutStyles.layout}>
                    <StaticRouter location={route} context={{}}>
                        <div>
                            <Switch>
                                <Route exact path={'/'} component={HomePage}/>
                                <Route exact path={demoPages.DEMO_PAGE} component={DemoPage}/>
                                <Route exact path={'*'} component={HomePage}/>
                            </Switch>
                        </div>
                    </StaticRouter>
                </div>
            );
        }
    }
}
