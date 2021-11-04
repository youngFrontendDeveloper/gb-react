import "./MessagesList.css";
import React from "react";
import MessagesListItem from "./MessagesListItem";
import { ListGroup } from "react-bootstrap";


function MessagesList({ messages }) {
  return (
    <ListGroup>
        { messages.map( (item) => {
          return (
            <MessagesListItem item={item}/>
          );
        } ) }

      </ListGroup>
  );
}

export default MessagesList;