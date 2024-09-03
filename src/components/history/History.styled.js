import styled from "styled-components";

export const HistoryWrapper = styled.div`
    margin-top: 8px;

    padding-top: 16px;
    padding-bottom: 16px;

    background-color: var(--bg-section-color);

    border-radius: 16px 16px 0 0;
`

export const History = styled.section`
    h2 {
        font-size: 20px;
        font-weight: bold;
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 5px;

    margin-top: 15px;
`

