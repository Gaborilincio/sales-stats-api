let productos = [];

document.addEventListener('DOMContentLoaded', () => {

    const btnCalcular = document.getElementById("btnCalcular");

    btnCalcular.addEventListener("click", async () => {
        const input = document.getElementById("inputData").value;
        const tipo = document.getElementById("tipoGrafico").value;

        const numeros = input.split(",").map(Number).filter(n => !isNaN(n));

        if (numeros.length === 0) return alert("Ingresa datos válidos");

        const data = await enviarDatosAPI(numeros);

        if (data) {
            renderizarMetricasStats(data);

            const labels = numeros.map((_, i) => `Día ${i + 1}`);
            renderizarGrafico('grafico', tipo, labels, numeros);
        }
    });

});


    function agregarProducto() {
        const nombre = document.getElementById("nombre").value;
        const stock = Number(document.getElementById("stock").value);
        const costo = Number(document.getElementById("costo").value);
        const precio = Number(document.getElementById("precio").value);

        if (!nombre || isNaN(stock) || isNaN(costo) || isNaN(precio)) {
            alert("Completa todos los campos con valores numéricos");
            return;
        }

        const producto = { nombre, stock, costo, precio_venta: precio };
        productos.push(producto);

        document.querySelectorAll('#productos input').forEach(i => i.value = "");
        renderizarLista();
    }

    function renderizarLista() {
        const lista = document.getElementById("listaProductos");
        lista.innerHTML = "";

        productos.forEach((p, index) => {
            const ganancia = p.precio_venta - p.costo;
            const colorClase = ganancia >= 0 ? 'text-success' : 'text-danger';

            lista.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 mb-2 shadow-sm rounded">
                <div>
                    <span class="fw-bold">${p.nombre}</span> 
                    <small class="text-muted ms-2">Stock: ${p.stock}</small>
                </div>
                <span class="${colorClase} fw-semibold">
                    ${ganancia >= 0 ? '+' : ''}$${ganancia.toLocaleString()}
                </span>
            </li>
        `;
        });
    }

    async function calcularMargen() {
        const precio = Number(document.getElementById("precioMargen").value);
        const costo = Number(document.getElementById("costoMargen").value);

        if (!precio || !costo) return alert("Completa los datos");

        const data = await calcularMargenAPI(precio, costo);

        document.getElementById("resultadoMargen").innerHTML = `
        <div class="card bg-light border-0 p-3">
            <div class="d-flex justify-content-between">
                <span class="text-muted">Margen Bruto:</span>
                <span class="fw-bold text-primary">${data.margen}%</span>
            </div>
            <div class="d-flex justify-content-between mt-2">
                <span class="text-muted">Ganancia por unidad:</span>
                <span class="fw-bold text-success">$${data.ganancia}</span>
            </div>
        </div>
    `;
    }

    async function calcularEquilibrio() {
        const costos_fijos = Number(document.getElementById("costosFijos").value);
        const precio = Number(document.getElementById("precioEq").value);
        const costo_variable = Number(document.getElementById("costoVar").value);

        if (!costos_fijos || !precio || !costo_variable) return alert("Completa los datos");

        const data = await calcularEquilibrioAPI(costos_fijos, precio, costo_variable);

        document.getElementById("resultadoEquilibrio").innerHTML = `
        <div class="alert alert-info border-0 shadow-sm mt-3">
            Debes vender <strong class="fs-4">${data.unidades_necesarias}</strong> unidades 
            para cubrir tus costos fijos de $${costos_fijos}.
        </div>
    `;
    }

    function renderizarMetricasStats(data) {
        const contenedor = document.getElementById("resultadoStats");
        contenedor.innerHTML = `
        <div class="col-md-6 mb-3">
            <div class="card p-3 border-0 shadow-sm">
                <span class="metric-label">Promedio de Operación</span>
                <h3 class="metric-value">${data.promedio || 0}</h3>
            </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="card p-3 border-0 shadow-sm">
                <span class="metric-label">Total Analizado</span>
                <h3 class="metric-value text-primary">$${data.total || 0}</h3>
            </div>
        </div>
    `;
    }