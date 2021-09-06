import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"



//ReactDom.render(a,b)
//El valor b es asociativa a una etiqueta de mi <html /dom>
ReactDOM.render(<App/>, document.getElementById("root")); //siempre tiene que quedar cerrada la etiqueta <ejemplo/>;

//.render es un archivo de DOM, por eso es quenecesito importar a ReactDom
