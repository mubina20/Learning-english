import styled from "styled-components"

export const GamePage = styled.div`
    width: 100%;
    min-height: 100vh;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MemoryCardsContainer = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`

export const Card = styled.div`
    position: relative;
`

export const MemoryCardFront = styled.div`
    width: 120px;
    height: 120px;
    background: #1b0932;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 5px;
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
    position: absolute;
    cursor: pointer;

    color: #fff;
    font-size: 20px;
`

export const MemoryCardBack = styled.img`
    width: 120px;
    height: 120px;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
`