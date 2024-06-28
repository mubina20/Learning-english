import styled from 'styled-components';

// Styled components
export const GameContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    user-select: none;
`;

export const BallsContainer = styled.div`
    width: 80%;
    min-height: 500px;
    background-color: #ff000024;
    position: relative;
`;

export const Ball = styled.div`
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WordContainer = styled.div`
    margin-top: 20px;
`;

export const WordButton = styled.button`
    min-width: 200px;
    padding: 10px 20px;
    background-color: #eb95ff;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
`;