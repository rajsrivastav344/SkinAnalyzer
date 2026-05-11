from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.schemas import SkinInput
from app.ml_model import predict_product
from app.report_generator import generate_report
import shutil
import os

app = FastAPI(title="GlowPredict - AI Skincare Analyzer")

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount reports folder for PDF download
app.mount("/reports", StaticFiles(directory="reports"), name="reports")

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/predict")
async def predict(input_data: SkinInput):
    # Get prediction from ML model
    prediction = predict_product(input_data.dict())
    
    # Generate PDF Report
    pdf_path = generate_report(prediction, input_data.dict())
    
    return {
        **prediction,
        "report_url": f"/reports/{os.path.basename(pdf_path)}",
        "message": "Analysis completed successfully!"
    }

@app.post("/upload-skin-photo")
async def upload_photo(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    return {
        "photo_url": file_path,
        "message": "Skin photo uploaded successfully",
        "filename": file.filename
    }

# Health Check Endpoint
@app.get("/health")
async def health():
    return {"status": "healthy", "message": "GlowPredict Backend is running"}