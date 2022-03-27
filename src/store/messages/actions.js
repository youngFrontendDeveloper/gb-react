import { push } from "firebase/database";
import { getChatMsgsListRefById } from "../../services/firebase";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";
export const SET_CHATS = "MESSAGES::SET_CHATS";

export const deleteMessage = (chatId, idToDelete) => ({
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    idToDelete,
  },
});

export const addMessage = (chatId, newMessage) => ({
  type: ADD_MESSAGE,
  payload: {
    newMessage,
    chatId,
  },
});

export const setMessages = (messages) => ({
  type: SET_CHATS,
  payload: messages,
});

let timeout;

export const addMessageWithReply = ( chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));
  push(getChatMsgsListRefById(chatId), message);

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
      dispatch(addMessage( chatId, botMessage));
      push(getChatMsgsListRefById(chatId), botMessage);
    }, 1500);
  }

};

// export const initMessagesTracking = () => (dispatch) => {
//   onValue(messagesRef, (snapshot) => {
//     const newMsg = {};
//     snapshot.forEach((chatMsgsSnap) => {
//       newMsg[chatMsgsSnap.key] = Object.values(
//         chatMsgsSnap.val().messageList || {}
//       );
//     });
//     dispatch(setMessages(newMsg));
//   });
// };
