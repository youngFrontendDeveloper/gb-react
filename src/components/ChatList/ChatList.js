import React, { useCallback, useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import ChatItem from "../Chats/ChatItem";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../../store/chats/actions";
import "./ChatList.css";
import { addMessageBlock } from "../../store/messages/actions";
import { selectChatsList } from "../../store/chats/selectors";


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
// function ChatList({ chatList, onAddChat, onDeleteChat }) {
function ChatList() {
  const chatList = useSelector( selectChatsList );
  const [ value, setValue ] = useState( "" );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue( e.target.value );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddChat(value);
    setValue( "" );
  };

  const AddChat = useCallback( (name) => {
      const newId = `chat${ Date.now() }`;
      dispatch( addChat( { name, id: newId } ) );
      dispatch( addMessageBlock( newId ) );
    },
    [ dispatch ]
  );

  return (
    <>
      <h4>Выберите чат:</h4>
      <Nav className="flex-column mb-3">
        {
          chatList.map( chat => (
            <Nav.Item key={ chat.id } className="d-flex">
              <ChatItem
                chat={ chat }
              />
            </Nav.Item>
          ) ) }
      </Nav>
      <Form onSubmit={ handleSubmit } className="chats__form">
        <Form.Control value={ value } onChange={ handleChange }/>
        <Button type="submit" className="button">Add chat</Button>
      </Form>
    </>
  );
}

export default ChatList;