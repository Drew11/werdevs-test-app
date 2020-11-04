import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux'
import configureStore from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
} from "react-router-dom";


const store = configureStore();

ReactDOM.render(
 <Provider store={store}>
     <Router>
         <App />
     </Router>
 </Provider>,
  document.getElementById('root')
);
