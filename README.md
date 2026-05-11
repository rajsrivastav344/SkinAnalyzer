# ✨ GlowPredict – AI Skin Analyzer

GlowPredict is an AI-powered skincare analysis web application built using React, Tailwind CSS, FastAPI, and Machine Learning.

Users can:
- Upload skin photos
- Analyze skin conditions using AI
- Get personalized skincare recommendations
- View confidence scores
- Login / Signup to save reports

---

# 🚀 Features

## 🧠 AI Skin Analysis
- Acne detection
- Pigmentation analysis
- Dryness detection
- Redness & sensitivity analysis
- Oiliness prediction
- Wrinkle prediction

## 📸 Upload Skin Images
Users can upload skin photos for better AI analysis.

## 🧴 Smart Product Recommendations
AI recommends:
- Face washes
- Moisturizers
- Serums
- Sunscreens
- Treatments

## 🔐 Authentication System
- Login page
- Signup page
- Protected analyzer route
- LocalStorage-based authentication

## 🎨 Modern UI
- Tailwind CSS
- Framer Motion animations
- Glassmorphism cards
- Animated beauty background

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- React Router DOM

## Backend
- FastAPI
- Python
- Uvicorn

## AI / ML
- Scikit-learn
- Pandas
- NumPy

---

# 📂 Project Structure

```bash
frontend/
│
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   └── SkinAnalyzer.jsx
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Policy.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json

---


⚙️ Installation
1️⃣ Clone Repository
git clone https://github.com/yourusername/glowpredict.git
cd glowpredict
🖥️ Frontend Setup
Install Dependencies
npm install
Install Required Packages
npm install axios react-router-dom framer-motion
Start Frontend
npm run dev

Frontend runs on:

http://localhost:5173
⚡ Backend Setup
Install Python Dependencies
pip install fastapi uvicorn pandas numpy scikit-learn python-multipart
Start Backend
uvicorn app.main:app --reload --port 8000

Backend runs on:

http://localhost:8000
🔒 Authentication Flow
User visits homepage
User clicks Login or Signup
User logs in
Protected analyzer page opens
User uploads image
AI generates report
📸 Screens Included
Home Page
AI Skin Analyzer
Login Page
Signup Page
About Page
Privacy Policy Page
🎯 Future Improvements
JWT Authentication
MongoDB Database
AI Face Detection
PDF Report Download
Dark Mode
Email Reports
Real Dermatology Dataset
RAG + LLM Recommendation Engine
🧠 AI Recommendation Inputs

GlowPredict uses:

Age
Gender
Skin tone
Skin type
Sensitivity
Sleep hours
Stress level
Allergies
Uploaded image

to generate personalized skincare suggestions.

📄 License

MIT License

👨‍💻 Developer

Developed using React + FastAPI + AI/ML.

Made with ❤️ for skincare intelligence.
