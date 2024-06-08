import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

function crearProducto(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url = document.querySelector("[data-url]").value;

    conexionAPI.enviarProducto(nombre, precio, url);
}

formulario.addEventListener("submit", evento =>{
    crearProducto(evento);
});