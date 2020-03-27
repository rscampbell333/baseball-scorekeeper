import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import { ThemeContext } from '../ThemeContext';

export const Modal = ({ children, 
                        onSubmit, 
                        onCancel = () => {console.log('cancel')}, 
                        submitLabel = 'Submit', 
                        cancelLabel = 'Cancel', 
                        error, 
                        showCancelButton = false, 
                        showSubmitButton = false 
                    }) => {
    const { theme } = useContext(ThemeContext) || { theme: 'light' };
    
    return createPortal(
        <div className={`modal ${theme}`} onClick={(e) => {
            onCancel();
            e.stopPropagation();

        }}>
            <div className={`modal-box ${error ? 'error' : ''}`} onClick={(e) => e.stopPropagation()}>
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