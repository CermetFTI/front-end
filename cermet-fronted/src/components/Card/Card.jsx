import React, { useEffect, useRef, useState } from 'react'
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FsLightbox from 'fslightbox-react';

function Card({data}) {
    const [modal, setModal] = useState(false)
    const [URL, setURL] = useState("")
    const imageSRC = useRef(null)
    useEffect(() => {
        setURL(imageSRC.current.currentSrc)
    }, [modal])
    return (
        <div className='card-post'>
            <div className={`card-post__img `} onClick={()=>setModal(!modal)}>
                <img ref={imageSRC} style={{cursor:"pointer"}} onClick={()=>setModal(!modal)} src={require(`../../../../../Backend/routes/images${data.poster}`).default} alt=""/>
            </div>
            <div className="card-post__info">
                <div className="card-post__date">
                    <span className='start-date'>From {data.tanggal_buka}</span>
                    <span className='end-date'> to {data.tanggal_tutup}</span>
                </div>
                <h1 className='card-post__title'>{data.judul}</h1>
                <p className='card-post__text' style={{fontSize:"1rem"}}>{data.deskripsi}</p>
                <a className='card-post__cta' style={{cursor:"pointer"}} onClick={()=>window.location.href=`${data.link}`}>Read more</a>
            </div>    
            <FsLightbox
                toggler={modal}
                sources={[URL]}
            />
        </div>
    )
}

export default Card
