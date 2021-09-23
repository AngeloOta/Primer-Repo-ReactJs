import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const productosIniciales = [
  {nombre:"prod1", precio:45, id:1, stock:5},
  {nombre:"prod2", precio:45, id:2, stock:5}
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
      .then((resultado)=>{
        setProductos(resultado)
        console.log(resultado)
      })
  }, [])

  if (productos.length > 0){//como es cero según el array vacio en mi estado, va a arrancar cargando la página. 
    return( 
      <>
      <ItemList setProductos={setProductos}/>
      <ItemCount stock={10} initial={1} onAdd={()=>{}} />
      </>
    )
  } else {
    return (
        <div className="spinner-border text-warning" role="status">
            <span className ="visually-hidden">cargando...</span>
        </div>
    )
  }
  

}

export default ItemListContainer
