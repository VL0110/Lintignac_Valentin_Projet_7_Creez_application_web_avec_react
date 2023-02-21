// Import react, react-router-dom, style global et pages

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/app'


// Mise en place "const" root vers app (routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


