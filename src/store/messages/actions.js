export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_MESSAGE_BLOCK = "MESSAGES::ADD_MESSAGE_BLOCK";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

// Мой вариант:
// export const addMessageBlock = (id) => ( {
//   type: ADD_MESSAGE_BLOCK,
//   payload: id
// } );

export const addMessage = (newMessage, chatId) => ( {
  type: ADD_MESSAGE,
  payload: {
    newMessage,
    chatId
  }
} );

export const deleteMessage = (chatId, idToDelete) => ( {
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    idToDelete
  }
} );
