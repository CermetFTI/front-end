import React, { useEffect, useState } from 'react'
import AdminForm from '../components/AdminForm'
import {Row, Col, Accordion, Form, Button, Card, Container, ButtonGroup, Dropdown, FormControl, DropdownButton, ToggleButton} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchAdmin from '../components/SearchAdmin'
import {getData} from '../controller'
import {useMediaQuery} from 'react-responsive'

const AdminDashboard = () => {
    const isSingle = useMediaQuery({
        query: '(min-device-width: 545px)'
      })
    const [form, setForm] = useState(false)
    const [data, setData] = useState([])
    const [dataform, setdataform] = useState({})
    const [search, setSearch] = useState("")
    const [initial,setInitial] = useState([])
    const changeSearch = (data) => {
        setSearch(data)
    }
    const [kategori,setKategori] = useState("All")

    
    useEffect(async () => {
        const result = []
        const res = await getData();
        for(let i=0;i<res.data.length;i++){
            const {id,judul, deskripsi, link, poster, kategori, tanggal_buka, tanggal_tutup} = res.data[i]
            result.push({id,judul, deskripsi, link, poster, kategori, tanggal_buka, tanggal_tutup})
        }
        setData(result)
        setInitial(result)
    }, [])
    useEffect(()=>{
        const filteredData = []
        const result = initial
        if(search===" " || search===null || search===undefined){
            setData(result)
        } else {
            for(let i=0;i<result.length;i++){
                if(result[i].judul !== null){
                    if(result[i].judul.includes(search)){
                        filteredData.push(result[i])
                    }
                }
            }
        }
        const secondFilter = []
        if(kategori!=="All"){
            for(let i=0;i<filteredData.length;i++){
                if(filteredData[i].kategori !== null){
                    if(filteredData[i].kategori === kategori){
                        secondFilter.push(filteredData[i])
                    }
                }
            }
        } else {
            secondFilter.push(...filteredData)
        }
        setData(secondFilter)
    },[search,kategori])
    return (
            <Row>
                
            {isSingle 
            &&
            <Col xs={4} className="p-3">
                <h1>Admin Panel</h1>
                <hr/>
                <AdminForm data={dataform}/>
            </Col>
            }
                <Col style={{overflowY:"auto", height:"136vh"}}>
                    {
                        !isSingle && 
                        <ButtonGroup className="mt-3 d-flex justify-content-center" toggle>
                            <ToggleButton
                                className="p-3"
                                type="checkbox"
                                variant="secondary"
                                checked={form}
                                value="1"
                                onChange={() => setForm(true)}
                            >
                                Display form
                            </ToggleButton>
                            <ToggleButton
                                className="p-3"
                                type="checkbox"
                                variant="secondary"
                                checked={!form}
                                value="2"
                                onChange={() => setForm(false)}
                            >
                                Display data
                            </ToggleButton>
                        </ButtonGroup>
                    }
                    {
                        form 
                        ?
                        <>
                        <br/>
                        <AdminForm data={dataform}/>
                        </>
                        :
                    <><SearchAdmin data={search} fungsi={changeSearch} fungsiDropdown={setKategori}/>
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
                    </Accordion></>
                    }
                </Col>
            </Row>
    )
}

export default AdminDashboard
