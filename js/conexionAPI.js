async function listaProductos() {
    try {
        const conexion = await fetch("https://664bb00b35bbda10987dcd9f.mockapi.io/api/productos/prod");
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.log(error);
    }
}

async function enviarProducto(nombre, precio, url) {
    try {
        const conexion = await fetch("https://664bb00b35bbda10987dcd9f.mockapi.io/api/productos/prod", {
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
        const conexion = await fetch(`https://664bb00b35bbda10987dcd9f.mockapi.io/api/productos/prod/${id}`,{
            method: "DELETE"
        });
        //const conexionConvertida = await conexion.json();
        return conexion.ok;
    } catch (error) {
        console.log(error);
    }
}

export const conexionAPI = {
    listaProductos, enviarProducto, eliminarProducto
};