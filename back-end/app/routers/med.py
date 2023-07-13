from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..config.database import engine, get_db
from ..model import medicine

router = APIRouter(prefix="/v1/api/med", tags=["medicine"])


@router.get("/", status_code=200)
def getMedById(medId: str, db: Session = Depends(get_db)):
    med = db.query(medicine.Medicine).filter(medicine.Medicine.id == medId).first()
    if not med:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Medicine with id {medId} doesn't exist",
        )

    return {"data": med}
