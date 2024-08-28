import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from './example.jsx';  // Asegúrate de que la extensión sea .jsx
// import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
);

