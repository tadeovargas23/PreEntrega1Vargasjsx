import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="navbar-container">
        <Navbar.Brand href="/">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#category1">Catalogo</Nav.Link>
            <Nav.Link href="#category2">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#category3">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="cart-widget-container">
          <CartWidget /> 
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
