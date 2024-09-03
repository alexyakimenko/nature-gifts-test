import styled from "styled-components";

export const FavoritesWrapper = styled.div`
    padding-top: 16px;
    padding-bottom: 32px;

    background-color: #fff;

    border-radius: 0 0 16px 16px;
`

export const Favorites = styled.section`
    h2 {
        font-size: 20px;
        font-weight: bold;
    }
`

export const NoContent = styled.div`
    text-align: center;

    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 16px;

    line-height: 19px;

    margin-top: 36px;


    p {
        max-width: 256px;
        font-size: 14px;
    }

    a {
        display: inline-block;

        background-color: #77A215;

        color: #fff;
        text-decoration: none;
        padding: 7px 48px;

        border-radius: 5px;
    }
`