import { ADD_MESSAGE, ADD_MESSAGE_BLOCK } from "./actions";
import uuid from "react-uuid";

const initialMessages = {
  chat1: [
    {
      id: uuid(),
      author: "Name",
      text: "Message"
    },
    {
      id: uuid(),
      author: "SomeName",
      text: "Message2"
    },
  ],
  chat2: [
    {
      id: uuid(),
      author: "Author",
      text: "this is chat2"
    },
  ],
  chat3: [],
};

export const messagesReducer = (state = initialMessages, { type, payload }) => {
  switch( type ) {
    case ADD_MESSAGE:
      return {
        ...state,
        // [ payload.chatId ]: [ ...state[ payload.chatId ], payload.newMessage ]
      };
    case ADD_MESSAGE_BLOCK:
      return {
        ...state, [payload]:[]
      }
    default:
      return state;
  }
};

