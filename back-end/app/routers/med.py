from fastapi import APIRouter, status, HTTPException, Depends
from ..config.database import engine, get_db
from sqlalchemy.orm import Session
from ..model import medicine

router = APIRouter(prefix="/v1/api/med", tags=["medicine"])


@router.get("/", status_code=200)
async def getMedById(medId: str, db: Session = Depends(get_db)):
    print(type(medId))
    med = db.query(medicine.Medicine).filter(medicine.Medicine.id == medId).first()
    if not med:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Medicine with id {medId} doesn't exist",
        )

    return med
