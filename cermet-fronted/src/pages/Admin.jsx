import React, { useContext, useState } from 'react'
import { Button, Form, Container, Card } from 'react-bootstrap';
import {login} from '../controller';
import {useHistory} from 'react-router-dom'
import { UserContext } from '../UserContext';
import 'bootstrap/dist/css/bootstrap.min.css'

const Admin = () => {
    const history = useHistory()
    const {user, setUser} = useContext(UserContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const logging_in = async (e) => {
        e.preventDefault();
        const check = await login(setUser, username, password);
        if(check){
            history.push('/admin/dashboard');
        } else {
            alert("Invalid account!")
        }
    }
    return (
        <Container className="m-3" style={{height:"87vh"}}>
            <br/>
            <Card className="p-4" style={{maxWidth:"700px",margin:"0 auto"}}>
                <h3 className="d-flex justify-content-md-center">Admin login panel</h3>
                <br/>
                <Form onSubmit={logging_in}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>{' '}
                </Form>
            </Card>
        </Container>
    )
}

export default Admin
