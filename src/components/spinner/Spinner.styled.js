import styled, { keyframes } from "styled-components"

import SpinnerSvg from "../../assets/spinner.svg?react"

const spinAnimation = keyframes`
    from {
        fill: var(--second-accent-color);
        transform: scale(1);
    }
    30% {
        fill: var(--main-accent-color);
        transform: scale(0.95);
    }
    to {
        transform: scale(1);
        fill: var(--second-accent-color);
    }
`

export const Spinner = styled(SpinnerSvg)`
    fill: var(--second-accent-color);

    path {
        transform-origin: center;
        animation-name: ${spinAnimation};
        animation-duration: 2s;
        animation-iteration-count: infinite;

        &:nth-child(1) {
            animation-delay: 0ms;
        }
        &:nth-child(2) {
            animation-delay: 150ms;
        }
        &:nth-child(3) {
            animation-delay: 300ms;
        }
        &:nth-child(4) {
            animation-delay: 450ms;
        }
        &:nth-child(5) {
            animation-delay: 600ms;
        }
        &:nth-child(6) {
            animation-delay: 750ms;
        }
        &:nth-child(7) {
            animation-delay: 900ms;
        }
        &:nth-child(8) {
            animation-delay: 1050ms;
        }
    }
`
