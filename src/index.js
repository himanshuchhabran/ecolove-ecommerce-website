import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-kc6mmm5xildevzlb.us.auth0.com"
    clientId="VaWg927PzDV6bwEfYpUhHoZps5hkJoUh"
    redirect_uri= {window.location.origin}>
  <ShopContextProvider>
    
    <App />
  
  </ShopContextProvider>
  </Auth0Provider>
  
);

reportWebVitals();
