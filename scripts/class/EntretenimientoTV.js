class EntretenimientoTV {
    constructor(nombre, descripcion, fechaDesde, fechaHasta, iframe) {
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._fechaDesde = fechaDesde;
        this._fechaHasta = fechaHasta;
        this._iframe = iframe;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
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

    get iframe() {
        return this._iframe;
    }

    set iframe(value) {
        this._iframe = value;
    }
}