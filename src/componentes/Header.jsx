import NavBar from "./NavBar.jsx";


const Header =({titulo}) =>{

    return(
        <header className="test">
            <h1>{titulo}</h1>
            <NavBar/>
        </header>
    )
}

export default Header