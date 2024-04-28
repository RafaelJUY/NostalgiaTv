function mostrarSeries() {
    const contenedorSeries = document.querySelector(".contenedorSeries");
    for (const serie of datosSeries) {
        contenedorSeries.innerHTML += `
            <div class="card w-100 rounded-5 serie" data-aos="fade-up" data-aos-duration="300"
                 style="width: 18rem;">
                ${serie.iframe}
                <div class="card-body p-0">
                    <h2 class="card-title main__h2">${serie.nombre}</h2>
                    <p class="card-text main__p">
                        <span>(${serie.fechaDesde} - ${serie.fechaHasta})</span> 
                        ${serie.descripcion}
                    </p>
                </div>
            </div>
        `;
    }
}

mostrarSeries();