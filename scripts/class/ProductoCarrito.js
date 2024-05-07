class ProductoCarrito extends Producto{
    constructor(id, nombre, precio, cantidad, subTotal) {
        super(id, nombre, precio);
        this._cantidad = cantidad;
        this._subTotal = subTotal;
    }
    get cantidad() {
        return this._cantidad;
    }

    set cantidad(value) {
        this._cantidad = value;
    }

    get subTotal() {
        return this._subTotal;
    }
    set subTotal(value) {
        this._subTotal = value;
    }

    toString() {
        return super.toString() + `cantidad: ${this.cantidad}` + `subtotal: ${this.subTotal}`;
    }
}