import React from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

export const Modal = ({ children, 
                        onSubmit, 
                        onCancel = () => {console.log('cancel')}, 
                        submitLabel = 'Submit', 
                        cancelLabel = 'Cancel', 
                        error, 
                        showCancelButton = false, 
                        showSubmitButton = false 
                    }) => {
    return createPortal(
        <div className="modal" onClick={(e) => {
            onCancel();
            e.stopPropagation();

        }}>
            <div className={`modal-box ${error ? 'error' : ''}`}>
                { children }
                <div className="buttons">
                    { showCancelButton && <button className="cancel-button" onClick={onCancel}>{cancelLabel ? cancelLabel : 'Cancel'}</button> }
                    { showSubmitButton && <button className="submit-button" onClick={onSubmit}>{submitLabel ? submitLabel : 'Submit'}</button> }
                </div>
            </div>
        </div>,
        document.body
    );
};