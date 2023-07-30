import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <NavbarBs sticky='top' className="bg-white shadow-sm mb-3" expand="md">
      <Container>
        <NavbarBs.Brand href="/" className="me-auto">
          <img
            src="/LogoNy.png"
            alt="Logo"
            width="100"
            height="48"
            className="d-inline-block align-top"
          />
        </NavbarBs.Brand>

        <NavbarBs.Toggle aria-controls="navbar-nav" className="custom-toggler" />

        <NavbarBs.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to={'/'} as={NavLink} style={{ color: '#ff9100' }}>
              Hem
            </Nav.Link>
            <Nav.Link to={'/offert'} as={NavLink} style={{ color: '#ff9100' }}>
              Boka Offert
            </Nav.Link>
            <Nav.Link to={'/about'} as={NavLink} style={{ color: '#ff9100' }}>
              Om Oss
            </Nav.Link>
            <Nav.Link to={'/contact'} as={NavLink} style={{ color: '#ff9100' }}>
              Kontakt
            </Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}
