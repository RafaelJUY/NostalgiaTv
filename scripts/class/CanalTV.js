class CanalTV {
    constructor(nombre, fechaDesde, fechaHasta, descripcion, imagenLogo) {
        this._nombre = nombre;
        this._fechaDesde = fechaDesde;
        this._fechaHasta = fechaHasta;
        this._descripcion = descripcion;
        this._imagenLogo = imagenLogo; // Se espera que sea del tipo Imagen (scripts.class.Imagen.js)
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get fechaDesde() {
        return this._fechaDesde.getFullYear();
    }

    set fechaDesde(value) {
        this._fechaDesde = value;
    }

    get fechaHasta() {
        if (this._fechaHasta == null){
            return "Actualidad";
        }
        return this._fechaHasta.getFullYear();
    }

    set fechaHasta(value) {
        this._fechaHasta = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }

    get imagenLogo() {
        return this._imagenLogo;
    }

    set imagenLogo(value) {
        this._imagenLogo = value;
    }
}