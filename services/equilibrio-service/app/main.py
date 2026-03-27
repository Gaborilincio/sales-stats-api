from fastapi import FastAPI
from app.equilibrio_service import calcular_punto_equilibrio

app = FastAPI()

@app.post("/equilibrio")
def equilibrio(data: dict):
    return calcular_punto_equilibrio(
        data["costos_fijos"],
        data["precio"],
        data["costo_variable"]
    )