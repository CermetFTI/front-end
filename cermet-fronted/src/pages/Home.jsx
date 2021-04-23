import { motion } from 'framer-motion'
import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router'
import Typewriter from 'typewriter-effect'

export default function Home() {
    const history = new useHistory()
    const isMobile = useMediaQuery({
        query: '(min-device-width: 520px)'
      })
    const isSpecial = useMediaQuery({
        query: '(min-device-width: 300px)'
    })
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{ opacity: 0,scale:1.25 }}
        transition={{duration:1}}
        style={{height:"100%",overflow:"hidden", position:"absolute",top:"0px",minWidth:"100%", left:"0px"}}>
            <img style={{width:"100vw",position:'absolute',left:"0",top:"2rem",zIndex:"1",minHeight:"94vh",minWidth:"1128px"}} src="https://cdn.hipwallpaper.com/i/33/66/h72GYP.jpg" alt=""/>
            <div style={{width:"100vw",position:'absolute',left:"0",top:"2rem",zIndex:"2",minHeight:"100vh",minWidth:"1128px",backgroundColor:"rgba(0,0,0,0.5)"}}></div>
            <Container className="d-flex align-items-center" style={{height:"100%"}}>
                    <motion.div
                    initial={{y:-500}}
                    animate={{y:0}}
                    transition={{
                        delay:1,
                        duration:0.5,
                        type: "spring",
                        bounce: 0.75,
                        stiffness: 70
                    }}
                    style={{color:"white",position:"relative",zIndex:"10", margin:"0 auto"}}>
                        
                        { isMobile ? <h1 className="d-flex justify-content-center">
                        <Typewriter
                            onInit={e=>e
                            .pauseFor(1650)
                            .typeString(`Welcome to Cermet!`)
                            .start()
                        }
                        />
                        </h1> :
                        <h3 className="d-flex justify-content-center">
                        <Typewriter
                            onInit={e=>e.typeString(`Welcome to ${!isSpecial ? "<br/>" : ""} Cermet!`) //520
                            .start()
                        }
                        />
                        </h3>
                        }
                        <hr color="white"/>
                        <p className="d-flex justify-content-center"style={{maxWidth:"50vw",textAlign:"center"}}>Halooo sobat ambis! Cermet adalah program kerja divisi student development BPA FTI 2020, di website ini terdapat berbagai info mengenai lomba, internship, dan beasiswa</p>
                            <div className="container d-flex justify-content-center">
                                <Button onClick={()=>history.push('/beasiswa')} variant="outline-light">Tap to read</Button>
                            </div>                    
                        </motion.div>
            </Container>
        </motion.div>
    )
}
