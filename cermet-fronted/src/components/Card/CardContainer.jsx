import React from 'react'
import Card from './Card'
import cardData from '../data'
import './Card.css'

function CardContainer() {
    return (
        <div className='card-container'>    
            {cardData.map((data, idx)=>
            <Card 
              data={data}
              key={idx}
            />
            )}
        </div>
    )
}

export default CardContainer
