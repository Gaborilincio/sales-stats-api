def calcular_margen(precio, costo):
    ganancia = precio - costo
    margen = (ganancia / precio) * 100 if precio != 0 else 0

    return {
        "ganancia": ganancia,
        "margen": round(margen, 2)
    }

