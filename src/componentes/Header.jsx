import NavBar from "./NavBar.jsx";


const Header =({titulo}) =>{

    return(
        <header class="test">
            <h1>{titulo}</h1>
            <NavBar/>
        </header>
    )
}

export default Header