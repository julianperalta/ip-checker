import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const SearchContainer = styled.form`
    width: 100%;
    display: flex;

    margin-bottom: 1rem;

    & > * {
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fontFamily};

        padding: 1rem;
        border: none;
    }

    input {
        width: 85%;
    }

    button {
        width: 15%;
    }

    ${media.md`
        width: 35%;
    `}
`;

export const SearchInput = styled.input`
    ${({ theme }) => `
        background-color: ${theme.white};
        color: ${theme.darkGray};

        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    `}
`;

export const SearchButton = styled.button`
    ${({ theme }) => `
        background-color: ${theme.veryDarkGray};
        color: ${theme.white};

        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    `}
`