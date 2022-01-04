import React from "react";
import { ListGroup } from "react-bootstrap";

function Message({ message }) {
  return (
    <ListGroup.Item className="p-2 mb-2 messages__item" >
      <p className="m-0 p-2 text-start ">
        Автор: <span className="messages__author-name">{ message.author }</span>
      </p>
      <p className="m-0 p-2 text-start messages__text">{ message.text }</p>
    </ListGroup.Item>
  );
}

export default Message;
