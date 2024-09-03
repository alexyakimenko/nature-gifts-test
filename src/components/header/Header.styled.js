import styled from "styled-components";

export const HeaderWrapper = styled.div`
    padding-top: 16px;
    padding-bottom: 6px;

    background-color: var(--bg-section-color);
`

export const Header = styled.header``

export const Masthead = styled.header`
    display: flex;

    justify-content: space-between;

    align-items: center;

    img {
        width: 181px;
    }

`

export const ProfileWrapper = styled.a`
    display: flex;

    align-items: center;

    gap: 5px;

    text-decoration: none;

    p {
        color: var(--second-accent-color);

        font-size: 14px;
        font-weight: 700;
    }
`

export const SearchBar = styled.div`
    display: flex;

    align-items: center;

    height: 36px;

    margin-top: 8px;

    & > a {
        height: 100%;
        & svg {
            height: 100%;

            margin-right: 20px;
        }
    }
`

export const SearchWrapper = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    input {
        display: inline-block;

        width: 100%;
        height: 100%;

        border: 1px var(--main-accent-color) solid;
        border-radius: 5px;


        padding-left: 40px;

        &:focus {
            outline: 1px var(--second-accent-color) solid;   
        }
    }

    svg {
        position: absolute;

        height: 100%;
        aspect-ratio: 1;

        margin-left: 12px;
    }
`