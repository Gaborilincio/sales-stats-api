let miGrafico; 

const renderizarGrafico = (ctxId, tipo, labels, data) => {
    const ctx = document.getElementById(ctxId).getContext('2d');

    if (miGrafico) miGrafico.destroy();

    miGrafico = new Chart(ctx, {
        type: tipo,
        data: {
            labels: labels,
            datasets: [{
                label: 'Ventas ($)',
                data: data,
                backgroundColor: 'rgba(67, 97, 238, 0.2)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 2,
                tension: 0.4, 
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false } 
            },
            scales: {
                y: { beginAtZero: true, grid: { display: false } },
                x: { grid: { display: false } }
            }
        }
    });
};