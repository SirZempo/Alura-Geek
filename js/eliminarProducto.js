import { conexionAPI } from "./conexionAPI.js";

async function borrarProducto(evento){
    evento.preventDefault();

    const idProducto = document.querySelector(".boton-eliminiar");
    idProducto.addEventListener("click", alert("hola"));
}