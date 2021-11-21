export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";
// export const ADD_MESSAGE_BLOCK = "MESSAGES::ADD_MESSAGE_BLOCK";

// Мой вариант:
// export const addMessageBlock = (id) => ( {
//   type: ADD_MESSAGE_BLOCK,
//   payload: id
// } );

export const deleteMessage = (chatId, idToDelete) => ( {
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    idToDelete
  }
} );

export const addMessage = (newMessage, chatId) => ( {
  type: ADD_MESSAGE,
  payload: {
    newMessage,
    chatId
  }
} );

export const addMessageWithThunk = (message, chatId) => (dispatch) => {
  dispatch( addMessage( message, chatId ) );
  if( message.author !== "Bot" ) {
    const botMessage = {
      id: `mes-${ Date.now() }`,
      author: "Bot",
      text: "Пожалуйста, относитесь с уважением к другим авторам, не употербляйте матерные выражения"
    };
    setTimeout( () => dispatch( addMessage( botMessage, chatId ) ), 1500 );
  }

};