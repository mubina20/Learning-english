import React from 'react';
import { Link } from 'react-router-dom';

import game1 from '../../images/game1.png';
import game2 from '../../images/game2.png';
import game3 from '../../images/game3.png';
import { Game, GamesContainer, HomePage, HomePageTitle, HomePageTitle2, HomePageTitleContainer } from './style';

function Home() {
    return (
        <HomePage>
            <HomePageTitleContainer>
                <HomePageTitle>
                    <HomePageTitle2>
                        이제 게임으로 기억력 테스트 한 번 해볼까?<br/>
                        {/* Let's go~~~! */}
                        <img src="https://data.textstudio.com/output/sample/animated/3/3/5/7/let-s-go-1-17533.gif" alt="" style={{width: '300px'}}/>
                    </HomePageTitle2>
                </HomePageTitle>
            </HomePageTitleContainer>

            <GamesContainer>
                <Link to={'/memory-game'}>
                    <Game src={game1} alt="Memory Game" />
                </Link>

                <Link to={'/image-matching-game'}>
                    <Game src={game2} alt="Image Matching Game" />
                </Link>

                <Link to={'/spelling-matching-game'}>
                    <Game src={game3} alt="Spelling Matching Game" />
                </Link>
            </GamesContainer>
        </HomePage>
    );
}

export default Home;