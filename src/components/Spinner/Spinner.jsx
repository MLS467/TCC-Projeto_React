import React from 'react';
import SpinnerImg from '../../assets/img/spinner.svg';
import { SpinnerWrapper } from './Spinner.Style';


const Spinner = ({ marginTop, alignItems, widthSpinner, heightSpinner }) => {
    return (
        <SpinnerWrapper $marginTop={marginTop} $alignItems={alignItems} $widthSpinner={widthSpinner} $heightSpinner={heightSpinner}>
            <img src={SpinnerImg} alt="spinner" />
        </SpinnerWrapper>
    );
}

export default Spinner;
