import styled from "styled-components";
import { media } from "styled-bootstrap-grid";
import Background from "styles/images/pattern-bg.png";


export const HeadContainer = styled.div`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: contain;

    height: 28rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    box-sizing: border-box;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.white};
    font-family: ${( {theme }) => theme.fontFamily};
    font-weight: 700;
    font-size: x-large;
`