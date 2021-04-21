import React, { useEffect, useState } from 'react'
import AdminForm from '../components/AdminForm'
import {Row, Col, Accordion, Form, Button, Card, Container, ButtonGroup, Dropdown, FormControl, DropdownButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchAdmin from '../components/SearchAdmin'
import {getData} from '../controller'

const AdminDashboard = () => {
    const [data, setData] = useState([])
    const [dataform, setdataform] = useState({})
    useEffect(async () => {
        const res = await getData();
        const result = []
        for(let i=0;i<res.data.length;i++){
            const {id,judul, deskripsi, poster, kategori, tanggal_buka, tanggal_tutup} = res.data[i]
            result.push({id,judul, deskripsi, poster, kategori, tanggal_buka, tanggal_tutup})
        }
        setData(result)
    }, [])
    useEffect(()=>{
        console.log(dataform)
    },[dataform])
    return (
            <Row>
                <Col xs={4} className="p-3">
                    <h1>Admin Panel</h1>
                    <hr/>
                    <AdminForm data={dataform}/>
                </Col>
                <Col style={{overflowY:"auto", height:"136vh"}}>
                    <SearchAdmin/>
                    <Accordion className="mt-3" defaultActiveKey="0">
                        {data.map((x,index)=><Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={index.toString()}>
                                {x.judul}
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index.toString()}>
                            <Card.Body>
                                    {Object.keys(x).map((i)=>
                                    <li>{i} : {x[i]}</li>
                                    )}
                                    <br/>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>)}

                    </Accordion>
                </Col>
            </Row>
    )
}

export default AdminDashboard
