class ProductoCarrito extends Producto{
    constructor(id, nombre, precio, cantidad) {
        super(id, nombre, precio);
        this._cantidad = cantidad;
    }

    get cantidad() {
        return this._cantidad;
    }

    set cantidad(value) {
        this._cantidad = value;
    }

    toString() {
        return super.toString() + `cantidad: ${this.cantidad}`;
    }
}