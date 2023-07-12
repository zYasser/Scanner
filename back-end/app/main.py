from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config.database import engine, get_db
from .model import medicine
from .routers import med

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]


app = FastAPI()
medicine.Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(med.router)


@app.get("/")
async def root():
    return {"message": "Hello World"}
