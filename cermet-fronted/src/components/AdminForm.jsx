import React, { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {postData,updateData,deleteData} from '../controller'

const AdminForm = () => {
    const [perintah, setperintah] = useState("Create")
    const [judul, setjudul] = useState("")
    const [deskripsi, setdeskripsi] = useState("")
    const [event, setevent] = useState("Lomba")
    const [link, setlink] = useState("")
    const [tanggalbuka, settanggalbuka] = useState("")
    const [tanggaltutup, settanggaltutup] = useState("")
    const [id,setid] = useState("")


    const submitHandler = async (e) => {
        e.preventDefault();
        const parsing = ({judul,deskripsi,event,link,tanggalbuka,tanggaltutup}) => {
            return {
                kategori:event,
                deskripsi,
                link,
                tanggal_buka:tanggalbuka,
                tanggal_tutup:tanggaltutup,
                judul
            }
        }
        const checknull = (data) => {
            let result = {}
            Object.keys(data).forEach(x=>
                {
                    if(data[x] !== "" && data[x]!== undefined){
                        result[x] = data[x]
                    }
                })
            return result
        }
        const data = {id,judul,deskripsi,event,link,tanggalbuka,tanggaltutup}
        
        const final = parsing(checknull(data))
        let result;
        if (perintah === "Create"){
            result = await postData(final)
        } else if(perintah==="Update") {
            console.log(final)
            result = await updateData({...final},id)
        } else if(perintah==="Delete") {
            result = await deleteData(id)
        }
        alert(result);
    }
    return (
        <>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Perintah</Form.Label>
                    <Form.Control onChange={(e)=>setperintah(e.target.value)} as="select">
                        <option>Create</option>
                        <option>Delete</option>
                        <option>Update</option>
                    </Form.Control>
                </Form.Group>
                {
                    (perintah !== 'Create') &&
                    <Form.Group controlId="formBasicText">
                        <Form.Label>id</Form.Label>
                        <Form.Control required onChange={(e)=>setid(e.target.value)} type="text" placeholder="Id" />
                    </Form.Group>
                }
                {
                    (perintah !== "Delete") && <>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control onChange={(e)=>setjudul(e.target.value)} type="text" placeholder="Judul" />
                </Form.Group>
                <Form.Group controlId="formBasicTextarea">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control onChange={(e)=>setdeskripsi(e.target.value)} as="textarea" rows={2} />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Event</Form.Label>
                    <Form.Control onChange={(e)=>setevent(e.target.value)} as="select">
                        <option>Lomba</option>
                        <option>Internship</option>
                        <option>Beasiswa</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Link poster</Form.Label>
                    <Form.Control onChange={(e)=>setlink(e.target.value)} type="text" placeholder="Link" />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Tanggal Buka</Form.Label>
                    <Form.Control onChange={(e)=>settanggalbuka(e.target.value)} type="text" placeholder="YYYY-MM-DD" />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                    <Form.Label>Tanggal Tutup</Form.Label>
                    <Form.Control onChange={(e)=>settanggaltutup(e.target.value)} type="text" placeholder="YYYY-MM-DD" />
                </Form.Group></>}
                <Button variant="primary" type="submit">
                    Submit
                </Button> 
                
            </Form>
        </>
    )
}

export default AdminForm
