import NavBar from "./NavBar.jsx";
import ItemListContainer from "./ItemListContainer.jsx";

const Header =({titulo, subtitulo, edad, id}) =>{

    return(
        <header class="test">
            <h1>{titulo}</h1>
            <NavBar/>
            <ItemListContainer/>
        </header>
    )
}

export default Header