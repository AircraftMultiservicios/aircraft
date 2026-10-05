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
            <div class="gallery-item" id="foto-card-${i}">
                <div class="media-wrapper">
                    <span class="badge">Foto</span>
                    <!-- Carga diferida (lazy) y ocultamiento dinámico si no existe la imagen -->
                    <img src="images/foto (${i}).jpg" 
                         alt="Mantenimiento técnico AircraftMultiservicios" 
                         loading="lazy"
                         onerror="ocultarFotoFaltante(${i})">
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

// Oculta la tarjeta automáticamente si la imagen no existe en el servidor
function ocultarFotoFaltante(id) {
    const tarjeta = document.getElementById(`foto-card-${id}`);
    if (tarjeta) {
        tarjeta.style.display = 'none';
    }
}

// Ejecuta la función al cargar la página
document.addEventListener('DOMContentLoaded', generarGaleria);