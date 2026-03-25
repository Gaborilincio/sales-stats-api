from fastapi import APIRouter, HTTPException
from app.services.stats_service import calcular_estadisticas

router = APIRouter()

@router.post("/stats")
def stats(data: dict):
    ventas = data.get("ventas")

    if not ventas or not isinstance(ventas, list):
        raise HTTPException(status_code=400, detail="Lista inválida")

    try:
        return calcular_estadisticas(ventas)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))