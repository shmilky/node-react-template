'use strict';

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import layoutStyles from './styleMain/layout.sass';

import { demoPages } from './routes';
import { DemoModal } from './containers/modals';
import { HomePage, DemoPage } from './containers/pages';

function App() {
    return (
        <div className={layoutStyles.layout}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path={demoPages.DEMO_PAGE} element={<DemoPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <DemoModal />
            </BrowserRouter>
        </div>
    );
}

export default App;