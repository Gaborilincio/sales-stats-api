import statistics

def calcular_estadisticas(ventas):

    if len(ventas) == 0:
        raise ValueError("Lista vacía")

    promedio = sum(ventas) / len(ventas)
    maximo = max(ventas)
    minimo = min(ventas)
    suma = sum(ventas)
    cantidad = len(ventas)
    rango = maximo - minimo
    mediana = statistics.median(ventas)
    desviacion = statistics.stdev(ventas) if len(ventas) > 1 else 0

    return {
        "promedio": promedio,
        "max": maximo,
        "min": minimo,
        "suma": suma,
        "cantidad": cantidad,
        "rango": rango,
        "mediana": mediana,
        "desviacion_estandar": desviacion
    }