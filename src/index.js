import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux'
import configureStore from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
 <Provider store={store}>
        <App />
 </Provider>,
  document.getElementById('root')
);
