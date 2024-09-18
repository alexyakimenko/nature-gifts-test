import { useState } from "react"

import { Card, Head, Info, Heart, Price, CartBtn } from "./ItemCard.styled"
import useNatureGiftsService from "../../services/NatureGiftsService"

const ItemCard = (props) => {
  const {addFavorite, deleteFavorite} = useNatureGiftsService()

  const {data} = props
  const [isLiked, setIsLiked] = useState(props.isLiked ?? false)
  

  const handleAddFavorite = () => {
    setIsLiked(!isLiked)

    if(isLiked) {
      deleteFavorite(data.id)
    } else {
      addFavorite(data.id)
    }
    
  }

  return (
    <Card>
        <Head $background={data.image}>
            <span style={{
              visibility: data.labels[0] ? "visible" : "hidden"
            }}>{data.labels[0]?.value}</span>
            <Heart 
              $isLiked={isLiked}
              onClick={handleAddFavorite}
            />
        </Head>
        <Info>
          <h3>{data.name.length > 32 ? data.name.substring(0, 32) + "..." : data.name}</h3>
          <p>{data?.seller}</p>
          <Price>
            <span id="promo-price">{data.price_html}</span>
            <span id="price">{data.compare_price_html}</span>
          </Price>
        </Info>
        <CartBtn>В корзину</CartBtn>
    </Card>
  )
}

export default ItemCard