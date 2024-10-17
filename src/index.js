import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // If you are using Bootstrap

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);