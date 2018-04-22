import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemDataReducer from "./reducers/ItemDataReducer";

const store = createStore(
    combineReducers({itemDataReducer}),
    applyMiddleware(thunk)
);

export default store;
