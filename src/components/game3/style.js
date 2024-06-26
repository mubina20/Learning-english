import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  position: relative;
`;

export const GameTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const GameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  position: relative;
`;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.isSelected ? '#f0f0f0' : '#fff')};
  cursor: pointer;
  width: 120px;
  text-align: center;
  user-select: none;
`;

export const Target = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  width: 120px;
  height: 40px;
  text-align: center;
  background-color: #fff;
  cursor: pointer;
`;

export const Line = styled.line`
  stroke: black;
  stroke-width: 2;
`;
