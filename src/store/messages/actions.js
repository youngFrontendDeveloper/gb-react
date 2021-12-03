export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const deleteMessage = (chatId, idToDelete) => ({
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    idToDelete,
  },
});

export const addMessage = (newMessage, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    newMessage,
    chatId,
  },
});

let timeout;

export const addMessageWithReply = (message, chatId) => (dispatch) => {
  dispatch(addMessage(message, chatId));

  if (message.author !== "Bot") {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      const botMessage = {
        id: `mes-${Date.now()}`,
        author: "Bot",
        text: "Пожалуйста, относитесь с уважением к другим авторам, не употербляйте матерные выражения",
      };
      dispatch(addMessage(botMessage, chatId));
    }, 1500);
  }
};
