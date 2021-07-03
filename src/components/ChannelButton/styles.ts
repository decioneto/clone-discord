import { Hashtag } from "styled-icons/heroicons-outline";
import { PersonAdd, Settings } from "styled-icons/material";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    padding: 5px 3px;

    background-color: transparent;
    transition: background-color 0.2s;

    > div {
         display: flex;
         align-items: center;
    }

    > div span {
        color:  var(--senary);
        margin-left: 5px;
    }

    &.active,
    &:hover {
        background-color: var(--quinary);

        > div span {
            color: #fff;
        }

        > div svg {
            opacity: 1
        }
    }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;

export const IviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);
    cursor: pointer;

    transition: color 0.2s, opacity 0.2s;

    margin-right: 5px;

    &:hover {
        color: #fff;
    }

    opacity: 0;
`;

export const SettignsIcon = styled(Settings)`
width: 16px;
height: 16px;

color: var(--symbol);
cursor: pointer;

transition: color 0.2s, opacity 0.2s;

opacity: 0;

&:hover {
    color: #fff;
}
`;