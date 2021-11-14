import React, { useCallback, useState } from "react";
import { Button, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddChat from "../AddChat/AddChat";


const chatsListData = [
  {
    name: "Чат о новых фильмах",
    id: "films",
  },
  {
    name: "Чат о детях",
    id: "children",
  },
  {
    name: "Чат о машинах",
    id: "cars",
  },
  {
    name: "Чат о здоровье",
    id: "health",
  }
];
function ChatList() {
  const [ chatsList, setChatsList ] = useState( [ chatsListData ] );

  const addNewCatInChatsList = useCallback( (newChat) => {
    setChatsList( (prevChatList) => (
      [ ...prevChatList, newChat ]
    ) );
  },[chatsList] );


  return (
    <>
      <Row className="mb-2"><h4>Выберите чат:</h4></Row>
      <Nav className="flex-column mb-3">
        {
          chatsListData.map( item => {
            return (
              <Nav.Item key={ item.id }>
                <Nav.Link as={ Link } to={ `/chats/${ item.id }` } eventKey={ item.id }>{ item.name }</Nav.Link>
              </Nav.Item>
            );
          } ) }
      </Nav>
      <AddChat className="add-chat "  addNewCatInChatsList={ addNewCatInChatsList }/>
    </>
  );
}

export default ChatList;