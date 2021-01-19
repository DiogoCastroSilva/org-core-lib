import React, { FC, isValidElement, OptionHTMLAttributes, ReactNode, SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

import { FormControl } from '../utils/forms';

interface ISelectContainer extends SelectHTMLAttributes<HTMLSelectElement> {
    error?: boolean;
}

export interface IOptions extends OptionHTMLAttributes<HTMLOptionElement> {
    label: string;
}

export interface ISelect extends ISelectContainer {
    options: Array<IOptions> | ReactNode
};

const SelectContainer = styled.select<ISelectContainer>`
    ${FormControl};
    cursor: pointer;
    border: ${ ({error}) => error ? '1px solid red' : '1px solid #ced4da'};
    font: inherit;
    margin: 0;      
    & option {
        
    }
`;

const Select: FC<ISelect> = ({ error, options, ...rest }) => {

    const Options = options ? isValidElement(options) ?
        (options) :
        (options as Array<IOptions>).map(({label, ...rest}) => (
            <option {...rest} key={rest.value as string}>{label}</option>
        )) :
        null;

    return (
        <SelectContainer error={error} {...rest}>
            {Options}
        </SelectContainer>
    )
};

export default Select;