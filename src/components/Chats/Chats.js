import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChatList from "../ChatList/ChatList";
import { ChatListData } from "../../constants/ChatListData";
import MessagesList from "../MessagesList/MessagesList";
import FormMess from "../Form/Form";
import { Route, Routes, useParams } from "react-router-dom";
import ChatItem from "./ChatItem";



function Chats() {

  const [ messages, setMessages ] = useState( []);
  const isFirstRender = useRef( true );

  const addMessageInArr = useCallback(
    (newMessage) => {
      setMessages( (prevMessages) => ( [
        ...prevMessages, newMessage]))

    }, [ ] );

  useEffect( () => {
    isFirstRender.current = false;
  }, [] );
  return (
    <Container>
      <Routes>
        {ChatListData.map( (item, index) =>(
          <Route exact
                 key={index}
                 path={item.path}
                 element={ <MessagesList index={index} messages={messages}  addMessageInArr={addMessageInArr}/> } />
        ))}
      </Routes>
      <FormMess sendMessage={ addMessageInArr } />

    </Container>
  );
}

export default Chats;