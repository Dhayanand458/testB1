import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './assets/styles/global.css';
import * as THREE from 'three'; // Import THREE

// Expose THREE globally for console debugging if required (optional, can be removed for production)
window.THREE = THREE;

try {
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
} catch (error) {
    console.error("Failed to render the application:", error);
}
