import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers( {
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer
  } ),
  composeEnhancers(applyMiddleware(thunk))

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);