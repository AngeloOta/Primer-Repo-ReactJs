
const Item = ({producto}) => {
    <div className="card">
        <h1>{producto.nombre}: {producto.precio}</h1>
    </div>
}

export default Item