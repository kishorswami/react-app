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
          <Nav.Link as={Link} to="/home">
            <img
              alt=""
              src={mainLogo}
              width="120"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/product-app">
                Manage Product List
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
              <Nav.Link as={Link} to="/quiz">
                Manage Quiz
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
