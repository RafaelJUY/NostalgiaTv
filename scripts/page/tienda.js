let carrito = [];

// Carga todos los productos de datosProductosTienda.js en el HTML
async function mostrarTodosLosProductos() {
    const contenedorTienda = document.querySelector(".contenedorTienda");

    try {
        await consultarProductos(); // Espera a que consultarProductos() termine de ejecutarse y llene listaProductos
        for (const producto of listaProductos) {
            contenedorTienda.innerHTML += `
                <div class="card w-100 rounded-5 productoTienda" data-aos="fade-up" data-aos-duration="300" style="width: 18rem;">
                    <img src="${producto.imagen.url}" class="card-img-top rounded-5 productoTienda__imagen"
                             alt="${producto.imagen.descripcion}">
                    <div class="card-body p-0">
                        <h2 class="card-title main__h2">${producto.nombre}</h2>
                        <p class="card-text main__p"><span>Precio: $ ${producto.precio}</span><br>${producto.descripcion}</p>
                        <button class="btn btn-primary main__btn main__btn--agregarCarrito" id="${producto.id}">Agregar al Carrito</button>
                    </div>
                </div>
                `;
        }
        // Una vez que se han agregado los productos al DOM, se llama a la función para agregar eventos a los botones "Agregar al Carrito"
        btnAgregarAlCarrito();
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// Agrega productos al HTML del Carrito.
function agregarProductoVistaCarrito(prodTienda) {
    let elementoProducto = null; // Para capturar el producto si es que existiera en el HTML.

    // Comprobamos si el producto ya se muestra en el HTML
    const contenedorProductos = document.querySelectorAll(".productoCarrito");
    for (const prod of contenedorProductos) {
        if (parseInt(prod.children[0].lastElementChild.id.split("_")[1]) === prodTienda.id){
            elementoProducto = prod;
            break;
        }
    }

    // Buscamos el objeto ProductoCarrito para tener acceso a la cantidad y subtotal.
    let prodCarrito = carrito.find(p => p.id === prodTienda.id);

    // Si el producto ya existe en el HTML
    if (elementoProducto != null){
        // actualizamos la cantidad
        elementoProducto.children[0].children[1].textContent = prodCarrito.cantidad;
        // Actualizamos subtotal
        elementoProducto.children[0].children[2].textContent = `$ ${prodCarrito.subTotal}`;
    }else {
        // Si no existe creamos el HTML
        const contenedorCarrito = document.querySelector(".contenedorCarrito");
        contenedorCarrito.innerHTML += `
            <div class="card w-100 rounded-5 productoCarrito" data-aos="fade-up" data-aos-duration="300" style="width: 18rem;">
                <div class="card-body p-0">
                    <p class="card-text main__p">${prodCarrito.nombre}<br></p>
                    <p class="card-text main__p">1<br></p>
                    <p class="card-text main__p">$ ${prodCarrito.subTotal}<br></p>
                    <button class="btn btn-primary main__btn main__btn--eliminar" id="eliminar_${prodCarrito.id}">Eliminar</button>
                </div>
            </div>
            `;
        //Asignamos evento al botón Eliminar
        btnEliminarDelCarrito();
    }
}

// Borra del HTML todos los productos agregados al carrito.
function limpiarVistaCarrito() {
    const contenedorCarrito = document.querySelector(".contenedorCarrito");
    contenedorCarrito.innerHTML = "";
}

// Funcionalidad asociada al botón "Agregar al Carrito"
function btnAgregarAlCarrito() {
    // Colección de todos los botones de agregar al carrito
    const botonesCompra = document.querySelectorAll(".main__btn--agregarCarrito");

    for (const boton of botonesCompra) {
        boton.addEventListener("click", () => {
            // obtenemos el producto a agregar al carrito segun el id asociado al boton de agregar.
            let prodTienda = listaProductos.find(prod => prod.id === parseInt(boton.id));

            agregarProductoAlCarrito(prodTienda);
            agregarProductoVistaCarrito(prodTienda);
            actualizarVistaPrecioFinal();

            mostrarCuadroEmergente(`AGREGASTE AL CARRITO\n\n${prodTienda.nombre}\n\n`);
        })
    }
}

// Agregar al array carrito un producto, ya sea nuevo o repetido.
function agregarProductoAlCarrito(prodTienda) {
    // Un producto repetido se agrega al carrito incrementado su cantidad y subtotal.
    function agregarProductoRepetido(productoTienda) {
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id === productoTienda.id) {
                carrito[i].cantidad += 1;
                carrito[i].subTotal = carrito[i].cantidad * carrito[i].precio;
            }
        }
    }

    // Agrega un producto que no existia en el carrito
    function agregarNuevoProductoAlCarrito(productoCarrito) {
        carrito.push(productoCarrito)
    }

    // Comprobar si un producto existe en el carrito
    function comprobarProductoEnCarrito(id) {
        let exite = false;
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].id === id) {
                exite = true;
                break;
            }
        }
        return exite;
    }

    if (comprobarProductoEnCarrito(prodTienda.id)) {
        agregarProductoRepetido(prodTienda);
    } else {
        agregarNuevoProductoAlCarrito(new ProductoCarrito(prodTienda.id, prodTienda.nombre, prodTienda.precio, 1, prodTienda.precio));
    }
    setCarritoLocalStorage();
}

// Funcionalidad para el boton de eliminar del carrito
function btnEliminarDelCarrito() {
    const botonesEliminar = document.getElementsByClassName("main__btn--eliminar");
    for (const boton of botonesEliminar) {
        boton.addEventListener("click", () => {
            // obtenemos el producto a eliminar segun el id asociado al boton eliminar id="eliminar_${prodCarrito.id}.
            let prodCarrito = carrito.find(prod => prod.id === parseInt(boton.id.split("_")[1]));

            eliminarDelCarrito(prodCarrito);
            eliminarProductoVistaCarrito(prodCarrito);
            actualizarVistaPrecioFinal();
        })
    }
}

function eliminarDelCarrito(prodCarrito){
    // Si hay mas de una unidad del producto
    if (prodCarrito.cantidad > 1) {
        // decrementamos la cantidad
        prodCarrito.cantidad -= 1;
        // calculamos el nuevo subtotal
        prodCarrito.subTotal = prodCarrito.cantidad * prodCarrito.precio;
    } else {
        // Si es la unica unidad, eliminamos esa posicion del array.
        carrito = carrito.filter(prod => prod.id !== prodCarrito.id);
    }
    setCarritoLocalStorage();
}

function eliminarProductoVistaCarrito(prodCarrito){
    const contenedorProductos = document.querySelectorAll(".productoCarrito");
    let actualizarProducto = false;
    if (carrito.some(p => p.id === prodCarrito.id)){
        actualizarProducto = true; //Como exite en el array carrito solo hay que actualizar el HTML
    }

    for (const prod of contenedorProductos) {
        // Buscamos el elemento a actualizar por id.
        if (parseInt(prod.children[0].lastElementChild.id.split("_")[1]) === prodCarrito.id){
            if (actualizarProducto){
                // actualizamos la cantidad
                prod.children[0].children[1].textContent = prodCarrito.cantidad;
                // Actualizamos subtotal
                prod.children[0].children[2].textContent = `$ ${prodCarrito.subTotal}`;
            } else {
                // El producto no existe en el array carrito, se remueve del HTML.
                prod.remove();
            }
            break;
        }
    }
}

// Funcionalidad asociada al botón Limpiar Carrito
function btnLimpiarCarrito() {
    const btnLimpiar = document.getElementById("btnLimpiar");

    btnLimpiar.addEventListener("click", () => {
        carrito = [];
        limpiarVistaCarrito();
        actualizarVistaPrecioFinal();
        setCarritoLocalStorage();
    })
}

// Calcular el precio final de la compra.
function calcularTotal() {
    let total = 0;
    if (carrito.length !== 0) {
        total = carrito.reduce((total, prod) => total + (prod.precio * prod.cantidad), 0);
    }
    return total;
}

//Actualiza la vista HTML del precio final de la compra
function actualizarVistaPrecioFinal() {
    const vistaTotal = document.getElementById("precioFinal");
    vistaTotal.textContent = `$ ${calcularTotal()}`;
}

// Obtener del LocalStorage el carrito de productos como un array de ProductoCarrito.
function getCarritoLocalStorage() {
    let carritoStorage = JSON.parse(localStorage.getItem("carrito"));
    if (carritoStorage != null) {
        carritoStorage = carritoStorage.map(item => {
            return new ProductoCarrito(item.data._id, item.data._nombre, item.data._precio, item.data._cantidad, item.data._subTotal);
        });
    }

    return carritoStorage;
}

// Sobreescribir en el LocalStorage el carrito de productos
function setCarritoLocalStorage() {
    let carritoStorage = carrito.map(prod => {
        return {type: 'ProductoCarrito', data: prod};
    });

    localStorage.setItem("carrito", JSON.stringify(carritoStorage));
}

// Carga el carrito del LocalStorage en el array carrito y actualiza la vista HTML
function cargarCarritoGuardado() {
    let carritoStorage = getCarritoLocalStorage();
    if (carritoStorage != null) {
        carrito = carritoStorage;

        for (const prodCarrito of carrito) {
            const contenedorCarrito = document.querySelector(".contenedorCarrito");
            contenedorCarrito.innerHTML += `
            <div class="card w-100 rounded-5 productoCarrito" data-aos="fade-up" data-aos-duration="300" style="width: 18rem;">
                <div class="card-body p-0">
                    <p class="card-text main__p">${prodCarrito.nombre}<br></p>
                    <p class="card-text main__p">${prodCarrito.cantidad}<br></p>
                    <p class="card-text main__p">$ ${prodCarrito.subTotal}<br></p>
                    <button class="btn btn-primary main__btn main__btn--eliminar" id="eliminar_${prodCarrito.id}">Eliminar</button>
                </div>
            </div>
            `;
            btnEliminarDelCarrito();
        }
    }
}

// Funcionalidad asociada al boton de comprar
function btnComprar(){
    const btnComprar = document.getElementById("btnComprar");
    btnComprar.addEventListener("click", () =>{
        // Comprobamos si hay elementos agregados al carrito
        if (document.querySelectorAll(".productoCarrito").length === 0){
            mostrarCuadroEmergente("Agregue productos al carrito para poder realizar la compra.", "info");
        } else {
            // Se procede a la compra.
            mostrarCuadroEmergente("COMPRA EXITOSA\n\nGracias por realizar su compra!", "success");
            carrito = [];
            limpiarVistaCarrito();
            actualizarVistaPrecioFinal();
            setCarritoLocalStorage();
        }
    })
}

// Crea y muestra cuadros emergentes.
function mostrarCuadroEmergente(texto, icon = null) {
    Swal.fire({
        title: texto,
        icon: icon,
        iconColor: "#008B74",
        background: "#FAEED1",
        width: "40%",
        timer: "5000",
        timerProgressBar: true,
        confirmButtonColor: "#607274"
    });
}

mostrarTodosLosProductos();
cargarCarritoGuardado();
btnLimpiarCarrito();
btnComprar();
actualizarVistaPrecioFinal();
