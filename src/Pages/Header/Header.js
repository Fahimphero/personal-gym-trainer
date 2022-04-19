import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Images/gym-logo.jpg'
import './Header.css'

const Header = () => {
    const user = useAuthState(auth);
    const googleUser = useAuthState(auth);
    console.log(user)
    console.log(googleUser)
    console.log(user[0]?.email);
    const handleSignout = () => {
        signOut(auth);

    }
    return (

        <Navbar sticky="top" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand className='brand' as={Link} to="/">
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
                        {(user[0]?.email || googleUser[0]?.displayName) ?
                            <button className='border-0 bg-dark  signOut' onClick={handleSignout} >SignOut</button> :
                            <button className='border-0 bg-dark'><Link to='/login'>Login</Link></button>
                        }

                        <Link to="/services">Services</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/about">About Me</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;