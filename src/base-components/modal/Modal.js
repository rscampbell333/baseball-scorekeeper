import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export const Modal = ({ title, text, onSubmit, onCancel }) => {
    return createPortal(
        <div className="modal">
            <div className="modal-box">
                <div className="title">{title}</div>
                <div className="text">{text}</div>
                <div className="buttons">
                    <button className="cancel-button" onClick={onCancel}>No</button>
                    <button className="submit-button" onClick={onSubmit}>Yes</button>
                </div>
            </div>
        </div>,
        document.body
    );
};