import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/gym-logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='brand' href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className='ps-2'>My GYM</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-link">
                            <Link to="/services">Services</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/about">About Me</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;