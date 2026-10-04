// ==========================================
// GENERADOR AUTOMÁTICO DE GALERÍA DE FOTOS
// ==========================================

// Indíquele al script cuántas fotos en total subiste a la carpeta images/
const TOTAL_FOTOS = 150; 

function generarGaleria() {
    const contenedor = document.getElementById('gallery-container');
    if (!contenedor) return;

    let htmlContenido = '';

    for (let i = 1; i <= TOTAL_FOTOS; i++) {
        htmlContenido += `
            <div class="gallery-item">
                <div class="media-wrapper">
                    <span class="badge">Foto</span>
                    <!-- Carga diferida (lazy) para mantener la velocidad -->
                    <img src="images/foto (${i}).jpg" alt="Mantenimiento técnico AircraftMultiservicios" loading="lazy">
                </div>
                <div class="item-info">
                    <h3>Servicio Técnico Garantizado</h3>
                    <p>Registro fotográfico de mantenimiento, revisión e instalación de equipos.</p>
                </div>
            </div>
        `;
    }

    contenedor.innerHTML = htmlContenido;
}

// Ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', generarGaleria);