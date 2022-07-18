import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const SearchContainer = styled.form`
    width: 100%;
    max-width: 27.5rem;
    display: flex;

    margin-bottom: 1rem;

    & > * {
        font-family: ${({ theme }) => theme.fontFamily};
        border: none;
    }

    input {
        padding: 1.25rem;
        width: 80%;
        
        font-size: 16px;


        ${media.md`
            width: 85%;
        `}
    }

    button {
        padding: 1rem;
        width: 20%;

        font-size: 1rem;

        ${media.md`
            width: 15%;
        `}
    }

    ${media.md`
        width: 27.5rem;
    `}
`;

export const SearchInput = styled.input`
    ${({ theme }) => `
        background-color: ${theme.white};
        color: ${theme.darkGray};

        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
    `}
`;

export const SearchButton = styled.button`
    ${({ theme }) => `
        background-color: ${theme.veryDarkGray};
        color: ${theme.white};

        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
    `}
`