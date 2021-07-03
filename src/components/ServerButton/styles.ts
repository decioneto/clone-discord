import styled from "styled-components";

import { Props } from ".";

export const Button = styled.button<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    height: 48px;
    width: 48px;
    border-radius: 50%;
    margin-bottom: 8px;

    background-color: ${(props) => 
        props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

    cursor: pointer;
    position: relative;

    > img {
        width: 24px;
        height: 24px;
    }

    &::before {
        content: '';
        width: 9px;
        height: 9px;
        
        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);

        background-color: #fff;
        border-radius: 50%;
        display: ${(props) => props.hasNotifications ? 'block' : 'none'}
    }

    &::after {
        content: '${props => props.mentions && props.mentions}';
        display: ${props => props.mentions && props.mentions > 0 ? 'block' : 'none'};

        background-color: var(--notification);
        
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: center;
        font-size: 12px;
        font-weight: bold;
        line-height: 16px;
        color: #fff;
    }

    transition: border-radius .2s, background-color .2s;

    &.active, 
    &:hover {
        border-radius: 16px;
        background-color: ${(props) => props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
    }
`;
