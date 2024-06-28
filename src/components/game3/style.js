import styled from 'styled-components';

export const GamePage = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: url('https://t3.ftcdn.net/jpg/04/54/10/76/360_F_454107697_1rV7cwwNSp58RjXXEz3h6UPqViNvRiWD.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GameTitle = styled.h1`
    font-family: "Tangerine";
    font-size: 5rem;
    margin-top: 30px;
    margin-bottom: 20px;
    color: #fff;
    font-weight: 700px;
`;

export const GameContainer = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    gap: 70px;
`;

export const ItemList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 40px;
`;

export const Item = styled.div`
    width: 150px;
    height: 40px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    opacity: ${props => (props.isDragging ? 0.5 : 1)};
`;

export const Target = styled.div`
    position: relative;
    width: 170px;
    height: 80px;
    background-color: #e0e0e0;
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    padding: 10px 0;
    justify-content: center;
    text-align: center;
    opacity: ${props => (props.isOver ? 0.5 : 1)};
`;

export const TargetTop = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 150px;
    height: 40px;
    /* background: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: inset 0 0 5px #b5b2b2;
    border-radius: 8px;
`;

export const TargetBottom = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 150px;
    height: 40px;
    /* background: blue; */
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TargetName = styled.div`
    width: 150px;
    height: 70px;
    background: red;
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
