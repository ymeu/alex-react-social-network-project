import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer 
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;