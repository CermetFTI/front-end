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
        <div className='navbar-class navbar-shadow' style={{position:"relative",zIndex:"100"}}>
        <Navbar bg="white" variant="white" style={{backgroundColor:"transparent"}}>
            <Navbar.Brand style={{cursor:"pointer"}} onClick={()=>{history.push('/');}}>Cermet</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            {
                (user===null)
                ?
                <button onClick={()=>{history.push('/admin');}} className="btn btn-outline-success my-2 my-sm-0" type="submit">Admin</button>
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
