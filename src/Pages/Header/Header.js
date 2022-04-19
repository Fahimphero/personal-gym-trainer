import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../Images/gym-logo.png'
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

        <Navbar style={{ backgroundColor: '#1e1d1b' }} sticky="top" collapseOnSelect expand="lg" variant="dark">
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
                    <Nav className="me-auto">


                    </Nav>
                    <Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link as={Link} to="/"><span>Home</span></Nav.Link>
                            {(user[0]?.email || googleUser[0]?.displayName)
                                ?
                                <button className='border-0 bg-dark  signOut' onClick={handleSignout} >SignOut</button>
                                :

                                <Nav.Link as={Link} to='/login'><span>Login</span></Nav.Link>
                            }

                            <Nav.Link className="nav-link" as={Link} to="/services"><span>Services</span></Nav.Link>
                            <Nav.Link as={Link} to="/blogs"><span>Blogs</span></Nav.Link>
                            <Nav.Link as={Link} to="/about"><span>About Me</span></Nav.Link>

                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;