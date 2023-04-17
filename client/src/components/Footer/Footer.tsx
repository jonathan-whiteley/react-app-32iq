import React from "react";
import { Link } from "react-router-dom";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function Footer() {
  return (
  <footer className="footer">
      <Container>
          <Row>
              <Col md="3">
                  <h1 className="title">32iQ•</h1>
              </Col>
              <Col md="3">
                  <Nav>
                      <NavItem>
                          <NavLink to="/home" tag={Link}>
                            Home
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to="/data-page" tag={Link}>
                            Data
                          </NavLink>
                      </NavItem>
                  </Nav>
              </Col>
              <Col md="3">
                  <Nav>
                      <NavItem>
                          <NavLink href="link">
                            Contact Us
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="about-us">
                            About Us
                          </NavLink>
                      </NavItem>
                  </Nav>
              </Col>
          </Row>
      </Container>
  </footer>
  );
}

export default Footer;
