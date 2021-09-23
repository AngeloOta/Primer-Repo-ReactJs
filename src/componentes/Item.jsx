
const Item = ({producto}) => {
    <div className="card">
        <h1 key={producto.nombre}> {producto.nombre}</h1>
    </div>
}

export default Item