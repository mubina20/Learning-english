import React from 'react';
import { Modal } from '@mui/material';

function GameOverModal({ open, onRestart }) {
    console.log("GameOVER!!!!!!!!")
    return (
        <Modal
            open={open}
            onClose={() => onRestart()}
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div>
                <h2 id="modal-title">Game Over!</h2>
                <button onClick={onRestart}>Try Again</button>
            </div>
        </Modal>
    );
}

export default GameOverModal;
