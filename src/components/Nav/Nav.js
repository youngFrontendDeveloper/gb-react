import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Navs() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/"
    >
      <Nav.Item>
        <Nav.Link as={ Link } to="/" eventKey="Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={ Link } to="/chats" eventKey="Chats">Chats</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={ Link } to="/profile" eventKey="Profile">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={ Link } to="/books" eventKey="BooksList">Books</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navs;