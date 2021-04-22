import React from 'react'
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({data}) {
    return (
        <div className='card-post'>
            <div className="card-post__img">
                <img src={require(`../../../../../Backend/routes/images${data.poster}`).default} alt=""/>
            </div>
            <div className="card-post__info">
                <div className="card-post__date">
                    <span className='start-date'>From {data.tanggal_buka}</span>
                    <span className='end-date'> to {data.tanggal_tutup}</span>
                </div>
                <h1 className='card-post__title'>{data.judul}</h1>
                <p className='card-post__text'>{data.deskripsi}</p>
                <a href={data.link} className='card-post__cta'>Read more</a>
            </div>    
        </div>
    )
}

export default Card
