import React, { useEffect, useRef, useState } from "react";
import MessagesList from "../MessagesList/MessagesList";

import "./Main.css";

function Main() {
  const [ userName, setUserName ] = useState( "" );
  const [ userMessage, setUserMessage ] = useState( "" );
  const [ messages, setMessages ] = useState( [] );
  const nameRef = useRef( "" );
  const messageRef = useRef( "" );


  const changeInput = () => {
    setUserName( nameRef.current.value );
    setUserMessage( messageRef.current.value );
  };

  const addMessageInArr = (event) => {
    event.preventDefault();
    setMessages( [ ...messages, {
      name: nameRef.current.value,
      message: messageRef.current.value
    } ] );
    nameRef.current.value = "";
    messageRef.current.value = "";
    nameRef.current.focus();
  };

  // useEffect( () => {
  //   return (
  //     <div>
  //       <p>Автор: Бот </p>
  //       <p>Пожалуйста, соблюдайте правила при написании сообщений: относитесь к другим авторам с уважением, не
  //         употребляйте матерных и грубых выражений</p>
  //     </div>
  //   );
  //   console.log("ok");
  // }, [ messages ] );

  // const messageBot =()=> {
  //   return (
  //     <li>
  //       <p>Автор: Бот </p>
  //       <p>Пожалуйста, соблюдайте правила при написании сообщений: относитесь к другим авторам с уважением, не
  //         употребляйте матерных и грубых выражений</p>
  //     </li>
  //   );
  // }

  // const isEmpty = () => messages.length ? true : false;

  const createComponent = messages.map( (item, index) => {
    return (
      <div className="messages__item" key={ index }>
        <p className="messages__author">Автор: <span className="messages__author-name">{ item.name }</span></p>
        <p className="messages__text">{ item.message }</p>
      </div>
    );
  } );


  return (
    <main className="main_block">
      <h1>This is a Main page</h1>
      <div className="messages">
        <MessagesList createComponent={ createComponent }/>

      </div>
      <form action="#" className="form">
        <input type="text" ref={ nameRef } onChange={ changeInput } placeholder="Your name"
               className="form__item form__name"/>
        <textarea ref={ messageRef } onChange={ changeInput } placeholder="Your message"
                  className="form__item form__message" />
        <button onClick={ addMessageInArr } className="form__btn">Submit</button>
      </form>
    </main>
  );
}

export default Main;