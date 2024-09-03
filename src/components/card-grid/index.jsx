import { Grid } from "./CardGrid.styled"
import ItemCard from "../item-card" 

const CardGrid = ({data}) => {
  return (
    <Grid>
        {
            data.map(item => (
            <ItemCard key={item.id} data={item}/>
            ))
        }
    </Grid>
  )
}

export default CardGrid