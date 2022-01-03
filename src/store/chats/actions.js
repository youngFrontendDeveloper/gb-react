import { onValue, set, remove } from "firebase/database";
import {
  chatsRef,
  getChatMsgsRefById,
  getChatRefById,
} from "../../services/firebase";


export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const SET_CHATS = "CHATS::SET_CHATS";

//Добавление чата без Firebase
export const addChat = (newChat) => ({
  type: ADD_CHAT,
  payload: newChat,
});

//Удаление чата без Firebase
export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: {
    chatId: id,
  },
});

//Удаление чата c Firebase
export const deleteChatWithFb = (chatId)  => (dispatch) => {
    remove(getChatRefById(chatId));
    remove(getChatMsgsRefById(chatId));
};

//Добавление чата c Firebase
export const addChatWithFb = (newChat) => (dispatch) => {
  set(getChatMsgsRefById(newChat.id), { empty: true });
  set(getChatRefById(newChat.id), newChat);
};

export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const initChatsTracking = () => (dispatch) => {
  onValue(chatsRef, (chatsSnap) => {
    const newChats = [];

    chatsSnap.forEach((snapshot) => {
      newChats.push(snapshot.val());
    });

    dispatch(setChats(newChats));
  });
};
