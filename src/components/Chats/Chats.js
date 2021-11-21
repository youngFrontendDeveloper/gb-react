import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChatList from "../ChatList/ChatList";
import MessagesList from "../MessagesList/MessagesList";
import FormMess from "../Form/Form";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selectors";

function Chats() {
  const { chatId } = useParams();
  const messages = useSelector( selectMessages );

  if( !messages[ chatId ] ) {
    return <Navigate replace to="/chats"/>;
  }

  return (
    <Container>
      <Row>
        <Col sm={ 11 } md={ 6 }>
          <ChatList/>
        </Col>
        <Col sm={ 11 } md={ 6 }>
          <MessagesList messages={ messages[ chatId ] }/>
          <FormMess/>
        </Col>
      </Row>
    </Container>
  );
}

export default Chats;