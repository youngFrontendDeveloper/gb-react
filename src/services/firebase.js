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

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
  await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const userRef = ref(db, "user");
export const chatsRef = ref(db, "chats");
export const messagesRef = ref(db, "messages");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMsgsListRefById = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);
export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
