def calcular_punto_equilibrio(costos_fijos, precio, costo_variable):
    if precio - costo_variable == 0:
        return {"error": "No se puede calcular"}

    unidades = costos_fijos / (precio - costo_variable)

    return {
        "unidades_necesarias": round(unidades, 2)
    }