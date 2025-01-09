import React, { useContext } from 'react';
import { GetDataContext } from './GetDataContext';

const ReturnGetData = () => {
    const { handleGetData } = useContext(GetDataContext);

    return { handleGetData };
}

export default ReturnGetData;
