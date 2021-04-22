import React, { useEffect, useState } from 'react'
import CardContainer from '../components/Card/CardContainer'
import data from '../components/data'
import SearchEvent from '../components/SearchEvent'
import {getDataPublic} from '../controller'

function Beasiswa() {
    const [cardData, setCardData] = useState([])
    const [search, setSearch] = useState("")
    const [kategori, setKategori] = useState("All")
    const [initial, setInitial] = useState([])
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
        const data = initial.filter(x=>x.judul.toLowerCase().includes(search) && (kategori === "All" ? true : (x.kategori == kategori)))
        setCardData(data)
    }, [search,kategori])
    
    return (
        <div className='d-flex flex-column justify-content-center list-page'>
            <br/>
            <SearchEvent filterData={setSearch} filterKategori={setKategori}/>
            <CardContainer cardData={cardData}/>
        </div>
    )
}

export default Beasiswa
