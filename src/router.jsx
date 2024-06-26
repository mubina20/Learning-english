import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MemoryGame from './components/memoryGame/memoryGame'

function RouterComponent() {
    const location = useLocation()

    return (
        <div>
            <Routes>
                <Route path='/' element={<MemoryGame/>}/>
            </Routes>
        </div>
    )
}

export default RouterComponent
