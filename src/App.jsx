import Header from "./componentes/Header.jsx";
import ItemListContainer from "./componentes/ItemListContainer.jsx";


const App = () => {
       
    return (
        <>
        <Header titulo= "MI E-Commerce" subtitulo="Tu mejor amigo"/>
        <div>
            <ItemListContainer />
        </div>
        </>
    )
}
export default App