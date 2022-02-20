import uuid from "react-uuid";


export const ChatListData = [
  {
    chat: "health",
    id: uuid(),
    name: "Чат о здоровье",
    path: "health",
    author: "Bot",
    text: "Пожалуйста, пишите сообщения только о здоровье",
    messages: []
  },
  {
    chat: "films",
    id: uuid(),
    name: "Чат о новых фильмах",
    path: "films",
    author: "Bot",
    text: "Пожалуйста, пишите сообщения только о новых фильмах",
    messages: []
  },
  {
    chat: "children",
    id: uuid(),
    name: "Чат о детях",
    path: "children",
    author: "Bot",
    text: "Пожалуйста, пишите сообщения только о детях",
    messages: []
  },
  {
    chat: "cars",
    id: uuid(),
    name: "Чат о машинах",
    path: "cars",
    author: "Bot",
    text: "Пожалуйста, пишите сообщения только о машинах",
    messages: []
  }
];