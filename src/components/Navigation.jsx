import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          Nana Jusolihun
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href="#aboutme" className="fw-semibold">
              About Me
            </Nav.Link>
            <Nav.Link href="#projetcs" className="fw-semibold">
              Porjetcs
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-semibold">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
