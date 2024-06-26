import React, { useState, useEffect } from 'react';
import { Ball, BallsContainer, GameContainer, WordButton, WordContainer } from './style';

// Helper function to check for collision between two balls
const isColliding = (ball1, ball2) => {
    const dx = ball1.x - ball2.x;
    const dy = ball1.y - ball2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < 100; // Since the ball diameter is 100px
};

function Game2() {
    const [gameStarted, setGameStarted] = useState(false);
    const [ballsPosition, setBallsPosition] = useState([]);

    useEffect(() => {
        if (gameStarted) {
            // Create 10 random positions for balls inside BallsContainer without overlapping
            let initialPositions = [];
            while (initialPositions.length < 5) {
                let x = Math.random() * (800 - 100);
                let y = Math.random() * (500 - 100);
                let newBall = { x, y, vx: Math.random() * 4 - 2, vy: Math.random() * 4 - 2 };

                let overlapping = initialPositions.some(ball => isColliding(ball, newBall));
                if (!overlapping) {
                    initialPositions.push(newBall);
                }
            }

            setBallsPosition(initialPositions);

            // Move balls every 50ms
            const moveBalls = setInterval(() => {
                setBallsPosition(prevPositions => {
                    let newPositions = prevPositions.map(ball => {
                        let newX = ball.x + ball.vx;
                        let newY = ball.y + ball.vy;

                        // Check collision with container boundaries
                        if (newX < 0) {
                            newX = 0;
                            ball.vx = Math.abs(ball.vx); // Reverse x velocity
                        } else if (newX > 800 - 100) {
                            newX = 800 - 100;
                            ball.vx = -Math.abs(ball.vx); // Reverse x velocity
                        }
                        if (newY < 0) {
                            newY = 0;
                            ball.vy = Math.abs(ball.vy); // Reverse y velocity
                        } else if (newY > 500 - 100) {
                            newY = 500 - 100;
                            ball.vy = -Math.abs(ball.vy); // Reverse y velocity
                        }

                        return { ...ball, x: newX, y: newY };
                    });

                    // Handle collisions between balls
                    for (let i = 0; i < newPositions.length; i++) {
                        for (let j = i + 1; j < newPositions.length; j++) {
                            if (isColliding(newPositions[i], newPositions[j])) {
                                // Simple collision response by reversing velocities
                                newPositions[i].vx = -newPositions[i].vx;
                                newPositions[i].vy = -newPositions[i].vy;
                                newPositions[j].vx = -newPositions[j].vx;
                                newPositions[j].vy = -newPositions[j].vy;
                            }
                        }
                    }

                    return newPositions;
                });
            }, 50);

            // Clean up interval when component unmounts or game ends
            return () => clearInterval(moveBalls);
        }
    }, [gameStarted]);

    const startGame = () => {
        setGameStarted(true);
    };

    return (
        <GameContainer>
            <BallsContainer>
                {ballsPosition.map((position, index) => (
                    <Ball key={index} style={{ left: position.x, top: position.y }}>Hello</Ball>
                ))}
            </BallsContainer>

            <WordContainer>
                <WordButton onClick={startGame}>게임 시작</WordButton>
            </WordContainer>
        </GameContainer>
    );
}

export default Game2;
