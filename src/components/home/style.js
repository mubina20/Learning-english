import styled, { keyframes } from "styled-components";
import bg from "../../images/homeBg.png";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const HomePage = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-image: url('https://openfieldx.com/wp-content/uploads/2021/06/qualitative-quantitative-research-methods-for-edtech-1200x675.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    user-select: none;
    font-family: "Hi Melody", sans-serif;
    font-size: 2.4rem;
    animation: ${fadeIn} 1.5s ease-in-out;
`;

export const HomePageTitleContainer = styled.div`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomePageTitle = styled.div`
    width: 500px;
    height: 160px;
    font-family: "Hi Melody", sans-serif;
    color: #fff;
    font-weight: 500;
    background: linear-gradient(45deg, #cbe6f19e, #50cbef80);
    padding: 10px 20px;
    border-radius: 100px;
    /* box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomePageTitle2 = styled.div`
    width: 100%;
    padding: 5px 12px;
    text-align: center;
    font-size: 1.7rem;
    font-family: "Hi Melody", sans-serif;
    font-weight: 600;
    color: #fff;
    /* box-shadow: inset 0 0 10px #fb0068; */
    border-radius: 100px;
    overflow: hidden;
`;

export const GamesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
`;

export const Game = styled.img`
    width: 370px;
    height: 250px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    background-size: cover;
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
`;