from fastapi import FastAPI
from app.analisis_service import analizar_productos

app = FastAPI()

@app.post("/productos")
def productos(data: dict):
    return analizar_productos(data["productos"])