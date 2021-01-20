import React, { FC, LabelHTMLAttributes } from 'react';
import styled from 'styled-components';


export interface ILabel extends LabelHTMLAttributes<HTMLLabelElement> {
};

const LabelContainer = styled.label`
    display: inline-block;
    margin-bottom: .5rem;
`;

const Label: FC<ILabel> = ({ children, ...rest}) => (
    <LabelContainer {...rest}>
        {children}
    </LabelContainer>
);

export default Label;