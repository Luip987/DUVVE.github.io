// Función para alternar la visibilidad de las secciones
function toggleSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.add('hidden'); // Añadir clase 'hidden' a todas las secciones
    });

    // Mostrar la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.remove('hidden'); // Eliminar la clase 'hidden' de la sección seleccionada
}
