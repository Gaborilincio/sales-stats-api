from fastapi import FastAPI
from pydantic import BaseModel
from app.stats_service import calcular_estadisticas

app = FastAPI()

class StatsInput(BaseModel):
    ventas: list[float]

@app.post("/stats")
def stats(data: StatsInput):
    return calcular_estadisticas(data.ventas)