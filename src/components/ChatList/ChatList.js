import { ListGroup } from "react-bootstrap";
import ChatListItem from "./ChatListItem";


function ChatList({ data }) {

  const handleClick = () => {
    console.log( "click" );
  };
  return (
    <>
      <ListGroup>
        { data.map( item => {
          return (
            <ChatListItem name={ item.name } key={ item.id } handleClick={ handleClick }/>
          );
        } ) }
      </ListGroup>
    </>
  );
}

export default ChatList;