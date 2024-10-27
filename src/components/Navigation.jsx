import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">Student Portal</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
          <NavLink to="/student-info" className="nav-link">Student Information</NavLink>
          <NavLink to="/students" className="nav-link">Student List</NavLink>
          <NavLink to="/register" className="nav-link">Register Student</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
