async function obtenerProductos() {
    const conexion = await fetch("http://localhost:3001/prodcutos");
    console.log(conexion);

    const conexionConvertida = conexion.json();
    console.log(conexionConvertida);

    return conexionConvertida;
}

async function enviarProducto(nombre, precio, url) {
    const conexion = await fetch("http://localhost:3001/prodcutos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            url: url
        })
    });
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexionAPI = {
    obtenerProductos, enviarProducto
};