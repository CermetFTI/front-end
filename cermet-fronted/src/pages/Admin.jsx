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
        <Container className="m-3">
            <Card className="p-4">
                <Form onSubmit={logging_in}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Test Login API</Button>{' '}
                </Form>
            </Card>
             {/* <Button variant="primary" onClick={getData}>Test get API</Button>{' '}
             <Button variant="primary" onClick={async ()=>console.log(user === await getUser())}>Test aja</Button>{' '} */}
        </Container>
    )
}

export default Admin
