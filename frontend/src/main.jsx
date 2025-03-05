import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import {PrivyProvider} from '@privy-io/react-auth';

import App from './App';

import ai from './images/ai.avif'
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId={import.meta.env.VITE_REACT_APP_API_KEY}
      config={{
        
        loginMethods: ['email', 'wallet'],
       
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          logo: ai,
        },
     
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>,
);