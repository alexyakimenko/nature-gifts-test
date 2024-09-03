import { Catalog, CatalogWrapper, Content, Info } from "./Catalog.styled"
import { Container } from "../layout/Container.styled"
import CategoryCard from "../category-card"

import data from "./data.json"

const CatalogComponent = () => {
  return (
    <CatalogWrapper>
        <Container>
            <Catalog>
                <Info>
                    <p>Средства для лица</p>
                    <h2>Маски и скрабы</h2>
                </Info>
                <Content>
                    {
                        data.map(item => (
                            <CategoryCard key={item.id} data={item}/>
                        ))
                    }
                </Content>
            </Catalog>
        </Container>
    </CatalogWrapper>
  )
}

export default CatalogComponent