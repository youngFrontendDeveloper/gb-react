import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Form.css";
import uuid from "react-uuid";

function FormMess({ sendMessage }) {
  const [ userName, setUserName ] = useState( "" );
  const [ userMessage, setUserMessage ] = useState( "" );
  const nameRef = useRef();  // Для фокуса на инпуте
  const messageRef = useRef();

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
    setUserMessage( e.target.value );
  };

  // Убираю класс warning у поля, если на нем поставлен фокус
  const handleFocus = (e) => {
    e.target.classList.remove( "warning" );
  };

  // Вывожу данные при отправке формы
  const handleSubmit = (e) => {
    e.preventDefault();

    if( userName && userMessage ) {  // проверка заполнения полей
      sendMessage(
        {
          id: uuid(),
          name: userName,
          message: userMessage
        } );

      setUserName( "" );

      setUserMessage( "" );
      nameRef.current?.focus();

    } else if( !userName && !userMessage ) {
      nameRef.current?.focus();
      nameRef.current.classList.add( "warning" );
      nameRef.current.placeholder = "Заполните это поле!";
      messageRef.current.classList.add( "warning" );
      messageRef.current.placeholder = "Заполните это поле!";
    } else if( !userName ) {
      nameRef.current?.focus();
      nameRef.current.classList.add( "warning" );
      nameRef.current.placeholder = "Заполните это поле!";
    } else if( !userMessage ) {
      messageRef.current?.focus();
      messageRef.current.classList.add( "warning" );
      messageRef.current.placeholder = "Заполните это поле!";
    }

  };


  return (
    <Row>
      <Col className="mx-auto my-1 " md={ 9 } lg={ 7 }>
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
                        value={ userMessage }
                        placeholder="Your message"
                        className="mb-2 p-2 w-100 form__message"
                        as="textarea"/>
          <Button
            className="form__btn" type="submit">Add
          </Button>

        </Form>
      </Col>
    </Row>
  );
}


export default FormMess;
