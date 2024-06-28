import React, { useEffect, useState } from 'react';
import { AppContainer, GameTitle, QuestionContainer, InputContainer, Button, ResultContainer, AudioIcon, GamePage, EnglishWord, GameTitle2, GameOver, GameResult, Back } from './style';

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
import { useNavigate } from 'react-router-dom';

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

function Game4() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [currentAudio, setCurrentAudio] = useState(null); 
  const [gameCompleted, setGameCompleted] = useState(false);
  const navigate = useNavigate();

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
      setResult('잘했어요!');
      setCorrectCount(correctCount + 1);
    } else {
      setResult(`틀렸어요!... '${correctAnswer}' 입니다`);
      setIncorrectCount(incorrectCount + 1);
    }
  };

  const nextQuestion = () => {
    setResult(null);
    setUserAnswer('');
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1)
    } else {
      setGameCompleted(true);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setGameCompleted(false);
    setCurrentWordIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    playCurrentWordSound();
  };

  const goBack = () => {
      navigate(-1); 
  };

  return (
    <GamePage>
      <GameTitle>Korean-English Spelling Matching</GameTitle>
      <GameTitle2>With Masha</GameTitle2>
      
      {!gameStarted ? (
        <Button style={{marginTop: '80px'}} onClick={startGame}>게임 시작</Button>
      ) : gameCompleted ? (
        <ResultContainer>
          <GameOver>게임 완료!</GameOver>
          <GameResult>맞은 개수: {correctCount}</GameResult>
          <GameResult>틀린 개수: {incorrectCount}</GameResult>
          <Button style={{marginTop: '20px'}} onClick={startGame}>다시 시작</Button>
        </ResultContainer>
      ) : (
        <>
          <QuestionContainer>
              한국어로 번역해보세요: <EnglishWord>{words[currentWordIndex].english}</EnglishWord>
            <AudioIcon src={audioIcon} alt="" onClick={playWordSoundAgain} /> 
          </QuestionContainer>
          <InputContainer>
            <input type="text" value={userAnswer} onChange={handleInputChange} />
          </InputContainer>
          <Button onClick={checkAnswer}>정답</Button>
          {result && (
            <ResultContainer>
              <p>{result}</p>
              <Button onClick={nextQuestion}>다음</Button>
            </ResultContainer>
          )}
        </>
      )}
      <Back onClick={goBack}>이전 페이지</Back>
    </GamePage>
  );
}

export default Game4;