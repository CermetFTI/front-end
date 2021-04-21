import React, { useState } from 'react';
// import TimelineContainer from '../components/TimelineContainer'
import TimelineContainer from '../components/TimelineContainer'
import '../App.css'
import KompetisiModal from '../components/KompetisiModal'
import data from '../components/data'

function Kompetisi() {
    const [modal, setModal] = useState(true)
    return (
        <div className='list-page'>
            {/* data yang dipassing dibawah itu berupa json */}
            <KompetisiModal data={data[1]}/>
            <h1>Kompetisi</h1>
            <TimelineContainer />
        </div>
    )
}

export default Kompetisi
