import React, { useState } from 'react';
import { Result } from './Result';
import { ComponentModal } from './base-components/modal/ComponentModal';

export const ResultWrapper = (props) => {
  
  const [ showModal, setShowModal ] = useState(false);

  return (
    <div onClick={() => setShowModal(true)}>
      <Result {...props}/>
      { showModal && 
        <ComponentModal>
            <Result isModal={true} {...props}/>
        </ComponentModal>
      }
    </div>
  );
}
