import React, { useEffect, useState } from 'react';
import { AppContainer, GameTitle, QuestionContainer, InputContainer, Button, ResultContainer, AudioIcon } from './style';

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

const words = [
  { korean: '고양이', english: 'Cat', sound: catAudio },
  { korean: '병아리', english: 'Chick', sound: chickAudio },
  { korean: '소', english: 'Cow', sound: cowAudio },
  { korean: '금이 가다', english: 'Crack', sound: crackAudio },
  { korean: '강아지', english: 'Dog', sound: dogAudio },
  { korean: '계란', english: 'Egg', sound: eggAudio },
  { korean: '여우', english: 'Fox', sound: foxAudio },
  { korean: '염소', english: 'Goat', sound: goatAudio },
  { korean: '돼지', english: 'Pig', sound: pigAudio },
  { korean: '휴식', english: 'Rest', sound: restAudio }
];

function Game5() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null); 

  useEffect(() => {
    if (gameStarted) {
      playCurrentWordSound();
    }
  }, [currentWordIndex, gameStarted]);

  const playCurrentWordSound = () => {
    const audio = new Audio(words[currentWordIndex].sound);
    audio.play();
    setCurrentAudio(audio);
  };

  const playWordSoundAgain = () => {
    if (currentAudio) {
      currentAudio.pause(); 
      currentAudio.currentTime = 0; 
      currentAudio.play(); 
    }
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = () => {
    const correctAnswer = words[currentWordIndex].korean;
    const userAnswerNormalized = userAnswer.trim();

    if (userAnswerNormalized === correctAnswer) {
      setResult('Correct!');
    } else {
      setResult(`Incorrect! The correct answer is ${correctAnswer}`);
    }
  };

  const nextQuestion = () => {
    setResult(null);
    setUserAnswer('');
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      alert('You have completed the game!');
      setCurrentWordIndex(0);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    playCurrentWordSound();
  };

  return (
    <AppContainer>
      <GameTitle>Korean-English Spelling Matching</GameTitle>
      {!gameStarted ? (
        <Button onClick={startGame}>게임 시작</Button>
      ) : (
        <>
          <QuestionContainer>
            <p>
              Translate to Korean: <strong>{words[currentWordIndex].english}</strong>
            </p>
            <AudioIcon src={audioIcon} alt="" onClick={playWordSoundAgain} /> 
          </QuestionContainer>
          <InputContainer>
            <input type="text" value={userAnswer} onChange={handleInputChange} />
          </InputContainer>
          <Button onClick={checkAnswer}>Check Answer</Button>
          {result && (
            <ResultContainer>
              <p>{result}</p>
              <Button onClick={nextQuestion}>Next</Button>
            </ResultContainer>
          )}
        </>
      )}
    </AppContainer>
  );
}

export default Game5;
