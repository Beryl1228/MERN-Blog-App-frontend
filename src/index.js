import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from './redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <Router>
    <App />
    </Router>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

