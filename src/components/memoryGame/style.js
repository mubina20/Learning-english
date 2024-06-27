import styled from "styled-components"

export const GamePage = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: url('https://image.api.playstation.com/vulcan/ap/rnd/202202/2109/5QBSqZAy8xgcaqCUwnMiDd5j.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GamePageContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const MemoryCardsContainer = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
`

export const Card = styled.div`
    position: relative;
`

export const MemoryCardFront = styled.div`
    width: 120px;
    height: 90px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-align: center;
    border: 2px solid #000;
    border-radius: 10px;
    transform: rotateY(90deg);
    transition: all ease-in 0.2s;
    position: absolute;
    cursor: pointer;

    color: #686464;
    font-size: 15px;
    font-weight: 700;
`

export const MemoryCardBack = styled.img`
    width: 120px;
    height: 90px;
    border: 1px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease-in 0.2s;
    transition-delay: 0.2s;
    /* transform: rotate(90deg); */
    /* margin: 0 20px; */
    /* margin-right: 30px; */
`

export const Timer = styled.div`
    font-size: 2rem;
    margin: 10px;
`;

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    margin-top: 10px;
    cursor: pointer;
`;

export const Turns = styled.div`
    color: #fff;
    font-size: 1.6rem;
`;

export const Time = styled.div`
    color: #fff;
    font-size: 1.3rem;
    font-family: "Orbitron", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
`;

export const LetterImg = styled.img`
    position: absolute;
    top: 20px;
    left: 0px;
    width: 320px;
`;

export const LetterInsideContainer = styled.div`
    position: absolute;
    top: 50px;
    left: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    /* background-color: red; */
    width: 250px;
`;

export const Back = styled.div`
    width: 100px;
    height: 60px;
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #fff;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;

    &:hover {
        background: #c73a3a;
        color: #fff;
    }
`;

export const GameResult = styled.div`
    margin-left: -10px;
    font-size: 17px;
    color: red;
    font-weight: 900;
`;

export const GameTitle = styled.img`
    width: 500px;
    cursor: pointer;
    margin-top: 20px;
`;

export const RestartBtn = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 30px;
    background: #5f5fff;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
`;
