import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MemoryGame from './components/memoryGame/memoryGame'
import Game2 from './components/game2/game2'
import Game3 from './components/game3/game3'
import Game4 from './components/game4/game4'

function RouterComponent() {
    const location = useLocation()

    return (
        <div>
            <Routes>
                <Route path='/' element={<MemoryGame/>}/>
                <Route path='/game2' element={<Game2/>}/>
                <Route path='/game3' element={<Game3/>}/>
                <Route path='/game4' element={<Game4/>}/>
            </Routes>
        </div>
    )
}

export default RouterComponent
