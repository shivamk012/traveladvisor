import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'mapbox-gl/dist/mapbox-gl.css';
import { store } from './store/store';
import { Provider } from 'react-redux';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<Provider store={store}><App/></Provider>);
