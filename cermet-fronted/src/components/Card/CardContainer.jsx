import React from 'react'
import Card from './Card'
import './Card.css'

function CardContainer({cardData}) {
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
