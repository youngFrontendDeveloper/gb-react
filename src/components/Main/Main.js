import React, { useCallback, useEffect, useRef, useState } from "react";
import MessagesList from "../MessagesList/MessagesList";
import FormMess from "../Form/Form";
import uuid from "react-uuid";
import ChatList from "../ChatList/ChatList";
import { ChatListData } from "../../constants/ChatListData";
import { Col, Container, Row } from "react-bootstrap";

import "./Main.css";

function Main() {
  const [messages, setMessages] = useState([]);
  const isFirstRender = useRef(true);

  const addMessageInArr = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].name !== "Bot") {
      const timeout = setTimeout(() => {
        addMessageInArr({
          id: uuid(),
          name: "Bot",
          message:
            "Пожалуйста, соблюдайте правила при написании сообщений: относитесь к другим авторам с уважением, не употребляйте матерных и грубых выражений",
        });
      }, 1000);
      return () => clearTimeout(timeout);
    }
    // } );
  }, [addMessageInArr, messages]);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  return (
    <main className="main_block">
      <Container>
        <Row className="mb-4">
          <h1>This is a Main page</h1>
        </Row>
        <Row className="mb-4">
          <Col className="mb-3 mx-auto" xs={10} md={2} lg={3}>
            <ChatList data={ChatListData} />
          </Col>
          <Col className="mx-auto" xs={10} md={9} lg={8}>
            <MessagesList messages={messages} />
            <FormMess sendMessage={addMessageInArr} />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Main;
