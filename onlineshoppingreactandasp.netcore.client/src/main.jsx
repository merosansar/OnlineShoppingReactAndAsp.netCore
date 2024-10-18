

import React from 'react';
import ReactDOM from 'react-dom/client';  // Make sure to import createRoot
import App from './App.jsx';

import './index.css';

// Correctly use ReactDOM.createRoot here
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);