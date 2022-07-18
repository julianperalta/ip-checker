import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

export const InfoContainer = styled.div`
    width: 100%;
    max-width: 29rem;
    box-sizing: border-box;

    padding: 1rem;
    padding-top: 0;
    position: absolute;
    top: 11.5rem;

    z-index: 999;

    ${media.md`
        width: 29rem;
    `}

    ${media.lg`
        width: 70%;
        max-width: 58rem;
    `}
`;

interface InfoCardProps {
    noGrid: boolean;
}

export const InfoCard = styled.div<InfoCardProps> `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 0.5rem;
    box-sizing: border-box;

    background-color: ${({ theme }) => theme.white};
    border-radius: 15px;

    justify-content: center;
    align-items: center;

    padding: 1.5rem;

    ${props => props.noGrid && `
        display: flex;
        height: 16.5rem;
    `}

    ${({ noGrid }) => media.lg`
        padding: 2rem 1.5rem;

        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 2rem;

        height: 9.5rem;

        ${noGrid && `
            display: flex;
        `}
    `}
`;

export const SingleDataContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    justify-content: center;
    align-items: center;

    ${media.lg`
        &:after {
            ${({ theme }: any) => `
                content: "";
                position: absolute;
                border-left: 1px solid ${theme.darkGray};
                top: 10%;
                right: -10px;
                height: 80%;
            `}
        }

        &:last-child:after {
            display: none;
        }

        margin: 0;
        padding: 0 1rem;

        justify-content: flex-start;
        align-items: flex-start;
    `}
`;

export const Label = styled.label`
    text-transform: uppercase;

    color: ${({ theme }) => theme.darkGray};
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;

    margin-bottom: 0.5rem;
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.veryDarkGray};
    font-size: x-large;
    font-weight: 700;

    text-align: center;

    ${media.lg`
        text-align: left;
    `}
`