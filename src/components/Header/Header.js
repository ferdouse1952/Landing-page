import React from 'react';
import FirstLogo from '../../assest/FirstLogo.png';
import { Navbar,Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';



const Header = () => {
  
    return (
        <Navbar bg="dark" expand="lg" className='sticky-top'>
        <Container>
          <Navbar.Brand href="#home" className='logo-div'>
            <Link to='/'>
                <img className='logo' src={FirstLogo} alt="" />
            </Link>
          </Navbar.Brand>
          
           <Navbar.Toggle aria-controls="basic-navbar-nav" className='main-nav-togller bg-white'/>
           <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="menu">
            <Nav.Link as={Link} to="/" className='text-light me-4'>Home</Nav.Link>
            <Nav.Link as={Link} to="/pricing" className='text-light me-4'>Pricing</Nav.Link>
            <Nav.Link as={Link} to="/faq" className='text-light me-4'>FAQ</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='text-light me-4'>Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    );
};

export default Header;