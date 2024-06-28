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
                    {/* <HomePageTitle style={{width: '990px'}}>단어들 다 외웠지?</HomePageTitle>
                    <HomePageTitle>이제 게임으로 기억력 테스트 한 번 해볼까?</HomePageTitle> */}
                    <HomePageTitle2>
                        단어들 다 외웠지?<br/>
                        이제 게임으로 기억력 테스트 한 번 해볼까?<br/>
                        그럼 Let's go~~~!
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