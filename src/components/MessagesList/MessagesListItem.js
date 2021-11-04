import React from "react";
import { ListGroup } from "react-bootstrap";

function MessagesListItem({ item }) {
  return (
    <ListGroup.Item className="p-2 mb-2 messages__item" key={ item.id }>
      <p className="m-0 p-2 text-start ">
        Автор: <span className="messages__author-name">{ item.name }</span>
      </p>
      <p className="m-0 p-2 text-start messages__text">{ item.message }</p>
    </ListGroup.Item>
  );
}

export default MessagesListItem;