let listaProductos = [];

function convertirJSONaProductosTienda(jsonData) {
    return jsonData.listaProductos.map((producto) => {
        const imagen = new Imagen(producto.imagen.url, producto.imagen.descripcion);
        return new ProductoTienda(producto.id, producto.nombre, producto.precio, imagen, producto.descripcion);
    });
}

async function consultarProductos() {
    const URL = "../scripts/data/datosProductosTienda.json";
    try {
        const respuesta = await fetch(URL);
        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status} - ${respuesta.statusText}`);
        }
        const jsonData = await respuesta.json();
        listaProductos = convertirJSONaProductosTienda(jsonData);
    } catch (e) {
        console.log(e);
    }
}

consultarProductos();