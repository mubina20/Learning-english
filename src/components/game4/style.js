import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const GameTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const QuestionContainer = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
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
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;

export const ResultContainer = styled.div`
  margin-top: 20px;
  font-size: 18px;

  p {
    margin-bottom: 10px;
  }
`;

export const AudioIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
