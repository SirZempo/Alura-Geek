import { conexionAPI } from "./conexionAPI.js";
import { render } from "./mostrarProductos.js";

const formulario = document.querySelector("[data-formulario]");

async function crearProducto(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const url = document.querySelector("[data-url]").value;

    try {
        await conexionAPI.enviarProducto(nombre, precio, url);
    } catch (error) {
        console.log(error);
    }
}

function limpiarForm() {
    document.querySelector("[data-nombre]").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-url]").value = "";
}

formulario.addEventListener("submit", evento =>{
    crearProducto(evento);
    render();
});

formulario.addEventListener("reset", evento=>{
    evento.preventDefault();
    limpiarForm();
});