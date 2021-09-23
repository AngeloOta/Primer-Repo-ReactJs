import Item from "./Item"
import Productos from "./Productos"

const ItemList =()=>{
    <ul>
        {Productos.map((producto, i)=>{
            return <Item producto={producto}/>
        })}
    </ul>
}
export default ItemList