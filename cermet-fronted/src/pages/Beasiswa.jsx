import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import CardContainer from '../components/Card/CardContainer'
import SearchEvent from '../components/SearchEvent'
import {getDataPublic} from '../controller'

function Beasiswa() {
    const [cardData, setCardData] = useState([])
    const [search, setSearch] = useState("")
    const [kategori, setKategori] = useState("All")
    const [initial, setInitial] = useState([])
    const [display, setDisplay] = useState("Event")
    useEffect(() => {
            getDataPublic()
                .then(
                    (result)=>{
                        setInitial([...result.data])
                        setCardData([...result.data])
                    }
                )
                .catch(
                    (err)=>alert(err)
                )
    }, [])

    useEffect(() => {
        const data = initial.filter(x=>x.judul.toLowerCase().includes(search) && (kategori === "All" ? true : (x.kategori === kategori)))
        setCardData(data)
        setDisplay((kategori==="All" ? "Semua" : kategori) )
    }, [search,kategori])
    
    return (
        <motion.div
        initial={{opacity:0,scale:0.75}}
        animate={{opacity:1,scale:1}}
        exit={{opacity:0,scale:0.75}}
        transition={{duration:1}}
        className='d-flex flex-column justify-content-center list-page'>
            <br/>
            <SearchEvent display={display} filterData={setSearch} filterKategori={setKategori}/>
            <CardContainer cardData={cardData}/>
        </motion.div>
    )
}

export default Beasiswa
