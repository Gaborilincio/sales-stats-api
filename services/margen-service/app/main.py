from fastapi import FastAPI
from app.margen_service import calcular_margen

app = FastAPI()

@app.post("/margen")
def margen(data: dict):
    return calcular_margen(data["precio"], data["costo"])