'use strict';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

function Main() {
    return <App />;
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main />);