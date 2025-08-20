
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set REACT_APP_CODESPACE_NAME from environment if available
if (!process.env.REACT_APP_CODESPACE_NAME && window.location.hostname.includes('app.github.dev')) {
  const codespace = window.location.hostname.split('-8000')[0];
  process.env.REACT_APP_CODESPACE_NAME = codespace;
  console.log('Detected Codespace:', codespace);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
// Detect Codespace name from window location if available
let codespaceName = undefined;
if (window.location.hostname.includes('app.github.dev')) {
  codespaceName = window.location.hostname.split('-8000')[0];
  console.log('Detected Codespace:', codespaceName);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App codespaceName={codespaceName} />
  </React.StrictMode>
);

reportWebVitals();
