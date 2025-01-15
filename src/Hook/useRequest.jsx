import React, { useContext } from 'react';
import { ChildRequestContext } from '../Context/HttpRequest/ChildRequestContext';

const UseRequest = () => {
    const context = useContext(ChildRequestContext);

    return context;
}

export default UseRequest;
