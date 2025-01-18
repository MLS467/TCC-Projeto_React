import React from 'react';
import Modal from '../../components/Modal/Modal';

const Teste = () => {
    const { handleModal, handleVisible } = Modal();

    return (
        <div>
            {handleModal()}
            <h1>Dashboard</h1>
            <button onClick={handleVisible}>Modal</button>
        </div>
    );
}

export default Teste;
