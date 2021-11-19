import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Chats from "../Chats/Chats";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";
import "./Main.css";
import ChatList from "../ChatList/ChatList";

// const initialChatList = [
//   {
//     name: "chat1",
//     id: "chat1",
//   },
//   {
//     name: "chat2",
//     id: "chat2",
//   },
//   {
//     name: "chat3",
//     id: "chat3",
//   },
// ];

// const initialMessages = {
//   chat1: [
//     {
//       text: "text1",
//       author: "human",
//       id: "mes1",
//     },
//   ],
//   chat2: [
//     {
//       text: "this is chat2",
//       author: "human",
//       id: "mes2",
//     },
//   ],
//   chat3: [],
// };

function Main() {

  // const [ chatList, setChatList ] = useState( initialChatList );
  // const [ messages, setMessages ] = useState( initialMessages );

  // const handleAddChat = useCallback( (name) => {
  //   const newId = `chat${ Date.now() }`;
  //   setChatList( (prevChatList) => [ ...prevChatList, { name, id: newId } ] );
  //   setMessages( (prevMessages) => ( {
  //     ...prevMessages,
  //     [ newId ]: [],
  //   } ) );
  // }, [] );

  // const handleDeleteChat = useCallback( (idToDelete) => {
  //   setChatList( (prevChatList) =>
  //     prevChatList.filter( ({ id }) => id !== idToDelete )
  //   );
  //   setMessages( (prevMessages) => {
  //     const newMessages = { ...prevMessages };
  //     delete newMessages[ idToDelete ];
  //
  //     return newMessages;
  //   } );
  // }, [] );

  return (
    <main className="main_block">
      <Routes>
        <Route exact path="/" element={ <Home/> }/>
        <Route path="/profile" element={ <Profile/> }/>
        <Route path="chats">
          <Route index element={ <ChatList
            // onAddChat={ handleAddChat }
            // onDeleteChat={ handleDeleteChat }
            // chatList={ chatList }
            /> }/>
          <Route exact path=":chatId" element={ <Chats
            // chatList={ chatList }
            // messages={ messages }
            // setMessages={ setMessages }
            // onAddChat={ handleAddChat }
            // onDeleteChat={ handleDeleteChat }
          /> }/>
        </Route>
        <Route path="*" element={ <Error/> }/>
      </Routes>

    </main>
  );
}

export default Main;
