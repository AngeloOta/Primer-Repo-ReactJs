import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productosIniciales = [
  {nombre:"prod1", precio:45, id:1},
  {nombre:"prod2", precio:45, id:2}
]

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])

  useEffect(()=>{
    
    const pedido = new Promise((resolver)=>{
      setTimeout(()=>{
        resolver(productosIniciales)
      }, 2000)
    })
    pedido
      .then((productos)=>{
        setProductos(productos)
      })
  })

  if (productos.length > 0){
    return( 
      <>
      <ItemList productos={productos}/>
      <ItemCount stock={10} initial={1} onAdd={()=>{}} />
      </>
    )
  } else {
    return (
      <>
        <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">cargando...</span>
        </div>
      </>  
    )
  }
  
  /*return(
    <>
       <p>...</p>
       <ItemCount stock={10} initial={1} onAdd={()=>{}} />
    </>
    );*/
}

export default ItemListContainer