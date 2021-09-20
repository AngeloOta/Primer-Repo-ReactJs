import { useState } from "react/cjs/react.development"

const ItemCount = ({stock, initial, onAdd})=>{
    const [contador, setContador] = useState(0)

    const aumentar = ()=>{
        let agregar = contador + 1
        if ((agregar<stock) && (agregar>=1)){
        setContador(agregar)
        }
    }
    const disminuir = ()=>{
        let sacar = contador - 1
        if((sacar>=0) && (sacar<=stock)){
        setContador(sacar)
        }
    }

    if ((contador <= stock) || (contador >initial)){
        return(
            <div>
                <p>Servicio: {contador}</p>
                <button onClick={disminuir}>-</button>
                <button onClick={aumentar}>+</button>
                <button onClick={()=>{setContador(0)}}>cancelar</button>
                <button onClick={onAdd=()=>{}}> Comprar </button>
            </div>
        )
    }
}

export default ItemCount