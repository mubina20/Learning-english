import React, { useState, useEffect } from 'react'
import { Button, GamePage, MemoryCardsContainer, ResultContainer, Timer } from './style'
import SingleCard from './singleCard'

import catAudio from '../../audio/cat.mp3';
import chickAudio from '../../audio/chick.mp3';
import cowAudio from '../../audio/cow.mp3';
import crackAudio from '../../audio/crack.mp3';
import dogAudio from '../../audio/dog.mp3';
import eggAudio from '../../audio/egg.mp3';
import foxAudio from '../../audio/fox.mp3';
import goatAudio from '../../audio/goat.mp3';
import pigAudio from '../../audio/pig.mp3';
import restAudio from '../../audio/rest.mp3';
import WinnerModal from './winnerModal';
import { GameOverModal } from './gameOverModal';


const englishWords = [
    {"word": "cat", "meaning": "고양이", matched: false, audio: catAudio},
    {'word': 'chick', "meaning": "병아리", matched: false, audio: chickAudio},
    {'word': 'cow', "meaning": "소", matched: false, audio: cowAudio},
    {'word': 'crack', "meaning": "금이 가다", matched: false, audio: crackAudio},
    {'word': 'dog', "meaning": "강아지", matched: false, audio: dogAudio},
    {'word': 'egg', "meaning": "계란", matched: false, audio: eggAudio},
    {'word': 'fox', "meaning": "여우", matched: false, audio: foxAudio},
    {'word': 'goat', "meaning": "염소", matched: false, audio: goatAudio},
    {'word': 'pig', "meaning": "돼지", matched: false, audio: pigAudio},
    {'word': 'rest', "meaning": "휴식", matched: false, audio: restAudio}
]

const koreanWords = [
    {"word": "고양이", "meaning": "cat", matched: false},
    {'word': '병아리', "meaning": "chick", matched: false},
    {'word': '소', "meaning": "cow", matched: false},
    {'word': '금이 가다', "meaning": "crack", matched: false},
    {'word': '강아지', "meaning": "dog", matched: false},
    {'word': '계란', "meaning": "egg", matched: false},
    {'word': '여우', "meaning": "fox", matched: false},
    {'word': '염소', "meaning": "goat", matched: false},
    {'word': '돼지', "meaning": "pig", matched: false},
    {'word': '휴식', "meaning": "rest", matched: false}
]

function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [timeLeft, setTimeLeft] = useState(120); 
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(false);
    const [open, setOpen] = React.useState(false)

    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    const shuffleWords = () => {
        const shuffledWords = [...englishWords, ...koreanWords]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setCards(shuffledWords);
        setTurns(0);
        setTimeLeft(120); // 게임을 다시 시작할 때 타이머 초기화
        setGameOver(false);
        setWinner(false);
        setChoiceOne(null);
        setChoiceTwo(null);
    };

    const handleChoice = (card) => {
        if (!gameOver && !winner) {
            choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
        }
    };

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.meaning === choiceTwo.word || choiceOne.word === choiceTwo.meaning) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.word === choiceOne.word || card.word === choiceTwo.word) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    useEffect(() => {
        shuffleWords();
    }, []);

    useEffect(() => {
        if (timeLeft > 0 && !gameOver && !winner) {
            const timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            setGameOver(true);
        }
    }, [timeLeft, gameOver, winner]);

    useEffect(() => {
        const allMatched = cards.every(card => card.matched);
        if (allMatched && cards.length > 0) {
            setWinner(true);
        }
    }, [cards]);

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
    };

    return (
        <GamePage>
            <button onClick={shuffleWords}>Start Game</button>
            <Timer>Time Left: {Math.floor(timeLeft / 60)}:{('0' + timeLeft % 60).slice(-2)}</Timer>
            <MemoryCardsContainer>
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        matched={card.matched}
                    />
                ))}
            </MemoryCardsContainer>
            <p>Turns: {turns}</p>
            {gameOver && <GameOverModal onRestart={shuffleWords}  />}
            {winner && <WinnerModal onRestart={shuffleWords} open={open} setOpen={setOpen}/>}
        </GamePage>
    );
}

export default MemoryGame
