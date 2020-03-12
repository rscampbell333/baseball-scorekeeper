import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export const ComponentModal = ({ children }) => {
    return createPortal(
        <div className="modal">
            { children }
        </div>,
        document.body
    );
};