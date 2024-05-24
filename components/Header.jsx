"use client";

import Link from "next/link";
import "../components/Header.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary" expand="md">
        <Container fluid>
          <Navbar.Brand>
            <Link href="/" className="header-nav__logo">
              SmartBlog
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link href="#about" passHref>
                  <Nav.Link as="span" href="#about">
                    About
                  </Nav.Link>
                </Link>
                <Link href="#advantages" passHref>
                  <Nav.Link as="span" href="#advantages">
                    Advantages
                  </Nav.Link>
                </Link>
                <Link href="#footer" passHref>
                  <Nav.Link as="span" href="#footer">
                    Contact
                  </Nav.Link>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <br />
    </>
  );
}
