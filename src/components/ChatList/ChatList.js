import React, { useCallback, useState } from "react";
import { Button, Col, Form, FormText, Nav, Row } from "react-bootstrap";
import ChatItem from "../Chats/ChatItem";

import "./ChatList.css"

//
// const chatsListData = [
//   {
//     name: "Чат о новых фильмах",
//     id: "films",
//   },
//   {
//     name: "Чат о детях",
//     id: "children",
//   },
//   {
//     name: "Чат о машинах",
//     id: "cars",
//   },
//   {
//     name: "Чат о здоровье",
//     id: "health",
//   }
// ];
function ChatList({ chatList, onAddChat, onDeleteChat }) {
  const [ value, setValue ] = useState( "" );

  const handleChange = (e) => {
    setValue( e.target.value );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddChat( value );
    setValue( "" );
  };

  return (
    <>
      {/*<Row className="mb-2">*/}
        <h4>Выберите чат:</h4>
      {/*</Row>*/}
      {/*<Row>*/}
      {/*  <Col sm={ 10 } md={ 5 }>*/}
          <Nav className="flex-column mb-3" >
            {
              chatList.map( chat => (
                <Nav.Item key={ chat.id } className="d-flex">
                  <ChatItem chat={ chat } onDeleteChat={ onDeleteChat }/>
                </Nav.Item>
              ) ) }
          </Nav>
          <Form onSubmit={ handleSubmit } className="chats__form">
            <Form.Control value={ value } onChange={ handleChange }/>
            <Button type="submit" className="button">Add chat</Button>
          </Form>
      {/*  </Col>*/}
      {/*</Row>*/}
    </>
  );
}

export default ChatList;