import React, { AnchorHTMLAttributes, FC, FormEvent, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';


const TabContainer = styled.a<ITabContainer>`
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    height: 1.5em;
    padding: 0 8px;
    width: 50px;
    background-color: transparent;
    text-align: center;
    position: relative;
    border-bottom: ${ ({ value, index }) => value === index ? '2px solid blue' : null }
`;

interface ITabContainer extends AnchorHTMLAttributes<HTMLElement> {
    value: number;
    index: number;
}

export interface ITab extends ITabContainer  {
    children: ReactNode;
    onClickHandler?: (e: FormEvent, index: number) => void;
}

export const Tab: FC<ITab> = ({ children, index, value, onClickHandler, ...rest }) => (
    <TabContainer
        role='tab'
        data-togle='tab'
        aria-posinset={index}
        value={value}
        index={index}
        onClick={(e: FormEvent) => onClickHandler ? onClickHandler(e, index) : null}
        {...rest}
    >
        {children}
    </TabContainer>
);


export interface ITabs {
    children: ReactNode[];
    onchange: (e: FormEvent, index: number) => void;
};

const TabsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-shrink: 0;
    flex-grow: 1;
    border-bottom: 1px solid lightgray;
    white-space: nowrap;
    overflow: auto;
`;

const Tabs: FC<ITabs> = ({ children: childrenProps, onchange }) => {

    // Needs to add the onChange event to the child component
    const children = React.Children.map(childrenProps, (child) => {
        if (!React.isValidElement(child)) {
            return null;
        }

        return React.cloneElement(child, { onClickHandler: onchange });
    });


    return (
        <TabsContainer>
            {children}
        </TabsContainer>
    );
};

export default Tabs;