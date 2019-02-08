import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger";
import thunk from 'redux-thunk'
import math from './reducers/mathReducer';
import user from './reducers/userReducer'

const store = createStore(
    combineReducers({math, user}
    ),
    {},
    applyMiddleware( createLogger(), thunk))
export default store;