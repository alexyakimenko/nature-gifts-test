import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Background = styled.div`
    width: 109px;
    aspect-ratio: 1;

    border-radius: 14px;
    background: url(${props => props.$image}) center / cover;
`

export const Title = styled.h3`
    color: var(--main-text-color);
    font-size: 12px;
    font-weight: bold;

    margin-top: 4px;

    text-align: center;

    line-height: 16px;
`