import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hook/UseAuth';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ProtectedLayout = ({ children }) => {
    const { user } = UseAuth();
    const navigate = useNavigate();
    const [isRedirecting, setIsRedirecting] = useState(true);


    useEffect(() => {

        if (!user) {
            navigate('/login');
        }

        if (!user?.token) {
            navigate('/login');
        }


        setIsRedirecting(false);
    }, [user]);


    if (isRedirecting) {
        return <Spinner
            $widthSpinner="200px"
            $heightSpinner="200px"
            $alignItems="flex-start"
            $marginTop="100px"
        />;
    }

    return (
        <>
            {children}
        </>
    );
};

export default ProtectedLayout;
