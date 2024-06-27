import React from 'react'
import { Button } from './style';
import { Modal } from '@mui/material';

function GameOverModal({ onRestart, open, setOpen }) {
    
    return (
        <div>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                
            </Modal>
        </div>
    )
}

export default GameOverModal