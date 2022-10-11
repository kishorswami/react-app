import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import mainLogo from "./../images/logo.png";

const Header = () => {
  return (
    <>
      <Navbar bg="" expand="lg" fixed="top" className="custom-navbar">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={mainLogo}
              width="120"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/user-app">
                Manage User
              </Nav.Link>
              <Nav.Link as={Link} to="/counter-app">
                Manage Counter
              </Nav.Link>
              <Nav.Link as={Link} to="/todo-app">
                Manage TodoList
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
