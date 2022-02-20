import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "./Form.css";
import uuid from "react-uuid";

function FormMess({ sendMessage }) {
  const [ userName, setUserName ] = useState( "" );
  const [ userMessage, setUserMessage ] = useState( "" );
  const nameRef = useRef();

  useEffect( () => {
    nameRef.current?.focus();
  }, [] );
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
        id: uuid(),
        name: userName,
        message: userMessage
      } );

    setUserName( "" );
    setUserMessage( "" );
    nameRef.current?.focus();
  };


  return (
    <Row>
      <Col className="mx-auto my-1 " md={ 9 } lg={ 7 }>
        <Form
          onSubmit={ handleSubmit }>
          <Form.Control ref={ nameRef }
                        onChange={ changeAuthor }
                        value={ userName }
                        placeholder="Your name"
                        className="mb-2 p-2 w-100  form__name"/>
          <Form.Control onChange={ changeMessage }
                        value={ userMessage }
                        placeholder="Your message"
                        className="mb-2 p-2 w-100 form__message"
                        as="textarea"
          />
          <Button
            className="form__btn" type="submit">Add
          </Button>

        </Form>
      </Col>
    </Row>

  );
}


export default FormMess;
