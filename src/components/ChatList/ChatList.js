import React from "react";
import { Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ChatList({ data }) {

  return (
    <>
      <Row className="mb-3"><h4 className="mb-3">Выберите чат:</h4></Row>
      <Nav className="flex-column" defaultActiveKey="/chats">
        {
          data.map( item => {
          return (

            <Nav.Item key={ item.id } >
              <Nav.Link as={ Link } to={ `${ item.path }` } eventKey={ item.name } >{ item.name }</Nav.Link>
            </Nav.Item>
          );
        } ) }
      </Nav>
    </>
  );
}

export default ChatList;