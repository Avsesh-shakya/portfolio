import React, { useState } from "react";
import { Navbar as RBNavbar, Nav, Container, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";

const Navbar = () => {
  const location = useLocation();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const [expanded, setExpanded] = useState(false);

  return (
  <RBNavbar bg="light" expand="md" sticky="top" style={{ height: "70px"}} expanded={expanded} onToggle={setExpanded}>
      <Container fluid style={{backgroundColor: '#d6a6f0ff' }}>
        <RBNavbar.Brand as={Link} to="/" style={{ fontWeight: 700, fontSize: "1.7rem", letterSpacing: "1px" ,}}>
          Avsesh
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="main-navbar-nav" />
        <RBNavbar.Collapse id="main-navbar-nav" style={{borderRadius:'5px' }} >
          <Nav className="mx-auto" style={{ gap: "30px", fontWeight: 500, fontSize: "1rem",paddingLeft:'20px' }}>
            {navLinks.map((link) => (
              <Nav.Link
                as={Link}
                to={link.path}
                key={link.name}
                style={{
                  color: location.pathname === link.path ? "#222" : "#615e5eff",
                  fontWeight: location.pathname === link.path ? 700 : 500,
                  borderBottom: location.pathname === link.path ? "2px solid #222" : "none",
                  transition: "color 0.2s, border-bottom 0.2s, font-weight 0.2s",
                }}
                onClick={() => setExpanded(false)}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <Button variant="outline-dark" style={{ fontWeight: 500, borderRadius: "6px", margin: "15px 0px 15px 20px" }}>
            Light / Dark
          </Button>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
