/*-------- Sin Usar React ------------*/
/* const element = document.createElement("h1");
element.innerText = "Hellooo, Platzi Badges";

const container = document.getElementById("app");
container.appendChild(element); */

/*---------Usando Reat  --------------*/
import React from "react";
import ReactDOM from "react-dom";

//const element = <h1>Hello, badges from REACT</h1>; //JSX
let name = "Andres";
const element = <h1>Hola soy {false}</h1>;
/* const element = React.createElement(
  "a",
  { class: "Hola", href: "https://google.com" },
  "Ir a google"
); */
const container = document.getElementById("app");

ReactDOM.render(element, container);
