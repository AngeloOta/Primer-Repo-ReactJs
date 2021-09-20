import Item from "./Item"

const ItemList =({productos})=>{
    <ul>
        {productos.map((producto, i)=>{
            return <Item producto={producto}/>
        })}
    </ul>
}
export default ItemList