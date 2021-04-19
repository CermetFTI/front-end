import React from 'react'
import { Button } from 'react-bootstrap';
import axios from 'axios';

const Admin = () => {
    return (
        <div>
             <Button variant="primary" onClick={()=>{
                 axios.get('http://localhost:5000/events/17',{
                     username:'mazaya',
                     password:'password'
                 })
                 .then(x=>alert(x.data.msg))
                 .catch(e=>alert(e))
             }}>Test Login API</Button>{' '}
        </div>
    )
}

export default Admin
