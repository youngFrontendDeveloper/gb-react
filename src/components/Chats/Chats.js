import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChatList from "../ChatList/ChatList";
import MessagesList from "../MessagesList/MessagesList";
import FormMess from "../Form/Form";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectChatsList } from "../../store/chats/selectors";

function Chats({msgs}) {
  const { chatId } = useParams();
  const chats = useSelector(selectChatsList);

  const chatName = (chats) => {
    return chats.find((chat) => chat.id === chatId).name;
  };

  if (!msgs[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <Container>
      <Row>
        <Col sm={11} md={6}>
          <ChatList />
        </Col>
        <Col sm={11} md={6}>
          <h2 className="mb-3">
            Вы находитесь на странице чата <br /> {chatName(chats) }
          </h2>
          { msgs && <MessagesList
            messages={msgs[chatId]}
          />}
          <FormMess />
        </Col>
      </Row>
    </Container>
  );
}

export default Chats;
