import React, { useContext } from 'react';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../UserContext';
import { Row, Navbar, Nav, Button } from 'react-bootstrap';
import {logout} from '../controller';
import {useHistory} from 'react-router-dom';

function NavbarComp() {
    const history = useHistory();
    const {user, setUser} = useContext(UserContext);
    return (
        <div className='navbar-class'>
        <Navbar bg="light" variant="light">
            <Navbar.Brand onClick={()=>{history.push('/');}}>Cermet</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link onClick={()=>{history.push('/');}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{history.push('/kompetisi');}}>Kompetisi</Nav.Link>
            </Nav>
            {
                (user===null)
                ?
                <button onClick={()=>{history.push('/admin');}} className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                :
                <Row>
                    <Nav.Link onClick={()=>{history.push('/admin/dashboard');}}>Admin Dashboard</Nav.Link>
                    <Button onClick={()=>{setUser(null);logout();}}>Logout</Button>
                </Row>
            }
        </Navbar>
        </div>
    )
}

export default NavbarComp
