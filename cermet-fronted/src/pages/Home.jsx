import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Typewriter from 'typewriter-effect'

export default function Home() {
    const history = new useHistory()
    return (
        <div style={{height:"100vh",overflow:"hidden", position:"absolute",top:"0",width:"100vw", left:"0px"}}>
            <img style={{width:"100vw",position:'absolute',top:"8vh",zIndex:"1",minHeight:"100vh",minWidth:"773px"}} src="https://cdn.hipwallpaper.com/i/33/66/h72GYP.jpg" alt=""/>
            <div style={{width:"100vw",position:'absolute',top:"8vh",zIndex:"2",minHeight:"100vh",minWidth:"773px",backgroundColor:"rgba(0,0,0,0.5)"}}></div>
            <Container className="d-flex align-items-center" style={{height:"100%"}}>
                    <div style={{color:"white",position:"relative",zIndex:"10", margin:"0 auto"}}>
                        
                        <h1 className="d-flex justify-content-center">
                        <Typewriter
                            onInit={e=>e.typeString("Welcome to Cermet!")
                            .start()
                        }
                        />
                        </h1>
                        <hr color="white"/>
                        <p>
                        <p className="d-flex justify-content-center"style={{maxWidth:"50vw",textAlign:"center"}}>Halooo sobat ambis! Cermet adalah program kerja divisi student development BPA FTI 2020, di website ini terdapat berbagai info mengenai lomba, internship, dan beasiswa</p></p>
                            <div className="container d-flex justify-content-center">
                                <Button onClick={()=>history.push('/kompetisi')} variant="outline-light">Read more </Button>
                            </div>                    
                        </div>
            </Container>
        </div>
    )
}
