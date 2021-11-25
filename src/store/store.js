import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { booksReducer } from "./books/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем объект конфигурации для persist
const persistConfig = {
  key: "root",
  storage,
};

// комбинируем редьюсеры
const rootReducer = combineReducers( {
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
  books: booksReducer
} );

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer( persistConfig, rootReducer );

// создаем store с использованием persistedReducer
export const store = createStore(
  persistedReducer,
  composeEnhancers( applyMiddleware( thunk ) )
);

// создаем persistor
export const persistor = persistStore( store );


// Store без persistor`а
// export const store = createStore(
//   combineReducers( {
//     chats: chatsReducer,
//     profile: profileReducer,
//     messages: messagesReducer
//   } ),
//   composeEnhancers(applyMiddleware(thunk))

// );