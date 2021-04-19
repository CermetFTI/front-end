import React from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

function NavbarComp() {
    return (
        <div className='navbar-class'>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./kompetisi">Kompetisi</Nav.Link>
            <Nav.Link href="./admin">Admin</Nav.Link>
            </Nav>
        </Navbar>
        </div>
    )
}

export default NavbarComp
