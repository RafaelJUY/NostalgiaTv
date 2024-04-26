class Producto {
    constructor(id, nombre, precio) {
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
    }
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }
    toString(){
        return `id: ${this.id} nombre: ${this.nombre} precio: $${this.precio}`;
    }
}