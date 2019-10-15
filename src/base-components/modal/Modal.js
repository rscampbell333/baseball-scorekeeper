import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export const Modal = ({ title, text, onSubmit, onCancel, submitLabel, cancelLabel, error }) => {
    return createPortal(
        <div className="modal">
            <div className={`modal-box ${error ? 'error' : ''}`}>
                <div className="title">{title}</div>
                <div className="text">{text}</div>
                <div className="buttons">
                    { onCancel && <button className="cancel-button" onClick={onCancel}>{cancelLabel ? cancelLabel : 'Cancel'}</button> }
                    <button className="submit-button" onClick={onSubmit}>{submitLabel ? submitLabel : 'Submit'}</button>
                </div>
            </div>
        </div>,
        document.body
    );
};