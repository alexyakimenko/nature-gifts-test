import styled from "styled-components";
import HeartSvg from "../../../assets/card/heart.svg?react"
import bg from "../../../assets/card/background1.png"

export const Card = styled.div`
    width: 165px;
    height: 318px;

    line-break: 16px;
`

export const Head = styled.div`
    width: 100%;
    height: 194px;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
    padding: 11px;
    background-image: url(${props => props.$background});

    border-radius: 6px 6px 0 0;

    span {
        padding: 4px 6px;

        font-size: 12px;

        border: 1px var(--main-accent-color) solid;
        border-radius: 5px;

        color: var(--second-accent-color);
        background-color: var(--bg-section-color);
    }
`

export const Heart = styled(HeartSvg)`

    #inner-heart {
        fill: ${props => props.$isLiked ? "var(--second-accent-color)" : "var(--bg-section-color)"};
    }

    #stroke {
        fill: ${props => props.$isLiked ? "var(--second-accent-color)" : "var(--main-accent-color)"};
    }
`

export const Info = styled.div`
    margin-top: 4px;

    text-align: center;
    
    h3 {
        color: var(--third-accent-color);
        font-size: 12px;
        font-weight: bold;
    }

    p {
        margin-top: 4px;

        color: var(--inactive-color);
        font-size: 12px;
    }
`

export const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 5px;

    margin-top: 4px;

    #promo-price {
        color: var(--second-accent-color);
        font-weight: bold;
    }

    #price {
        color: var(--inactive-color);
        font-size: 12px;
        text-decoration: line-through;
    }
`

export const CartBtn = styled.button`
    width: 100%;

    background-color: #77A215;
    color: white;
    cursor: pointer;

    border: none;
    border-radius: 6px;

    margin-top: 4px;
    padding: 7px 48px;
`