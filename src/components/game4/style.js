import styled from 'styled-components';
import backgroundImg from '.././../images/background.png';

export const GamePage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

export const GameTitle = styled.h1`
  font-size: 3rem;
  font-family: "Permanent Marker", cursive;
  margin-bottom: -10px;
  color: #39e105;
`;

export const GameTitle2 = styled.h1`
  /* position: absolute;
  top: 60px;
  right: 100px; */
  font-size: 4rem;
  font-family: "Tangerine";
  margin-bottom: 20px;
  color: #e1059f;
`;

export const QuestionContainer = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const EnglishWord = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;

  input {
    width: 220px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;

    &:focus{
      outline: none;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const ResultContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const AudioIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const GameOver = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #ed0000;
`;

export const GameResult = styled.div`
  font-size: 18px;
  color: #059926;
`;

export const Back = styled.button`
  position: absolute;
  width: 100px;
  padding: 10px 10px;
  background: #f9568c;
  cursor: pointer;
  border-radius: 10px;
  color: #fff;
  border: none;
  bottom: 20px;
  left: 20px;
`;
