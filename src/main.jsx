import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom';
import CoinContextProvider from './context/CoinContext.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx'; // Import ThemeProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider> {/* Wrap App with ThemeProvider */}
        <CoinContextProvider>
          <App />
        </CoinContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
