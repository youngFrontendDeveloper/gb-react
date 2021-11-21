import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./СhatItem.css";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/chats/actions";

const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();

  const onDeleteChat = (id) => {
    dispatch( deleteChat( id ) );
  };
  return (
    <>
      <Nav.Link as={ Link }
                to={ `/chats/${ chat.id }` }
      >
        { chat.name }
      </Nav.Link>
      <Button
        onClick={ () => onDeleteChat( chat.id ) }
        variant="outline-danger"
        size="sm"
        className="btn__delete">
        Delete</Button>
    </>
  );
};

export default ChatItem;