import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div style={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);