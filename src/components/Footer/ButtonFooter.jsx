import React from 'react';

const ButtonFooter = ({ children }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto', borderRadius: '50%', backgroundColor: '#f9f9f9', fontSize: '50px' }}>
            {children}
        </div>
    );
}

export default ButtonFooter;
