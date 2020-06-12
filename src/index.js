/*-------- Sin Usar React ------------*/
/* const element = document.createElement("h1");
element.innerText = "Hellooo, Platzi Badges";

const container = document.getElementById("app");
container.appendChild(element); */

/*---------Usando Reat  --------------*/
import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./components/styles/global.css";

import App from "./components/App";

//const element = <h1>Hello, badges from REACT</h1>; //JSX
let name = "Andres";
const element = <h1>Hola soy {name}</h1>;
/* const element = React.createElement(
  "a",
  { class: "Hola", href: "https://google.com" },
  "Ir a google"
); */
const container = document.getElementById("app");

ReactDOM.render(element, container);
ReactDOM.render(<App />, container);
