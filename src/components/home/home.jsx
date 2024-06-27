import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Link to={'/memory-game'}><div>Memory Game</div></Link>
            <Link to={'/image-matching-game'}><div>Image Matching Game</div></Link>
            <Link to={'/spelling-matching-game'}><div>Spelling Matching Game</div></Link>
        </div>
    )
}

export default Home