class Imagen {
    constructor(url, descripcion) {
        this._descripcion = descripcion;
        this._url = url;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(value) {
        this._descripcion = value;
    }
}