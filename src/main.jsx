import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const API_KEY = 'RGAPI-ff09ff8c-c9f9-4d7e-ad50-7d948a93bb05';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App API_KEY={API_KEY} />
  </React.StrictMode>
);
