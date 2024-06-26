import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MemoryGame from './components/memoryGame/memoryGame'
import Game2 from './components/game2/game2'

function RouterComponent() {
    const location = useLocation()

    return (
        <div>
            <Routes>
                <Route path='/' element={<MemoryGame/>}/>
                <Route path='/game2' element={<Game2/>}/>
            </Routes>
        </div>
    )
}

export default RouterComponent
