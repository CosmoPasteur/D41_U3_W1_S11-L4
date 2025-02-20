import { Component } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";

class TopBar extends Component {
  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Navbar bg="dark" data-bs-theme="dark">
              <Container>
                <Navbar.Brand href="ClassComponent">LOGO</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="ClassComponent">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Row>
        </Container>
      </>
    );
  }
}

export default TopBar;
