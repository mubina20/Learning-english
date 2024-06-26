import React, { useState, useEffect } from 'react'
import { GamePage, MemoryCardsContainer } from './style'
import SingleCard from './singleCard'

const englishWords = [
    {"word": "hurry", "meaning": "서두르다", matched: false},
    {'word': 'out', "meaning": "~의 안에서 밖으로", matched: false},
    {'word': 'hit', "meaning": "치다", matched: false},
    {'word': 'window', "meaning": "창문", matched: false},
    {'word': 'late', "meaning": "지각한", matched: false},
    {'word': 'breakfast', "meaning": "아침식사", matched: false},
    {'word': 'spill', "meaning": "쏟아지다", matched: false},
    {'word': 'fuss', "meaning": "호들갑", matched: false},
    {'word': 'take (the car)', "meaning": "타다", matched: false},
    {'word': 'star', "meaning": "별", matched: false}
]

const koreanWords = [
    {"word": "서두르다", "meaning": "hurry", matched: false},
    {'word': '~의 안에서 밖으로', "meaning": "out", matched: false},
    {'word': '치다', "meaning": "hit", matched: false},
    {'word': '창문', "meaning": "window", matched: false},
    {'word': '지각한', "meaning": "late", matched: false},
    {'word': '아침식사', "meaning": "breakfast", matched: false},
    {'word': '쏟아지다', "meaning": "spill", matched: false},
    {'word': '호들갑', "meaning": "fuss", matched: false},
    {'word': '타다', "meaning": "take (the car)", matched: false},
    {'word': '별', "meaning": "star", matched: false}
]

function MemoryGame() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const [selectedCards, setSelectedCards] = useState([])
    const [disabled, setDisabled] = useState(false)

    const shuffleWords = () => {
        const shuffledWords = [ ...englishWords, ...koreanWords ]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))

        setCards(shuffledWords)
        setTurns(0)
        setSelectedCards([])
    }

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.meaning === choiceTwo.word || choiceOne.word === choiceTwo.meaning) {
                setCards(prevCards => {
                    console.log("Those cards MATCH!!")
                    return prevCards.map(card => {
                        if (card.word === choiceOne.word || card.word === choiceTwo.word) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceOne, choiceTwo])

    console.log("CARDS ::", cards)

    useEffect(() => {
        shuffleWords()
    }, [])

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(presTrurns => presTrurns + 1)
    }

    return (
        <GamePage>
            <button onClick={shuffleWords}>Start Game</button>
            <MemoryCardsContainer>
                {cards.map(card => (
                    <SingleCard 
                        key={card.id} 
                        card={card} 
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                    />
                ))}
            </MemoryCardsContainer>
            <p>Turns: {turns}</p>
        </GamePage>
    )
}

export default MemoryGame
