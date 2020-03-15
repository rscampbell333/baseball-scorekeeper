import React from 'react';
import { Modal } from './Modal'
import './Modal.css';

export const TextModal = ({ title, text, ...props }) => (
  <Modal {...props}>
    <div className="title">{title}</div>
    <div className="text">{text}</div>
  </Modal>
);