function mostrarDibujosAnimados() {
    const contenedorDibujosAnimados = document.querySelector(".contenedorDibujosAnimados");
    for (const dibujoAnimado of dibujosAnimados) {
        contenedorDibujosAnimados.innerHTML += `
            <div class="card w-100 rounded-5 dibujoAnimado" data-aos="fade-up" data-aos-duration="300"
                 style="width: 18rem;">
                ${dibujoAnimado.iframe}
                <div class="card-body p-0">
                    <h2 class="card-title main__h2">${dibujoAnimado.nombre}</h2>
                    <p class="card-text main__p">
                        <span>(${dibujoAnimado.fechaDesde} - ${dibujoAnimado.fechaHasta})</span> 
                        ${dibujoAnimado.descripcion}
                    </p>
                </div>
            </div>
        `;
    }
}

mostrarDibujosAnimados();