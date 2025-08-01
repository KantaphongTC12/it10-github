import React from 'react'
import Card from './Card'
import cardData from '../services/cardData'

const CardList = () => {
  return (
    <>
        <div className='grid sm:grid-cols-4 gap-4 py-4'> 
            {cardData.map(card => (
                <Card 
                key={card.id}
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                />
            ))}
                

        </div>
    
    
    </>
  )
}

export default CardList
