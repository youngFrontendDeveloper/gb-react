import React, { useEffect, useRef, useState } from "react";
import MessagesList from "../MessagesList/MessagesList";

import "./Main.css";
import MessageFromBot from "../MessageFromBot/MessageFromBot";

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
    console.log(messages);
    // console.log(messages[ messages.length - 1 ][" name" ]);
  };

  const createComponent = messages.map( (item, index) => {
    return (
      <div className="messages__item" key={ index }>
        <p className="messages__author">Автор: <span className="messages__author-name">{ item.name }</span></p>
        <p className="messages__text">{ item.message }</p>
      </div>
    );
  } );


  useEffect( () => {
    console.log( "ok" );
    // messageBot();
  }, [ messages ] );

  // const messageBot = () => messages[ messages.length - 1 ][" name" ] !== "bot" ? true : false;

  // const isEmpty = () => messages.length ? true : false;

  return (
    <main className="main_block">
      <h1>This is a Main page</h1>
      <div className="messages">
        <MessagesList createComponent={ createComponent } />
        <MessageFromBot/>
      </div>
      <form action="#" className="form">
        <input type="text" ref={ nameRef } onChange={ changeAuthor } placeholder="Your name"
               className="form__item form__name"/>
        <textarea ref={ messageRef } onChange={ changeMessage } placeholder="Your message"
                  className="form__item form__message"/>
        <button onClick={ addMessageInArr } className="form__btn">Submit</button>
      </form>
    </main>
  );
}

export default Main;