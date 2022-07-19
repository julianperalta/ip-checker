import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const SearchBoxForm = styled.form`
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

        &:hover {
            cursor: pointer;
        }
    `}

`;

export const SearchButton = styled.button`
    ${({ theme }) => `
        background-color: ${theme.veryDarkGray};
        color: ${theme.white};

        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
    
        &:hover {
            cursor: pointer;
            background-color: ${theme.veryDarkGrayHover};
        }

        &:active {
            filter: brightness(85%);
        }
    `}
`;

export const ErrorContainer = styled.div`
    position: relative;
    width: 15rem;

    z-index: 1000;
`;

export const InputError = styled.span`
    top: 4.5rem;
    left: 2rem;
    background-color: ${({ theme }) => theme.white};

    height: 1rem;
    padding: 1rem;
    border-radius: 5px;

    display: flex;
    align-items: center;

    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.60);

    &:before {
        content: "";
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        position: absolute;
        background-color: ${({ theme }) => theme.white};
        z-index: 100;
        top: -5px;
    }
`;