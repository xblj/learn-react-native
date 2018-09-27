import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoApp from './reducer';
let store = createStore(todoApp, applyMiddleware(thunk));

export default store;