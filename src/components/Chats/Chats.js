import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChatList from "../ChatList/ChatList";
import { ChatListData } from "../../constants/ChatListData";
import MessagesList from "../MessagesList/MessagesList";
import FormMess from "../Form/Form";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import ChatItem from "./ChatItem";


function Chats({ chatList, messages, setMessages, onDeleteChat, onAddChat }) {
  const { chatId } = useParams();
  const parentRef = useRef();

  const handleSendMessage  = useCallback(
    (newMessage) => {
      setMessages( (prevMessages) => ( {
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], newMessage ]} ) );

    }, [chatId] );

  useEffect( () => {
    if( messages[chatId]?.length &&
      messages[chatId]?.[messages[chatId]?.length - 1].author !== "Bot"){
      const timeout = setTimeout(
        ()=> handleSendMessage({
          author: "Bot",
          text: "i am a bot",
          id: `mes-${Date.now()}`,
        }), 1500
      )
      return () => clearTimeout(timeout);
    }
  }, [messages] );

  if (!messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <Container  ref={parentRef}>
      <Row>
        <Col>
          <ChatList chatList={ chatList }
                    onAddChat={ onAddChat }
                    onDeleteChat={ onDeleteChat }/>
        </Col>
        <Col>
          <MessagesList messages={messages[chatId]} />
          <FormMess sendMessage={ handleSendMessage  }/>
        </Col>
      </Row>


    </Container>
  );
}

export default Chats;