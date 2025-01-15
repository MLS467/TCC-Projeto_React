import React, { useEffect } from 'react';
import UseAuth from '../../Hook/UseAuth';
import { useNavigate } from 'react-router-dom';

const ProtectedLayout = ({ children }) => {
    const context = UseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!context.token) {
            navigate('/login');
        }
    }, [context.token, navigate]);

    if (!context.token) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
}

export default ProtectedLayout;
