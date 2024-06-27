import styled from 'styled-components';


// Styled components
export const GamePage = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    /* background-color: #000; */
`;

export const GameTitle = styled.h1`
    font-family: "Tangerine", cursive;
    font-size: 5rem;
    margin-bottom: 20px;
`;

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
`;

export const ItemList = styled.div`
    display: flex;
    margin: 0 20px;
`;

export const Item = styled.div`
    width: 100px;
    height: 100px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: ${props => (props.isDragging ? 0.5 : 1)};
`;

export const Target = styled.div`
    width: 100px;
    height: 100px;
    background-color: #e0e0e0;
    border: 2px dashed #000;
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => (props.isOver ? 0.5 : 1)};
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
`;

export const ResultContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
