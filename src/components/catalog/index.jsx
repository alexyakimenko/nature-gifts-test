import { Catalog, CatalogWrapper, Content, Info } from "./Catalog.styled"
import { Container } from "../layout/Container.styled"

const CatalogComponent = () => {
  return (
    <CatalogWrapper>
        <Container>
            <Catalog>
                <Info>
                    gigi
                </Info>
                <Content>
                    hihi
                </Content>
            </Catalog>
        </Container>
    </CatalogWrapper>
  )
}

export default CatalogComponent