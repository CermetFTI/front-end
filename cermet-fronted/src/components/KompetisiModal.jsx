import React, {useState} from 'react'
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Image, Tabs, Tab} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

Modal.setAppElement('#root')

const KompetisiModal = ({data,state,fungsi}) => {
    return (
        <Modal isOpen={state} onRequestClose={()=>fungsi(false)}>
            <Container style={{fontSize:'1rem'}} className="justify-content-md-center">
                <h2 className="d-flex justify-content-center">judul</h2>
                <FontAwesomeIcon onClick={()=>fungsi(false)} style={{cursor:"pointer",position:"absolute",right:"0px",top:"0px",margin:"1rem"}} icon={faTimesCircle} size='2x'/>
                <Tabs defaultActiveKey={Object.keys(data)[0]}>
                    {Object.keys(data).map((key,i)=>
                    ((key!=='judul') && (data[key]) && <Tab eventKey={key} title={key}>
                        {data[key]}    
                    </Tab>)
                    )}
                </Tabs>
            </Container>
        </Modal>
    )
}

export default KompetisiModal
