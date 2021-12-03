import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Nav, Row, Col, Container } from "react-bootstrap";
import ChatItem from "../Chats/ChatItem";

import { selectChatsList } from "../../store/chats/selectors";
import { onValue, set } from "firebase/database";
import { chatsRef, getChatRefById } from "../../services/firebase";
import {
  addChat,
  addChatWithFb,
  initChatsTracking,
} from "../../store/chats/actions";

import "./ChatList.css";

function ChatList() {
  // const [chatsList, setChatsList] = useState([]);
  const chatList = useSelector(selectChatsList);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   onValue(chatsRef, (chatsSnap) => {
  //     const newChats = [];
  //     chatsSnap.forEach((snapshot) => {
  //       newChats.push(snapshot.val());
  //     });
  //     setChatsList(newChats);
  //   });
  // }, []);

  useEffect(() => {
    dispatch(initChatsTracking());
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = `chat${Date.now()}`;
    // dispatch(addChat({ name: value, id: newId }));
    dispatch(addChatWithFb({ name: value, id: newId })); // диспатчим новые данные в firebase
    setValue("");
  };

  // Мой вариант:
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   AddChat( value );
  //   setValue( "" );
  // };
  //
  // const AddChat = useCallback( (name) => {
  //     const newId = `chat${ Date.now() }`;
  //     dispatch( addChat( { name, id: newId } ) );
  //     dispatch( addMessageBlock( newId ) );
  //   },
  //   [ dispatch ]
  // );

  return (
    <Container>
      <Row>
        <h1 className="page__title">Chats</h1>
      </Row>
      <Row>
        <Col className="p-5 pt-3 chat__list">
          <h4>Выберите чат:</h4>
          <Nav className="flex-column mb-3">
            {chatList.map((chat) => (
              <Nav.Item
                key={chat.id}
                className="d-flex justify-content-between"
              >
                <ChatItem chat={chat} />
              </Nav.Item>
            ))}
          </Nav>
          <Form onSubmit={handleSubmit}>
            <Form.Control
              value={value}
              onChange={handleChange}
              className="mb-2"
            />
            <Button type="submit" className="button">
              Add chat
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ChatList;
