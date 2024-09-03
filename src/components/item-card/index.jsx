import { useState } from "react"

import { Card, Head, Info, Heart, Price, CartBtn } from "./ItemCard.styled"

const ItemCard = ({data}) => {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <Card>
        <Head $background={data.background}>
            <span style={{
              visibility: data.promo ? "visible" : "hidden"
            }}>{data.promo}</span>
            <Heart 
              $isLiked={isLiked}
              onClick={() => setIsLiked(!isLiked)}
            />
        </Head>
        <Info>
          <h3>{data.title}</h3>
          <p>{data.seller}</p>
          <Price>
            <span id="promo-price">{data.promo_price}</span>
            <span id="price">{data.price}</span>
          </Price>
        </Info>
        <CartBtn>В корзину</CartBtn>
    </Card>
  )
}

export default ItemCard