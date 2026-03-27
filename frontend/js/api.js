async function enviarDatosAPI(numeros) {
    const response = await fetch("http://localhost:8000/stats", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ ventas: numeros })
    });

    return await response.json();
}

async function calcularMargenAPI(precio, costo) {
    const response = await fetch("http://localhost:8000/margen", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ precio, costo })
    });

    return await response.json();
}

async function calcularEquilibrioAPI(costos_fijos, precio, costo_variable) {
    const response = await fetch("http://localhost:8000/equilibrio", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ costos_fijos, precio, costo_variable })
    });

    return await response.json();
}

async function analizarProductosAPI(productos) {
    const response = await fetch("http://localhost:8000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ productos })
    });

    return await response.json();
}