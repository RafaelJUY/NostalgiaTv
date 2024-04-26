class ProductoTienda extends Producto{
    constructor(id, nombre, precio, imagen, descripcion) {
        super(id, nombre, precio);
        this._imagen = imagen;
        this._descripcion = descripcion;

    }
    get imagen() {
        return this._imagen;
    }

    set imagen(value) {
        this._imagen = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }

    toString(){
        return super.toString() + `descripcion: ${this.descripcion}`;
    }
}