import React, { useState } from 'react';
import { AppContainer, GameTitle, QuestionContainer, InputContainer, Button, ResultContainer } from './style';

const words = [
  { korean: '고양이', english: 'Cat' },
  { korean: '클릭', english: 'Click' },
  { korean: '소', english: 'Cow' },
  { korean: '금이 가다', english: 'Crack' },
  { korean: '강아지', english: 'Dog' },
  { korean: '계란', english: 'Egg' },
  { korean: '여우', english: 'Fox' },
  { korean: '염소', english: 'Goat' },
  { korean: '돼지', english: 'Pig' },
  { korean: '휴식', english: 'Rest' },
  { korean: '일부', english: 'Some' }
]

function Game5() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isKorean, setIsKorean] = useState(Math.random() > 0.5);
  const [userAnswer, setUserAnswer] = useState('');
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const checkAnswer = () => {
    const correctAnswer = isKorean 
      ? words[currentWordIndex].english.toLowerCase()
      : words[currentWordIndex].korean;
    const userAnswerNormalized = isKorean 
      ? userAnswer.toLowerCase() 
      : userAnswer;

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
      setIsKorean(Math.random() > 0.5);
    } else {
      alert('You have completed the game!');
      setCurrentWordIndex(0);
      setIsKorean(Math.random() > 0.5);
    }
  };

  return (
    <AppContainer>
      <GameTitle>Korean-English Spelling Matching</GameTitle>
      <QuestionContainer>
        <p>
          {isKorean 
            ? `Translate to English: <strong>${words[currentWordIndex].korean}</strong>` 
            : `Translate to Korean: <strong>${words[currentWordIndex].english}</strong>`
          }
        </p>
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
    </AppContainer>
  );
}

export default Game5;
