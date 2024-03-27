import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { SearchBar } from "../search-bar/search-bar";
import { Container, Navbar, Nav, Form, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

export const NavigationBar = ({ user, loggedOut }) => {
  return (
    <Navbar expand="lg" className="bg-primary" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span className="h5">MYFLIX</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="me-auto">
            {user === null ? (
              // Show login and signup links if there's no user
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            ) : (
              // Show home and logout links if there's a user
              <>
                <Nav.Link as={Link} to="/movies">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
              </>
            )}
          </Nav>
          {user !== null && (
            <Nav>
              <Nav.Link
                onClick={() => dispatch(clearUser())}
                className="ms-auto text-warning">
                Logout
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
