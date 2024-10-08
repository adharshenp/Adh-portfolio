import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './header.css';
import resume from './Resume1.pdf';

function Header() {
  return (
    <Navbar id='nv'  variant="dark" className='mt-4 ms-2 me-2' expand="lg">
      <Container fluid>
        <Link to={'/'}>
          <Navbar.Brand className='d-flex '>
            <i className='bar fa-solid fa-soap mt-2 me-2 fs-3 text-secondary'></i>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center justify-content-center">
            <Link to={'/skill'} className="nav-link">
              <button className='btn btn-outline-danger  p-2  fw-bold'>Skills</button>
            </Link>
            <Link to={'/about'} className="nav-link">
              <button className='btn btn-outline-light p-2 fw-bold'>About Me</button>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link className='d-flex align-items-center justify-content-center' href={resume}>
              <button className='btn btn-outline-primary p-2 fw-bold'>Resume  <i class="fa-solid fa-bounce fa-cloud-arrow-down"></i></button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
