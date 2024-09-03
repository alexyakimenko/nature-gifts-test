import { Background, Title, Wrapper } from "./CategoryCard.styled"

const CategoryCard = ({data: {background, title}}) => {
  return (
    <Wrapper>
        <Background $image={background}></Background>
        <Title>{title}</Title>
    </Wrapper>
  )
}

export default CategoryCard 