import React, { useState, useEffect } from 'react';
import SingleCard from './singleCard';
import { MemoryCardsContainer, GamePage, Turns, Time, LetterImg, LetterInsideContainer, Back, GameResult, GameTitle, GamePageContainer, RestartBtn } from './style';
import { useNavigate } from 'react-router-dom';

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

import letter2 from '../../images/letter2.png';
import title from '../../images/memory-game.webp';

const englishWords = [
    { word: 'cat', meaning: '고양이', matched: false, audio: catAudio },
    { word: 'chick', meaning: '병아리', matched: false, audio: chickAudio },
    { word: 'cow', meaning: '소', matched: false, audio: cowAudio },
    { word: 'crack', meaning: '금이 가다', matched: false, audio: crackAudio },
    { word: 'dog', meaning: '강아지', matched: false, audio: dogAudio },
    { word: 'egg', meaning: '계란', matched: false, audio: eggAudio },
    { word: 'fox', meaning: '여우', matched: false, audio: foxAudio },
    { word: 'goat', meaning: '염소', matched: false, audio: goatAudio },
    { word: 'pig', meaning: '돼지', matched: false, audio: pigAudio },
    { word: 'rest', meaning: '휴식', matched: false, audio: restAudio }
];

const koreanWords = [
    { word: '고양이', meaning: 'cat', matched: false },
    { word: '병아리', meaning: 'chick', matched: false },
    { word: '소', meaning: 'cow', matched: false },
    { word: '금이 가다', meaning: 'crack', matched: false },
    { word: '강아지', meaning: 'dog', matched: false },
    { word: '계란', meaning: 'egg', matched: false },
    { word: '여우', meaning: 'fox', matched: false },
    { word: '염소', meaning: 'goat', matched: false },
    { word: '돼지', meaning: 'pig', matched: false },
    { word: '휴식', meaning: 'rest', matched: false }
];

function MemoryGame() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [showWinnerModal, setShowWinnerModal] = useState(false);
    const [showGameOverModal, setShowGameOverModal] = useState(false);
    const [remainingTime, setRemainingTime] = useState(120); 
    const [matchedCount, setMatchedCount] = useState(0); 
    const navigate = useNavigate();

    useEffect(() => {
        shuffleWords();
    }, []);

    useEffect(() => {
        if (remainingTime === 0) {
            handleGameOver();
        }
    }, [remainingTime]);

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            checkMatch();
        }
    }, [choiceOne, choiceTwo]);

    useEffect(() => {
        let timer;
        if (remainingTime > 0 && !showWinnerModal && !showGameOverModal) {
            timer = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [remainingTime, showWinnerModal, showGameOverModal]);

    const shuffleWords = () => {
        const shuffledWords = [...englishWords, ...koreanWords]
            .sort(() => Math.random() - 0.5)
            .map((word) => ({ ...word, id: Math.random() }));

        setCards(shuffledWords);
        setTurns(0);
        setRemainingTime(120); 
        setShowWinnerModal(false);
        setShowGameOverModal(false);
        setMatchedCount(0); 
    };

    const handleChoice = (card) => {
        if (!choiceOne) {
            setChoiceOne(card);
        } else if (!choiceTwo) {
            setChoiceTwo(card);
        }
    };

    const checkMatch = () => {
        if (choiceOne.word === choiceTwo.meaning || choiceOne.meaning === choiceTwo.word) {
            playAudio(choiceOne.audio);
            updateCards(choiceOne, choiceTwo);
            incrementMatchedCount();
            resetTurn();
            checkAllMatched();
        } else {
            setTimeout(resetTurn, 1000);
        }
    };

    const updateCards = (card1, card2) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === card1.id || card.id === card2.id ? { ...card, matched: true } : card
            )
        );
    };

    const incrementMatchedCount = () => {
        setMatchedCount((prevCount) => prevCount + 1);
    };

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((prevTurns) => prevTurns + 1);
    };

    const checkAllMatched = () => {
        if (matchedCount + 1 === 10) { 
            setShowWinnerModal(true);
        }
    };

    const handleGameOver = () => {
        setShowGameOverModal(true);
    };

    const restartGame = () => {
        shuffleWords();
    };

    const playAudio = (audioSrc) => {
        const audio = new Audio(audioSrc);
        audio.play();
    };

    const goBack = () => {
        navigate(-1); 
    };

    return (
        <GamePage>
            <LetterImg src={letter2} alt="" />
            <LetterInsideContainer>
                <Turns>Turns: {turns}</Turns>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center', width: '140px'}}>
                    <Turns>Time:</Turns> 
                    <Time>
                        {Math.floor(remainingTime / 60)}
                        :{remainingTime % 60 < 10 
                        ? `0${remainingTime % 60}` 
                        : remainingTime % 60}
                    </Time>
                </div>
                { showWinnerModal && <GameResult style={{color: "#fff"}}>축하합니다!</GameResult> }
                { showGameOverModal && <GameResult>좀만 더 노력해보세요!</GameResult> }
            </LetterInsideContainer>

            <GameTitle src={title} alt=""/>
            
            <GamePageContainer>
                <MemoryCardsContainer>
                    {cards.map((card) => (
                        <SingleCard
                            key={card.id}
                            card={card}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched}
                        />
                    ))}
                </MemoryCardsContainer>
                <RestartBtn onClick={restartGame}>게임 다시 시작</RestartBtn>
                
                <Back onClick={goBack}>이전 페이지</Back>
            </GamePageContainer>
        </GamePage>
    );
}

export default MemoryGame;
