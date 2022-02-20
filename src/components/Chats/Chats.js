import { Col, Container, Row } from "react-bootstrap";
import ChatList from "../ChatList/ChatList";
import { ChatListData } from "../../constants/ChatListData";
import MessagesList from "../MessagesList/MessagesList";
import FormMess from "../Form/Form";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";



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

      <Row className="mb-4">

        <Col className="mb-3 mx-auto" xs={ 10 } md={ 3 } lg={ 3 }>
          <ChatList data={ ChatListData }/>
        </Col>
        <Col className="mx-auto" xs={ 10 } md={ 9 } lg={ 8 }>

          <Routes>
            {ChatListData.map( (item, index) =>(
              <Route exact
                     key={index}
                     path={item.path}
                     element={ <MessagesList index={index} messages={messages} setMessages={setMessages} addMessageInArr={addMessageInArr}/> } />
            ))}
          </Routes>
          <FormMess sendMessage={ addMessageInArr } />
        </Col>
      </Row>


    </Container>

  );
}

export default Chats;