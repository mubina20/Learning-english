import React from 'react'
import { Card, MemoryCardBack, MemoryCardFront } from './style'
import cover from '../../images/cover.jpg'

function SingleCard({ card, handleChoice, flipped }) {

    const handleClick = () => {
        handleChoice(card)
        console.log("CARD :::", card)
    }

    return (
        <Card>
            <div className={flipped ? "flipped" : ""}>
                <MemoryCardFront className='front'><span>{card.word}</span></MemoryCardFront>
                <MemoryCardBack className='back' src={cover} onClick={handleClick}/>
            </div>
        </Card>
    )
}

export default SingleCard