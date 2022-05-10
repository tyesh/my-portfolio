import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Carlos</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <SocialIcon
                url="https://github.com/tyesh"
                className="mx-2"
                target="_blank"
              />
              <SocialIcon
                url="https://www.linkedin.com/in/carlos-velazquez-94760694/"
                className="mx-2"
                target="_blank"
              />
              <SocialIcon
                url="https://codepen.io/tyesh/"
                className="mx-2"
                target="_blank"
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
