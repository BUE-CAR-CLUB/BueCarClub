import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CarProvider } from './CarContext';


// Burada app CarProvider tagine sarıldı.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarProvider>
 <App/>
</CarProvider>
);

