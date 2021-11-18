import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Form.css";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/messages/actions";
import { useParams } from "react-router-dom";


function FormMess({ sendMessage }) {
  const messages = useSelector( state => state.initialState );
  const [ userName, setUserName ] = useState( "" );
  const [ userText, setUserText ] = useState( "" );
  const nameRef = useRef();  // Для фокуса на инпуте
  const messageRef = useRef();
  const dispatch = useDispatch();
  const chat = useParams();
  console.log(chat.chatId);

  //Устанавливаю фокус после первого рендера
  useEffect( () => {
    nameRef.current?.focus();
  }, [] );

  // Получаю и сохраняю введенные значения имени и сообщения
  const changeAuthor = (e) => {
    e.target.classList.remove( "warning" ); // убираю класс warning
    e.target.placeholder = "Your name";
    setUserName( e.target.value );
  };

  const changeMessage = (e) => {
    e.target.classList.remove( "warning" ); // убираю класс warning
    e.target.placeholder = "Your message";
    setUserText( e.target.value );
  };

  // Убираю класс warning у поля, если на нем поставлен фокус
  const handleFocus = (e) => {
    e.target.classList.remove( "warning" );
  };

  // Вывожу данные при отправке формы
  const handleSubmit = (e) => {
    e.preventDefault();

    if( userName && userText ) {  // проверка заполнения полей
      dispatch( addMessage(
        {
          id: uuid(),
          author: userName,
          text: userText
        }, chat.chatId ) );
    // } ) );
      // sendMessage(
      //   {
      //     id: uuid(),
      //     author: userName,
      //     text: userText
      //   } );

      setUserName( "" );

      setUserText( "" );
      nameRef.current?.focus();

    } else if( !userName && !userText ) {
      nameRef.current?.focus();
      nameRef.current.classList.add( "warning" );
      nameRef.current.placeholder = "Заполните это поле!";
      messageRef.current.classList.add( "warning" );
      messageRef.current.placeholder = "Заполните это поле!";
    } else if( !userName ) {
      nameRef.current?.focus();
      nameRef.current.classList.add( "warning" );
      nameRef.current.placeholder = "Заполните это поле!";
    } else if( !userText ) {
      messageRef.current?.focus();
      messageRef.current.classList.add( "warning" );
      messageRef.current.placeholder = "Заполните это поле!";
    }
  };

  // useEffect( () => {
  //   if( messages[ chatId ]?.length &&
  //     messages[ chatId ]?.[ messages[ chatId ]?.length - 1 ].author !== "Bot" ) {
  //     const timeout = setTimeout(()=>{
  //       dispatch( addMessage(
  //         {
  //         author: "Bot",
  //         text: "i am a bot",
  //         id: `mes-${ Date.now() }`,
  //       }, chatId))}, 1500
  //     );
  //     return () => clearTimeout( timeout );
  //   }
  // }, [ messages ] );

  return (
    <Form onSubmit={ handleSubmit }>
      <Form.Control ref={ nameRef }
                    onChange={ changeAuthor }
                    onFocus={ handleFocus }
                    value={ userName }
                    placeholder="Your name"
                    className="mb-2 p-2 w-100  form__name"/>

      <Form.Control ref={ messageRef }
                    onChange={ changeMessage }
                    onFocus={ handleFocus }
                    value={ userText }
                    placeholder="Your message"
                    className="mb-2 p-2 w-100 form__message"
                    as="textarea"/>
      <Button
        className="button" type="submit">Add
      </Button>

    </Form>
  );
}

export default FormMess;
