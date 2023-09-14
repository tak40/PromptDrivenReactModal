import React, { useState } from 'react';
import './Modal.css';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpen}>Open Modal</button>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button aria-label="Close modal" onClick={handleClose}>&times;</button>
                        <p>This is the modal content.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
