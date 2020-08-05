import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import cartReducer from './reducers/cartReducer'
import App from './components/App';

const store = createStore(
    cartReducer,
    composeWithDevTools()
)

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
rootElement);
