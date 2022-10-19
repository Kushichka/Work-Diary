import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './redux/reducer';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const store = configureStore({reducer: reducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);