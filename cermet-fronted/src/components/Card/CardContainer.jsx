import React from 'react'
import Card from './Card'
import cardData from '../data'
import './Card.css'

function CardContainer() {
    return (
        <>    
            {cardData.map((data, idx)=>
            <Card 
              data={data}
              key={idx}
            />
            )}
        </>
    )
}

export default CardContainer
