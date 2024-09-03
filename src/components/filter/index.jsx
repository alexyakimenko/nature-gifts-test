import CardGrid from "../card-grid"
import { Container } from "../layout/Container.styled"
import Spinner from "../spinner"
import { Filter, FilterBtn, FilterItem, FilterWrapper, Result, SelectedFilters, Sort } from "./Filter.styled"

import SortSvg from "../../assets/sort.svg?react"
import FilterSvg from "../../assets/filter.svg?react"
import CrossSvg from "../../assets/cross.svg?react"

import data from "./data.json"

const FilterComponent = () => {
  return (
    <FilterWrapper>
        <Container>
            <Filter>
                <Sort>
                    <SortSvg />
                </Sort>
                <FilterBtn>
                    <FilterSvg /> Фильтры
                </FilterBtn>
                <SelectedFilters>
                    <FilterItem>
                       Категория: Маски и скрабы <CrossSvg /> 
                    </FilterItem>
                </SelectedFilters>
            </Filter>
            <Result>
                <CardGrid data={data} />
                <Spinner />
            </Result>
        </Container>
    </FilterWrapper>
  )
}

export default FilterComponent