import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';


export interface IToogle extends InputHTMLAttributes<HTMLInputElement> {
}

const ToogleContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const ToogleInput = styled.input`
    display: none;

    :checked + .toogle-label::before {
        background-color: #36B37E;
    }

    :checked + .toogle-label::after {
        left: 24px;
    }

    :disabled + .toogle-label:before {
        background-color: #F4F5F7;
    }

    :disabled:checked + .toogle-label:before {
        background-color: #ABF5D1;
    }
`;

const ToogleLabel = styled.label`
    display: block;
    width: 48px;
    height: 24px;
    color: transparent;
    user-select: none;
    text-indent: -150%;
    clip: rect(0 0 0 0);

    ::before,
    ::after {
        content: '';
        display: block;
        position: absolute;
        cursor: pointer;
    }

    ::before {
        width: 100%;
        height: 100%;
        background-color: #DFE1E6;
        border-radius: 9999em;
        -webkit-transition: background-color 0.25s ease;
        transition: background-color 0.25s ease;
    }

    ::after {
        top: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.45);
        -webkit-transition: left 0.25s ease;
        transition: left 0.25s ease;
    }
`;


const Toogle: FC<IToogle> = ({...rest}) => {
    return (
        <ToogleContainer>
            <ToogleInput
                type='checkbox'
                id='toogle-input'
                {...rest}
            />
            <ToogleLabel
                className='toogle-label'
                htmlFor='toogle-input'
            />
        </ToogleContainer>
    );
}

export default Toogle;