import React from "react";
import { Route, Routes } from "react-router-dom";
import Chats from "../Chats/Chats";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";
import "./Main.css";
// import MessagesList from "../MessagesList/MessagesList";
import ChatItem from "../Chats/ChatItem";
import { ChatListData } from "../../constants/ChatListData";
import ChatList from "../ChatList/ChatList";

function Main() {

  return (
    <main className="main_block">
      <Routes>
        <Route exact path="/" element={ <Home/> }/>
        <Route path="/profile" element={ <Profile/> }/>
        <Route path="chats">
          <Route index element={ <ChatList/> }/>
          <Route exact path=":chatId" element={ <Chats/> }/>
        </Route>
        <Route path="*" element={ <Error/> }/>
      </Routes>

    </main>
  );
}

export default Main;
