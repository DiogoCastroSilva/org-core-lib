import React, { FC } from 'react';

import Input, { IInput } from '../Input/Input';


export interface ICheckbox extends IInput {
};

const Checkbox: FC<ICheckbox> = ({ ...rest }) => (
    <Input
        {...rest}
        showFocus={false}
        type='checkbox'
    />
);

export default Checkbox;