import React, { FC, ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';


type ModalSize = {
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
};

export interface IModal extends ModalSize {
    children: ReactNode;
    onBackdropClick: (e: MouseEvent) => void;
};

const BackdropContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const ModalContainer = styled.div<ModalSize>`
    position: relative;
    background: white;
    border-radius: 2px;
    padding: 15px;
    min-width: ${ ({ minWidth }) => minWidth };
    min-height: ${ ({ minHeight }) => minHeight };
    max-width: ${ ({ maxWidth }) => maxWidth };
    max-height: ${ ({ maxHeight }) => maxHeight };
    z-index: 10;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const Modal: FC<IModal> = ({
    children,
    maxWidth = '320px',
    maxHeight = '600px',
    minWidth = '320px',
    minHeight = '600px',
    onBackdropClick
}) => (
    <BackdropContainer
        role='backdrop'
        onClick={onBackdropClick}
    >
        <ModalContainer
            maxHeight={maxHeight}
            minHeight={minHeight}
            maxWidth={maxWidth}
            minWidth={minWidth}
        >
            {children}
        </ModalContainer>
    </BackdropContainer>
);

export default Modal;