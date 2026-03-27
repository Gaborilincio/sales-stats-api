from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.options("/{full_path:path}")
def preflight_handler(full_path: str):
    return {}

STATS_SERVICE_URL = "http://stats-service:8000/stats"
MARGEN_SERVICE_URL = "http://margen-service:8000/margen"
EQUILIBRIO_SERVICE_URL = "http://equilibrio-service:8000/equilibrio"
PRODUCTOS_SERVICE_URL = "http://analisis-service:8000/productos"

@app.get("/")
def home():
    return {"mensaje": "API Gateway funcionando"}

@app.post("/stats")
def proxy_stats(data: dict):
    response = requests.post(STATS_SERVICE_URL, json=data)
    return response.json()

@app.post("/margen")
def proxy_margen(data: dict):
    response = requests.post(MARGEN_SERVICE_URL, json=data)
    return response.json()

@app.post("/equilibrio")
def proxy_equilibrio(data: dict):
    response = requests.post(EQUILIBRIO_SERVICE_URL, json=data)
    return response.json()

@app.post("/productos")
def proxy_productos(data: dict):
    response = requests.post(PRODUCTOS_SERVICE_URL, json=data)
    return response.json()