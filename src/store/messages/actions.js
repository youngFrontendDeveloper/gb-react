export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_MESSAGE_BLOCK = "MESSAGES::ADD_MESSAGE_BLOCK";

export const addMessage = (newMessage) => ( {
  type: ADD_MESSAGE,
  payload: newMessage
} );

export const addMessageBlock = (id) => ( {
  type: ADD_MESSAGE_BLOCK,
  payload: id
} );

// export const addMessage = (newMessage, chatId) => ( {
//   type: ADD_MESSAGE,
//   payload: {
//     newMessage,
//     chatId
//   }
// } );
