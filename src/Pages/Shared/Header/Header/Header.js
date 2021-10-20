import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../../hooks/useFirebase/useFirebase';
import { HashLink } from 'react-router-hash-link';
import TopHeader from '../TopHeader/TopHeader';
import logo from '../../../../image/medilink logo.png'


const Header = () => {
    const { email, user, logOutHandler } = useFirebase()
    console.log(user?.displayName, email)
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
                                {user?.email ? <button onClick={logOutHandler} className="text-gray-400">Logout</button>
                                    : < Nav.Link as={Link} to="/login">Login</Nav.Link>
                                }

                            </Nav>
                            <Nav>
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>

                                        {user?.email && <div className="flex items-center"><span className="text-white block">{user?.displayName}</span>
                                            <img className="ml-2 w-10 h-10 rounded-full" src={user?.photoURL} alt="" /></div>}

                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;