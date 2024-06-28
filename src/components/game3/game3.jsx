import React, { useState, useEffect } from 'react';
import { AppContainer, GameContainer, GameTitle, Item, ItemList, Target, Button, ResultContainer, GamePage, TargetTop, TargetBottom, ResultContainerTop, Back } from './style';
import { shuffle } from 'lodash';

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
import audioIcon from '../../audio/audio-icon.png';
import { AudioIcon } from '../game4/style';
import { useNavigate } from 'react-router-dom';

const items = [
    { id: 1, name: 'cat', audio: catAudio },
    { id: 2, name: 'chick', audio: chickAudio },
    { id: 3, name: 'cow', audio: cowAudio },
    { id: 4, name: 'crack', audio: crackAudio },
    { id: 5, name: 'dog', audio: dogAudio },
    { id: 6, name: 'egg', audio: eggAudio },
    { id: 7, name: 'fox', audio: foxAudio },
    { id: 8, name: 'goat', audio: goatAudio },
    { id: 9, name: 'pig', audio: pigAudio },
    { id: 10, name: 'rest', audio: restAudio }
];

const targets = [
    { id: 1, name: '고양이' },
    { id: 2, name: '병아리' },
    { id: 3, name: '소' },
    { id: 4, name: '금이 가다' },
    { id: 5, name: '강아지' },
    { id: 6, name: '계란' },
    { id: 7, name: '여우' },
    { id: 8, name: '염소' },
    { id: 9, name: '돼지' },
    { id: 10, name: '휴식' }
];

const Game3 = () => {
    const [draggingItem, setDraggingItem] = useState(null);
    const [dropTargets, setDropTargets] = useState(shuffle(targets.map(target => ({ ...target, item: null, isCorrect: null }))));
    const [shuffledItems, setShuffledItems] = useState(shuffle(items));  
    const [showResult, setShowResult] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [incorrectCount, setIncorrectCount] = useState(0);
    const navigate = useNavigate();

    const handleDragStart = (item) => {
        setDraggingItem(item);
    };

    const handleDragOver = (e, target) => {
        e.preventDefault();
        setDropTargets(prev =>
            prev.map(t => t.id === target.id ? { ...t, isOver: true } : { ...t, isOver: false })
        );
    };

    const handleDrop = (target) => {
        setDropTargets(prev =>
            prev.map(t =>
                t.id === target.id ? { ...t, item: draggingItem, isOver: false } : t
            )
        );
        setShuffledItems(prevItems => prevItems.filter(item => item.id !== draggingItem.id));
        setDraggingItem(null);
    };

    const handleAudioPlay = (audio) => {
        const audioInstance = new Audio(audio);
        audioInstance.play();
    };

    useEffect(() => {
        const allDropped = dropTargets.every(target => target.item !== null);
        if (allDropped) {
            let correct = 0;
            let incorrect = 0;

            const newDropTargets = dropTargets.map(target => {
                const matchedItem = items.find(item => item.name === target.item?.name);
                const isCorrect = matchedItem && target.name === targets.find(t => t.id === matchedItem.id)?.name;
                
                if (isCorrect) {
                    correct++;
                } else {
                    incorrect++;
                }

                return { ...target, isCorrect };
            });

            setDropTargets(newDropTargets);
            setCorrectCount(correct);
            setIncorrectCount(incorrect);
            setShowResult(true);
        }
    }, [dropTargets]);

    const resetGame = () => {
        setDropTargets(shuffle(targets.map(target => ({ ...target, item: null, isCorrect: null }))));
        setShuffledItems(shuffle(items));  
        setShowResult(false);
        setCorrectCount(0);
        setIncorrectCount(0);
    };

    const goBack = () => {
        navigate(-1); 
    };

    return (
        <GamePage>
            <GameTitle>Matching Game</GameTitle>
            <GameContainer>
                {!showResult && (
                    <ItemList style={{height: '140px'}}>
                        {shuffledItems.map(item => (
                            <Item
                                key={item.id}
                                draggable
                                onDragStart={() => handleDragStart(item)}
                                isDragging={draggingItem && draggingItem.id === item.id}
                            >
                                {item.name}
                                <AudioIcon 
                                    src={audioIcon} 
                                    onClick={() => handleAudioPlay(item.audio)} 
                                />
                            </Item>
                        ))}
                    </ItemList>
                )}
                <ItemList style={{height: '250px'}}>
                    {dropTargets.map(target => (
                        <Target
                            key={target.id}
                            onDragOver={(e) => handleDragOver(e, target)}
                            onDrop={() => handleDrop(target)}
                            isOver={target.isOver}
                            style={{
                                backgroundColor: target.isCorrect === false ? '#f75555' : '#fff',
                                color: target.isCorrect === false ? '#fff' : '#000'
                            }}
                        >
                            { target.item 
                                ? <div>
                                    <TargetTop>
                                        {target.item.name}
                                        <AudioIcon 
                                            src={audioIcon} 
                                            onClick={() => handleAudioPlay(target.item.audio)} 
                                        />
                                    </TargetTop> 
                                    <TargetBottom>
                                        {target.name}
                                    </TargetBottom> 
                                </div>
                                : <div>
                                    <TargetTop></TargetTop>
                                    <TargetBottom>{target.name}</TargetBottom>
                                </div> 
                            }
                        </Target>
                    ))}
                </ItemList>
            </GameContainer>
            {showResult && (
                <ResultContainer>
                    <ResultContainerTop>
                        <p>맞은 개수: {correctCount}</p>
                        <p>틀린 개수: {incorrectCount}</p>
                    </ResultContainerTop>
                    <Button onClick={resetGame}>Reset Game</Button>
                </ResultContainer>
            )}
            <Back onClick={goBack}>이전 페이지</Back>
        </GamePage>
    );
};

export default Game3;
