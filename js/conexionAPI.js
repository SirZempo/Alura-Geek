async function obtenerProductos() {
    const conexion = await fetch("http://localhost:3001/prodcutos");
    console.log(conexion);

    const conexionConvertida = await conexion.json();
    console.log(conexionConvertida);

    return conexionConvertida;
}

async function enviarProducto(nombre, precio, url) {
    try {
        const conexion = await fetch("http://localhost:3001/prodcutos", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                nombre: nombre,
                precio: precio,
                url: url
            })
        });
        const conexionConvertida = await conexion.json();
        return conexionConvertida;    
    } catch (error) {
        console.log(error);
    }
}

async function eliminarProducto(id){
    try {
        const conexion = await fetch(`http://localhost:3001/prodcutos/${id}`,{
            method: "DELETE"
        });
        //const conexionConvertida = await conexion.json();
        return conexion.ok;
    } catch (error) {
        console.log(error);
    }
}

export const conexionAPI = {
    obtenerProductos, enviarProducto, eliminarProducto
};