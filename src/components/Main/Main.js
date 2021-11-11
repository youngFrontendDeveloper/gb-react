import React from "react";
import { Route, Routes } from "react-router-dom";
import Chats from "../Chats/Chats";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";
import "./Main.css";
import MessagesList from "../MessagesList/MessagesList";

function Main() {

  return (
    <main className="main_block">
      <Routes>
        <Route exact path="/" element={ <Home/> }/>
        <Route path="/profile" element={ <Profile/> }/>
        <Route exact path="/chats/*" element={ <Chats/> }/>
        {/*<Route exact path="chats/:chatId" element={ <MessagesList/> }/>*/}
        <Route path="*" element={ <Error/> }/>
      </Routes>

    </main>
  );
}

export default Main;
