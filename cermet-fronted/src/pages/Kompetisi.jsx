import React, { useState } from 'react';
// import TimelineContainer from '../components/TimelineContainer'
import TimelineContainer from '../components/TimelineContainer'
import '../App.css'
import KompetisiModal from '../components/KompetisiModal'
import data from '../components/data'

function Kompetisi() {
    const [modal, setModal] = useState(true)
    const [index, setIndex] = useState(0)
    return (
        <div className='list-page'>
            {/* data yang dipassing dibawah itu berupa json */}
            <KompetisiModal data={data[index]} state={modal} fungsi={setModal}/>
            <h1>Kompetisi</h1>
            <TimelineContainer setModal={setModal} setIndex={setIndex}/>
        </div>
    )
}

export default Kompetisi
