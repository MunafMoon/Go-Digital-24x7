import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';

const Router = import.meta.env.BASE_URL === '/' ? BrowserRouter : HashRouter;

if (Router === BrowserRouter && window.location.hash.startsWith('#/')) {
  const route = new URL(window.location.hash.slice(1), window.location.origin);
  if (route.origin === window.location.origin) {
    window.history.replaceState(window.history.state, '', route.href);
  }
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);



