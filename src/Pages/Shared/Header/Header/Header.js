import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase/useFirebase';
import { HashLink } from 'react-router-hash-link';
import TopHeader from '../TopHeader/TopHeader';
import logo from '../../../../image/medilink logo.png'

const Header = () => {
    const { email, user } = useFirebase()
    console.log(user, email)
    return (
        <div>
            {/* <TopHeader /> */}
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className="sticky top-0 py-2">
                        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                                <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                {user?.email ? <button className="bg-pink-500">Logout</button>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }
                                <span className="text-pink-500">{user.name}</span>
                            </Nav>
                            <Nav>
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                        {user?.email && <button className="bg-pink-500">Logout</button>}
                                        Signed in as:
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;