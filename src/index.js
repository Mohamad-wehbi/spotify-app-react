import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UseContextProvider } from './component/Context/Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseContextProvider>
    <App />
    </UseContextProvider>
  </React.StrictMode>
);