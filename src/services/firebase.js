import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyArVn0Bdwk-ibxkevYBb8b-MXJtLETm7is",
  authDomain: "learning-react-f26c5.firebaseapp.com",
  databaseURL: "https://learning-react-f26c5-default-rtdb.firebaseio.com",
  projectId: "learning-react-f26c5",
  storageBucket: "learning-react-f26c5.appspot.com",
  messagingSenderId: "480052411602",
  appId: "1:480052411602:web:2a26e8d206e91ea113810b"
};

// Initialize Firebase - связывания нашего проекта с Firebase:
const app = initializeApp(firebaseConfig);

// Получаем объект auth из инициализированного приложения
export const auth = getAuth(app);

export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
  await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

// Получаем данные из базы данных firebase:
export const db = getDatabase(app);

// cсылка на user из базы данных
export const userRef = ref(db, "user");

// cсылка на chats из базы данных
export const chatsRef = ref(db, "chats");

// cсылка на messages из базы данных
export const messagesRef = ref(db, "messages");

// cсылка на конкретный чат
export const getChatRefById = (id) => ref(db, `chats/${id}`);

// cсылка на сообщения у конкретного чата
export const getChatMsgsListRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);

// cсылка на все сообщения у конкретного чата (для удаления сообщений при удалении чата)
export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);

git add*
