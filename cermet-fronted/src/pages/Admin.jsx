import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap';
import {login, getData, getUser} from '../controller';
import { UserContext } from '../UserContext';

const Admin = () => {
    const{user, setUser} = useContext(UserContext)
    return (
        <div>
            <Form>
                <Button variant="primary" onClick={()=>login(setUser)}>Test Login API</Button>{' '}
            </Form>
             <Button variant="primary" onClick={getData}>Test get API</Button>{' '}
             <Button variant="primary" onClick={async ()=>console.log(user === await getUser())}>Test aja</Button>{' '}
        </div>
    )
}

export default Admin
