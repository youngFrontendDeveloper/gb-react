import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./СhatItem.css";

const ChatItem = ({ chat, onDeleteChat }) => {

   return (
    <>
      <Nav.Link as={ Link }
                to={ `/chats/${ chat.id }` }
      >
        { chat.name }
      </Nav.Link>
      <Button
        onClick={ onDeleteChat }
        variant="outline-danger"
        size="sm"
        className="btn__delete">
        Delete</Button>
    </>
  );
};

export default ChatItem;