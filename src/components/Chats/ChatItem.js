import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  deleteChatWithFb } from "../../store/chats/actions";

import "./СhatItem.css";

const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();

  // Удаление чата без Firebase
  // const onDeleteChat = () => {
  //   dispatch(deleteChat(chat.id));
  // };

  // Удаление чата с Firebase
  const onDeleteChat = () => {
    dispatch(deleteChatWithFb(chat.id));
  };

  return (
    <>
      <Nav.Link as={Link} to={`/chats/${chat.id}`}  eventKey={`/chats/${chat.id}`}>
        {chat.name}
      </Nav.Link>
      <Button
        onClick={onDeleteChat}
        variant="outline-danger"
        size="sm"
        className="btn__delete"
      >
        Delete
      </Button>
    </>
  );
};

export default ChatItem;
