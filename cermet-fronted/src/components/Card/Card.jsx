import React from 'react'
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Card({data}) {
    return (
        <div className='card-item'>
            <div className="card-image">
                <img src={data.image} alt=""/>
            </div>

            <div className="card-content">
                <div className="content-date">
                    <span className='start-date'>{data.start}</span>
                    <span className='end-date'>{data.end}</span>
                </div>

                <h1 className='card-title'>{data.title}</h1>
                <p className='card-text'>{data.desc}</p>
                <button className='btn btn-primary'>
                    <a href={data.link} className='card-link'>Read more</a>
                </button>
            </div>    
        </div>
    )
}

export default Card
