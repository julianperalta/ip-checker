import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    background-color: ${({ theme }) => theme.white};
    border-radius: 15px;

    justify-content: center;
    align-items: center;

    padding: 1.5rem;
    margin-bottom: -12rem;

    z-index: 999;
`;

export const SingleDataContainer = styled.div`
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }
    
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`

export const Label = styled.label`
    text-transform: uppercase;

    color: ${({ theme }) => theme.darkGray};
    font-size: large;
    font-weight: 500;
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.veryDarkGray};
    font-size: x-large;
    font-weight: 700;
`