import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { FormControl, FormControlFocus } from '../utils/forms';


export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    showFocus: boolean;
};

const InputContainer = styled.input<IInput>`
    ${FormControl};
    ${ ({ showFocus }) => showFocus ? FormControlFocus : null }
`;

const Input: FC<IInput> = ({ showFocus = true, ...rest}) => (
    <InputContainer
        {...rest}
        showFocus={showFocus}
    />
);

export default Input;