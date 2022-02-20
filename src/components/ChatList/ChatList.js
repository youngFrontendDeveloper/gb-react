import { ListGroup } from "react-bootstrap";
import ChatListItem from "./ChatListItem";


function ChatList({data}) {
  return (
    <>
      <ListGroup>
        {data.map( item=> {
          return(
            <ChatListItem name={item.name} key={item.id}/>
          )
        })}
      </ListGroup>
    </>
  );
}

export default ChatList;