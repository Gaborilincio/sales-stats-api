const mostrarSeccion = (id) => {
    document.querySelectorAll('.seccion-content').forEach(s => s.classList.add('d-none'));

    const target = document.getElementById(id);
    if (target) target.classList.remove('d-none');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(id)) {
            link.classList.add('active');
        }
    });

    const titulos = {
        stats: "Análisis de Ventas",
        margen: "Calculadora de Margen",
        equilibrio: "Punto de Equilibrio",
        productos: "Inventario de Productos"
    };
    document.getElementById('sectionTitle').innerText = titulos[id] || "Dashboard";
};