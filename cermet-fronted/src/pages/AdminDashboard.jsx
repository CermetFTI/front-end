import React, { useEffect, useState } from 'react'
import AdminForm from '../components/AdminForm'
import {Row, Col, Accordion, Form, Button, Card, Container, ButtonGroup, Dropdown, FormControl, DropdownButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchAdmin from '../components/SearchAdmin'
import {getData} from '../controller'

const AdminDashboard = () => {
    const [data, setData] = useState([])
    const [dataform, setdataform] = useState({})
    const [search, setSearch] = useState("")
    const [initial,setInitial] = useState([])
    const changeSearch = (data) => {
        setSearch(data)
    }

    
    useEffect(async () => {
        const result = []
        const res = await getData();
        for(let i=0;i<res.data.length;i++){
            const {id,judul, deskripsi, poster, kategori, tanggal_buka, tanggal_tutup} = res.data[i]
            result.push({id,judul, deskripsi, poster, kategori, tanggal_buka, tanggal_tutup})
        }
        setData(result)
        setInitial(result)
    }, [])
    useEffect(()=>{
        const result = initial
        if(search==="" || search===null || search===undefined){
            setData(result)
        } else {
            const filteredData = []
            for(let i=0;i<result.length;i++){
                if(result[i].judul !== null){
                    if(result[i].judul.includes(search)){
                        filteredData.push(result[i])
                    }
                }
            }
            setData(filteredData)
        }
    },[search])
    return (
            <Row>
                <Col xs={4} className="p-3">
                    <h1>Admin Panel</h1>
                    <hr/>
                    <AdminForm data={dataform}/>
                </Col>
                <Col style={{overflowY:"auto", height:"136vh"}}>
                    <SearchAdmin data={search} fungsi={changeSearch}/>
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
