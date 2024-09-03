import styled from "styled-components";

export const CatalogWrapper = styled.div`
    background-color: var(--bg-section-color);

    padding: 14px 0;

    border-radius: 0 0 16px 16px;
`

export const Catalog = styled.section``

export const Info = styled.div`
    p {
        color: var(--secondary-nav-color);
        font-size: 14px;
        font-weight: 600;
    }

    h2 {
        color: var(--main-text-color);
        font-size: 20px;
        font-weight: bold;

        margin: 16px 0;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;

    gap: 16px 4px;
`