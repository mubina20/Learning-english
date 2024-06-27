import React from 'react';
import { Modal } from '@mui/material';

function WinnerModal({ open, onRestart }) {
    console.log("WINNER!!!!!!!!!!!!")
    return (
        <Modal
            open={open}
            onClose={() => onRestart()}
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div>
                <h2 id="modal-title">Congratulations! You Won!</h2>
                <button onClick={onRestart}>Play Again</button>
            </div>
        </Modal>
    );
}

export default WinnerModal;
