import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialState = [
  {
    name: "chat1",
    id: "chat1",
  },
  {
    name: "chat2",
    id: "chat2",
  },
  {
    name: "chat3",
    id: "chat3",
  },
];

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch( type ) {
      case ADD_CHAT:
        return [
          ...state, payload
        ];
      case DELETE_CHAT:
        return state.filter( ({ id }) => id !== payload.chatId );
      default:
        return state;
    }
  };