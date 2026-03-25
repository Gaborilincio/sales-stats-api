from fastapi import FastAPI
import requests

app = FastAPI()

STATS_SERVICE_URL = "http://stats-service:8000/stats"

@app.get("/")
def home():
    return {"mensaje": "API Gateway funcionando"}

@app.post("/stats")
def proxy_stats(data: dict):
    response = requests.post(STATS_SERVICE_URL, json=data)
    return response.json()