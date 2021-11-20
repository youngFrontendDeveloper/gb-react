import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChatList from "../ChatList/ChatList";
// import { ChatListData } from "../../constants/ChatListData";
import MessagesList from "../MessagesList/MessagesList";
import FormMess from "../Form/Form";
import { Navigate,  useParams } from "react-router-dom";
// import ChatItem from "./ChatItem";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";


// function Chats({ chatList, messages, setMessages, onDeleteChat, onAddChat }) {
function Chats() {
  const { chatId } = useParams();
  const messages = useSelector( selectMessages );

  // const dispatch = useDispatch();
  // const messages = useSelector( state => state.messages );
  //
  // const handleSendMessage = () => {
  //   dispatch( addMessage( , chatId ) );
  // };

  // const handleSendMessage = useCallback(
  //   (newMessage) => {
  //     setMessages( (prevMessages) => ( {
  //       ...prevMessages,
  //       [ chatId ]: [ ...prevMessages[ chatId ], newMessage ]
  //     } ) );
  //
  //   }, [ chatId ] );

  // useEffect( () => {
  //   if( messages[ chatId ]?.length &&
  //     messages[ chatId ]?.[ messages[ chatId ]?.length - 1 ].author !== "Bot" ) {
  //     const timeout = setTimeout(
  //       () => handleSendMessage( {
  //         author: "Bot",
  //         text: "i am a bot",
  //         id: `mes-${ Date.now() }`,
  //       } ), 1500
  //     );
  //     return () => clearTimeout( timeout );
  //   }
  // }, [ messages ] );

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
          <MessagesList
            messages={ messages[chatId] }
          />
          <FormMess
            // sendMessage={ handleSendMessage }
          />
        </Col>
      </Row>


    </Container>
  );
}

export default Chats;