def analizar_productos(productos):
    resultados = []

    for p in productos:
        ganancia = p["precio_venta"] - p["costo"]
        total = ganancia * p["stock"]

        resultados.append({
            "nombre": p["nombre"],
            "ganancia_unitaria": ganancia,
            "ganancia_total": total
        })

    mejor = max(resultados, key=lambda x: x["ganancia_total"])
    peor = min(resultados, key=lambda x: x["ganancia_total"])

    return {
        "productos": resultados,
        "mejor_producto": mejor,
        "peor_producto": peor
    }