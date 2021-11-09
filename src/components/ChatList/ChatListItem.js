import { ListGroup } from "react-bootstrap";

function ChatListItem({ name, handleClick }) {
  return (
    <>
      <ListGroup.Item onClick={handleClick}>{ name }</ListGroup.Item>
    </>
  );
}

export default ChatListItem;

