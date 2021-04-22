import React, { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {postData,updateData,deleteData} from '../controller'

const AdminForm = ({setUpdate,update}) => {
    const [perintah, setperintah] = useState("Create")
    const [judul, setjudul] = useState("")
    const [deskripsi, setdeskripsi] = useState("")
    const [event, setevent] = useState("Lomba")
    const [link, setlink] = useState("")
    const [tanggalbuka, settanggalbuka] = useState("")
    const [tanggaltutup, settanggaltutup] = useState("")
    const [id,setid] = useState("")
    const [poster,setposter] = useState('')


    const submitHandler = async (e) => {
        e.preventDefault();
        const parsing = ({poster,judul,deskripsi,event,link,tanggalbuka,tanggaltutup}) => {
            var formData = new FormData();
            if(event){
                formData.append("kategori",event);
            }
            if(deskripsi){
                formData.append("deskripsi",deskripsi);
            }
            if(link){
                formData.append('link',link)
            }
            if(tanggalbuka){
                formData.append("tanggal_buka",tanggalbuka)
            }
            if(tanggaltutup){
                formData.append('tanggal_tutup',tanggaltutup)
            }
            if(judul){
                formData.append('judul',judul)
            }
            if(poster){
                formData.append('poster',poster)
            }
            return formData
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
        const data = {poster,judul,deskripsi,event,link,tanggalbuka,tanggaltutup}
        const final = parsing(checknull({...data}))
        let result;
        if (perintah === "Create"){
            result = await postData(final)
        } else if(perintah==="Update") {
            result = await updateData(parsing(checknull({...data})),id)
        } else if(perintah==="Delete") {
            result = await deleteData(id)
        }
        alert(result);
        setUpdate(!update)
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
                <Form.Group controlId="12">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control onChange={(e)=>setjudul(e.target.value)} type="text" placeholder="Judul" />
                </Form.Group>
                <Form.Group controlId="22">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control onChange={(e)=>setdeskripsi(e.target.value)} as="textarea" rows={2} />
                </Form.Group>
                <Form.Group controlId="32">
                    <Form.Label>Event</Form.Label>
                    <Form.Control onChange={(e)=>setevent(e.target.value)} as="select">
                        <option>Lomba</option>
                        <option>Internship</option>
                        <option>Beasiswa</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="42">
                    <Form.Label>Link kegiatan</Form.Label>
                    <Form.Control onChange={(e)=>setlink(e.target.value)} type="text" placeholder="Link" />
                </Form.Group>
                <Form.Group>
                    <Form.File id="52" label="Poster" onChange={(e)=>setposter(e.target.files[0])}/>
                </Form.Group>
                <Form.Group controlId="62">
                    <Form.Label>Tanggal Buka</Form.Label>
                    <Form.Control onChange={(e)=>settanggalbuka(e.target.value)} type="text" placeholder="YYYY-MM-DD" />
                </Form.Group>
                <Form.Group controlId="72">
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
