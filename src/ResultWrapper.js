import React, { useState } from 'react';
import { Result } from './Result';
import { Modal } from './base-components';

export const ResultWrapper = (props) => {
  
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div onClick={() => setShowModal(true)}>
      <Result {...props}/>
      { showModal && 
        <Modal onCancel={() => {
          setShowModal(false);
          console.log('closing modal');
        }}>
            <Result isModal={true} {...props}/>
        </Modal>
      }
    </div>
  );
}
