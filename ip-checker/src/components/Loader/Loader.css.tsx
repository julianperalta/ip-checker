import styled from "styled-components";

export const LoaderContainer = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`;

export const EmbeddedLoader = styled.span`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid ${({ theme }) => theme.veryDarkGray};
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`;