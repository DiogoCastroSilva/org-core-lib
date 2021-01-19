import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
};

const ButtonContainer = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    overflow: visible;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: default;
    cursor: pointer;
`;


const Button: FC<IButton> = ({ children, role='button', ...rest}) => (
    <ButtonContainer
        role={role}
        {...rest}
    >
        {children}
    </ButtonContainer>
);

export default Button;