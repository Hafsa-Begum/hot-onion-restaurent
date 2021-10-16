import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { CartContext } from '../../../App';

const Header = () => {
    const { user, logOut } = useAuth();
    const [cart] = useContext(CartContext);
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home"><img className='w-50 ps-0 ms-0' src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink to='/cart'><i className="fas fa-shopping-cart me-5"></i>{cart}</NavLink>
                        <NavLink to='/register'> <button className='signup-button rounded-pill'>Sign up</button> </NavLink>
                        {
                            user?.email ?
                                <Button onClick={logOut} variant='dark'>Logout</Button> :
                                <Nav.Link as={HashLink} to="/login" className='text-dark fw-3'>Login</Nav.Link>
                        }



                        <Navbar.Text>
                            Signed in as: <a href="/login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;