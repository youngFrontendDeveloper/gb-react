import "./MessagesList.css";
import React from "react";
import { Col, Row } from "react-bootstrap";


function MessagesList({ messages }) {
  return (
   <Row className="messages mb-4">
     <Col className="mx-auto" xs={ 10 } md={ 10 } lg={11}>
     { messages.map( (item, index) => {
       return (
         <div className="p-2 mb-2 messages__item" key={ index }>
           <p  className="m-0 p-2 text-start ">
             Автор: <span className="messages__author-name">{ item.name }</span>
           </p>
           <p className="m-0 p-2 text-start messages__text">{ item.message }</p>
         </div>
       )
     } ) }
     </Col>
   </Row>
  );
}

export default MessagesList;