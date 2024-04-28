function mostrarCanaleTV() {
    const contenedorCanalTv = document.querySelector(".contenedorTV");

    for (const canal of canalesTV) {
        contenedorCanalTv.innerHTML += `
            <div class="card w-100 rounded-5 canalTV" data-aos="fade-up" data-aos-duration="300" style="width: 18rem;">
                <img src="${canal.imagenLogo.url}" class="card-img-top rounded-5 contenedorTV__logoTV"
                     alt="${canal.imagenLogo.description}">
                <div class="card-body p-0">
                    <h2 class="card-title main__h2">${canal.nombre}</h2>
                    <p class="card-text main__p"><span>(${canal.fechaDesde} - ${canal.fechaHasta})</span> ${canal.descripcion}</p>
                </div>
            </div>
        `;
    }
}

mostrarCanaleTV();