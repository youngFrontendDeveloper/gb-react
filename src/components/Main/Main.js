import React, { useEffect, useRef, useState } from "react";
import MessagesList from "../MessagesList/MessagesList";

import "./Main.css";


function Main() {
  const [ userName, setUserName ] = useState( "" );
  const [ userMessage, setUserMessage ] = useState( "" );
  const [ messages, setMessages ] = useState( [] );
  const nameRef = useRef( "" );
  const messageRef = useRef( "" );


  const changeAuthor = (event) => {
    setUserName( event.target.value );
  };

  const changeMessage = (event) => {
    setUserMessage( event.target.value );
  };

  const addMessageInArr = (event) => {
    event.preventDefault();
    setMessages( [ ...messages, {
      name: userName,
      message: userMessage
    } ] );

    nameRef.current.value = "";
    messageRef.current.value = "";
    nameRef.current.focus();
  };

  const addMessageFromBot = () => {
    let itemArr = messages[ messages.length - 1 ];
    if( itemArr.name !== "Bot" && messages.length !== 0 ) {
      setMessages( [ ...messages, {
        name: "Bot",
        message: "Пожалуйста, соблюдайте правила при написании сообщений: относитесь к другим авторам с уважением, не\n" +
          "        употребляйте матерных и грубых выражений"
      } ] );
    }
  };

  useEffect( () => {
      if( messages.length !== 0 ) {
        addMessageFromBot();
      }
    }
  );

  return (
    <main className="main_block">
      <h1>This is a Main page</h1>
      <div className="messages">
        <MessagesList messages={ messages }/>
      </div>
      <form action="#" className="form">
        <input type="text" ref={ nameRef } onChange={ changeAuthor } placeholder="Your name"
               className="form__item form__name"/>
        <textarea ref={ messageRef } onChange={ changeMessage } placeholder="Your message"
                  className="form__item form__message"/>
        <button onClick={ addMessageInArr } className="form__btn">Add</button>

      </form>
    </main>
  );
}

export default Main;