import React from 'react';
import { FormRow, FormSection } from './Form.style';

const FormSectionGlobal = ({ children, legends }) => {
    return (
        <FormSection>
            <legend>{legends}</legend>

            {/* // dividir a formRow aqui */}
            <FormRow>
                {children}
            </FormRow>
        </FormSection>
    );
}

export default FormSectionGlobal;
