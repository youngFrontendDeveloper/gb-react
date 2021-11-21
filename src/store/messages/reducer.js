import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";
import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";

const initialMessages = {
  chat1: [
    {
      id: `mes-${ Date.now() }`,
      author: "Name",
      text: "Message"
    }
  ],
  chat2: [
    {
      id: `mes-${ Date.now() }`,
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
        [ payload.chatId ]: [ ...state[ payload.chatId ], payload.newMessage ]
      };

    case DELETE_MESSAGE: {
      const newMessages = { ...state };
      newMessages[ payload.chatId ] = newMessages[ payload.chatId ].filter( ({ id }) => id !== payload.idToDelete );
      return newMessages;
    }

    case ADD_CHAT:
      return {
        ...state,
        [ payload.id ]: []
      };

    case DELETE_CHAT: {
      const newMessages = { ...state };
      delete newMessages[ payload.chatId ];
    }

    // case ADD_MESSAGE_BLOCK:
    //   return {
    //     ...state, [payload]:[]
    //   }
    default:
      return state;
  }
};

