import React, { useEffect } from 'react';
import { Card, MemoryCardBack, MemoryCardFront } from './style';
import cover from '../../images/cover.jpg';
import audioIcon from '../../audio/audio-icon.png';
import { AudioIcon } from '../game4/style';

function SingleCard({ card, handleChoice, flipped, matched }) {

    const handleClick = () => {
        handleChoice(card);
        console.log("CARD :::", card);
    };

    const handleAudioPlay = () => {
        if (card.audio) {
            const audio = new Audio(card.audio);
            audio.play();
        }
    };

    useEffect(() => {
        if (matched && card.audio) {
            const audio = new Audio(card.audio);
            audio.play();
        }
    }, [matched, card.audio]);

    return (
        <Card>
            <div className={flipped ? "flipped" : ""}>
                <MemoryCardFront className='front'>
                    <span>{card.word}</span>
                    {card.audio && (
                        <AudioIcon src={audioIcon} alt="Play audio" onClick={handleAudioPlay} />
                    )}
                </MemoryCardFront>
                <MemoryCardBack className='back' src={cover} onClick={handleClick} />
            </div>
        </Card>
    );
}

export default SingleCard;
