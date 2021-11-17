import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./СhatItem.css";

const ChatItem = ({ chat, onDeleteChat }) => {
  const handleDeleteClick = () => {
    onDeleteChat( chat.id );
  };

  return (
    <>
      <Nav.Link as={ Link }
                // style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={ `/chats/${ chat.id }` }
      >
        { chat.name }
      </Nav.Link>
      <Button onClick={ handleDeleteClick } variant="outline-danger" size="sm" className="btn__delete">Delete</Button>
    </>
  );
};

export default ChatItem;