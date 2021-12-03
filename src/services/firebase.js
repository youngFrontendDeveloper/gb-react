import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArVn0Bdwk-ibxkevYBb8b-MXJtLETm7is",
  authDomain: "learning-react-f26c5.firebaseapp.com",
  projectId: "learning-react-f26c5",
  storageBucket: "learning-react-f26c5.appspot.com",
  messagingSenderId: "480052411602",
  appId: "1:480052411602:web:2a26e8d206e91ea113810b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Получаем объект auth из инициализированного приложения
export const auth = getAuth(app);

export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
  await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

// Получаем данные из базы данных farebase:
export const db = getDatabase(app);

// сылка на user из базы данных
export const userRef = ref(db, "user");

// сылка на chats из базы данных
export const chatsRef = ref(db, "chats");

// сылка на messages из базы данных
export const messagesRef = ref(db, "messages");

// Доступ к конкретному чату
export const getChatRefById = (id) => ref(db, `chats/${id}`);

// Доступ к сообщениям у конкретного чата
export const getChatMsgsListRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);

export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
