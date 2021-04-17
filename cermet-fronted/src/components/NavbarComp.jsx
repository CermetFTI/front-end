import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

function NavbarComp() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./kompetisi">Kompetisi</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    )
}

export default NavbarComp
