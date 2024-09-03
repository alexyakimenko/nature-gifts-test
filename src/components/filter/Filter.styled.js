import styled from "styled-components";


export const FilterWrapper = styled.div`
    margin-top: 8px;

    padding-top: 16px;
    padding-bottom: 16px;

    background-color: var(--bg-section-color);

    border-radius: 16px 16px 0 0;
`

export const Filter = styled.section`
    display: flex;
    gap: 4px;
    flex-wrap: wrap;

    height: 28px;

    margin-bottom: 8px;
`

export const SelectedFilters = styled.div`

`

export const FilterItem = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    border-radius: 10px;
    border: none;
    height: 100%;
    padding: 0 8px;
    background-color: var(--main-accent-color);

    color: var(--bg-section-color);
    font-size: 12px;
    font-weight: bold;
`

export const Sort = styled.button`
    height: 100%;
    padding: 0 8px;
    border-radius: 10px;
    border: none;

    background-color: var(--bg-form-color);
`

export const FilterBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
    
    height: 100%;

    border-radius: 10px;
    border: none;
    padding: 0 8px;
    background-color: var(--bg-form-color);

    color: var(--main-accent-color);
    font-size: 12px;
    font-weight: bold;
`

export const Result = styled.div`
    text-align: center;
`