import CardGrid from "../card-grid"
import { Container } from "../layout/Container.styled"
import Spinner from "../spinner"
import { Filter, FilterBtn, FilterItem, FilterWrapper, Result, SelectedFilters, Sort } from "./Filter.styled"

import SortSvg from "../../assets/sort.svg?react"
import FilterSvg from "../../assets/filter.svg?react"
import CrossSvg from "../../assets/cross.svg?react"

import useNatureGiftsService from "../../services/NatureGiftsService"
import { useEffect, useState } from "react"

const FilterComponent = () => {
    const {loading, error, getCategoryProducts} = useNatureGiftsService()
    const [data, setData] = useState({})

    useEffect(() => {
        getCategoryProducts(78).then(res => setData(res.data))
    }, [])
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
                {loading ? <Spinner /> : <CardGrid data={data} />}
            </Result>
        </Container>
    </FilterWrapper>
  )
}

export default FilterComponent