import { ListGroup } from "react-bootstrap";

function ChatListItem({ name }) {
  return (
    <>
      <ListGroup.Item>{ name }</ListGroup.Item>
    </>
  );
}

export default ChatListItem;

