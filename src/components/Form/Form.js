import React, { useRef, useState } from "react";
import { Form, Button, } from "react-bootstrap";
import "./Form.css";

function FormMess({ sendMessage }) {
  const [ userName, setUserName ] = useState( "" );
  const [ userMessage, setUserMessage ] = useState( "" );
  const nameRef = useRef( );

  const changeAuthor = (event) => {
    setUserName( event.target.value );
  };

  const changeMessage = (event) => {
    setUserMessage( event.target.value );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(
      {
        name: userName,
        message: userMessage
      } );

    setUserName( "" );
    setUserMessage( "" );
    nameRef.current?.focus();
  };

  return (
    <Form className="form"
          // onSubmit={ handleSubmit }
    >
      <Form.Group>
        <Form.Control ref={ nameRef } onChange={ changeAuthor } value={userName} placeholder="Your name"
                      className="form__item form__name"/>
        <Form.Control onChange={ changeMessage } value={userMessage} placeholder="Your message"
                      className="form__item form__message"
                      as="textarea"
        />
        <Button onClick={handleSubmit} className="form__btn" variant="secondary">Add</Button>
      </Form.Group>

    </Form>
  );
}

export default FormMess;
