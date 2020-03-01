import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


import { Provider } from '../node_modules/react-redux'
import store from './store'


ReactDOM.render(
    <Provider store={store}>
        
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
