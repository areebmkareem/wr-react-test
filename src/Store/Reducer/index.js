import {applyMiddleware, combineReducers, createStore} from 'redux';

import thunk from 'redux-thunk';
import authentication from './Auth';

const rootReducer = combineReducers({authentication});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
