import React from'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import { addTask } from './actions/tasks'


const store = configureStore();
/*
const One = store.dispatch(addTask({  "id": 1,
"username": "Valerii",
"email": "hello@gmail.com",
"text": "Hello there",
"status": 0 }));
const Two = store.dispatch(addTask({  "id": 2,
"username": "Valerii",
"email": "hello@gmail.com",
"text": "Hello there",
"status": 0 }));
*/

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
