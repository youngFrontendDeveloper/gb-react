import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import logo from "./reactjs-icon.svg";

function Navs() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="mr-3">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link as={Link} to="/" eventKey="Home">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/chats" eventKey="Chats">
                Chats
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile" eventKey="Profile">
                Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/books" eventKey="BooksList">
                Books
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
