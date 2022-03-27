import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { onValue } from "firebase/database";
import { auth, messagesRef } from "../../services/firebase";
import { signIn, signOut } from "../../store/profile/actions";
import Chats from "../Chats/Chats";
import Home from "../Home/Home";
import { ConnectedProfile } from "../Profile/Profile";
import Error from "../Error/Error";
import ChatList from "../ChatList/ChatList";
import BooksList from "../BooksList/BooksList";
import RegistrationWarning from "../RegistrationWarning/RegistrationWarning";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { PublicOutlet } from "../PublicRoute/PublicRoute";

import "./Main.css";

function Main() {
  const dispatch = useDispatch();
  const [msgs, setMsgs] = useState({});

  useEffect(() => {
    //подписка на изменение авторизации
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn());
      } else {
        dispatch(signOut());
      }
    }, );

    //удаление подписки на изменение  авторизации
    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const newMsgs = {};

      snapshot.forEach((chatMsgsSnap) => {
        newMsgs[chatMsgsSnap.key] = Object.values(
          chatMsgsSnap.val().messageList || {}
        );
      });

      setMsgs(newMsgs);
    });
  }, []);

  return (
    <main className="main_block">
      <Routes>
        <Route exact path="/" element={<Home />} />

        {/* <Route exact path="/" element={<PublicRoute />}>
          <Route path="" element={<Home />} />
        </Route> */}

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ConnectedProfile />
            </PrivateRoute>
          }
        />
        <Route path="chats">
          <Route
            index
            element={
              <PrivateRoute>
                <ChatList />
              </PrivateRoute>
            }
          />
          <Route
            path=":chatId"
            element={
              <PrivateRoute>
                <Chats msgs={msgs} />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/books" element={<BooksList />} />
        <Route exact path="/warning" element={<PublicOutlet />}>
          <Route path="" element={<RegistrationWarning />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );

  // return (
  //   <main className="main_block">
  //     <Routes>
  //       <Route exact path="/" element={<Home />} />

  //       {/* <Route exact path="/" element={<PublicOutlet />}>
  //         <Route path="" element={<Home />} />
  //       </Route> */}

  //       <Route
  //         path="/profile"
  //         element={
  //           <PrivateRoute>
  //             <ConnectedProfile />
  //           </PrivateRoute>
  //         }
  //       />
  //       <Route path="chats">
  //         <Route
  //           index
  //           element={
  //             <PrivateRoute>
  //               <ChatList />
  //             </PrivateRoute>
  //           }
  //         />
  //         <Route
  //           exact
  //           path=":chatId"
  //           element={
  //             <PrivateRoute>
  //               <Chats msgs={msgs} />
  //             </PrivateRoute>
  //           }
  //         />
  //       </Route>
  //       <Route path="/books" element={<BooksList />} />
  //       {/* <Route path="/warning" element={<RegistrationWarning />} /> */}
  //       {/* <Route exact path="/warning" element={<PublicOutlet />}> */}
  //       <Route exact path="/warning" element={<PublicOutlet />}>
  //         <Route path="" element={<RegistrationWarning />} />
  //       </Route>
  //       <Route path="*" element={<Error />} />
  //     </Routes>
  //   </main>
  // );

  // return (
  //   <main className="main_block">
  //     <Routes>
  //       <Route exact path="/" element={<Home />} />
  //       <Route path="/profile" element={<Profile />} />
  //       <Route path="chats">
  //         <Route index element={<ChatList />} />
  //         <Route exact path=":chatId" element={<Chats />} />
  //       </Route>
  //       <Route path="/books" element={<BooksList />} />
  //       <Route path="*" element={<Error />} />
  //     </Routes>
  //   </main>
  // );
}

export default Main;
