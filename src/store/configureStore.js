import { createStore, combineReducers, applyMiddleware } from 'redux';
import tasksReducer from '../reducers/tasks';
import filtersReducer from '../reducers/filters';
import LoginReducer from '../reducers/login';
import thunk from 'redux-thunk';

//Store creation

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore)
export default () => {
    console.log(filtersReducer)
    const store = createStoreWithMiddleWare(
        combineReducers({
            tasks: tasksReducer,
            filters: filtersReducer,
            login: LoginReducer

        })
    );
    return store;
}
