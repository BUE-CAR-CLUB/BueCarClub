import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CarProvider } from './CarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarProvider>
 <App/>
</CarProvider>
);

