# ✨ GlowPredict – AI Skin Analyzer

GlowPredict is an AI-powered skincare analysis web application built using:

- React.js
- Tailwind CSS
- FastAPI
- Machine Learning

The application analyzes user skin concerns, predicts issues using AI, and recommends personalized skincare products.

---

# 🚀 Features

## 🧠 AI Skin Analysis
- Acne Detection
- Pigmentation Analysis
- Dryness Detection
- Redness & Sensitivity Analysis
- Oiliness Prediction
- Wrinkle Detection

---

## 📸 Upload Skin Images
Users can upload skin photos for advanced AI-based analysis.

---

## 🧴 Personalized Product Recommendations
AI recommends:
- Face Washes
- Moisturizers
- Serums
- Sunscreens
- Treatments

---

## 🔐 Authentication System
- Login Page
- Signup Page
- Protected Analyzer Route
- LocalStorage Authentication

---

## 🎨 Modern UI
- Tailwind CSS
- Framer Motion Animations
- Glassmorphism Design
- Animated Beauty Background

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
GlowPredict/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx
│   │   │   └── SkinAnalyzer.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Policy.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── app/
│   │   └── main.py
│   │
│   └── requirements.txt
│
└── README.md


---
#⚙️ Complete Installation Guide
1️⃣ Clone Repository
git clone https://github.com/yourusername/glowpredict.git
2️⃣ Open Project Folder
cd glowpredict
🖥️ FRONTEND SETUP
3️⃣ Go to Frontend Folder
cd frontend
4️⃣ Install Node Modules
npm install
5️⃣ Install Required Frontend Packages
npm install axios react-router-dom framer-motion
6️⃣ Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
7️⃣ Initialize Tailwind
npx tailwindcss init -p
8️⃣ Configure Tailwind
Update tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
9️⃣ Add Tailwind Directives
Inside src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
🔟 Start Frontend
npm run dev

Frontend runs on:

http://localhost:5173
⚡ BACKEND SETUP
1️⃣1️⃣ Open New Terminal

Go to root project folder.

1️⃣2️⃣ Go to Backend Folder
cd backend
1️⃣3️⃣ Create Virtual Environment
Windows
python -m venv venv
1️⃣4️⃣ Activate Virtual Environment
Windows
venv\\Scripts\\activate
Mac/Linux
source venv/bin/activate
1️⃣5️⃣ Install Backend Dependencies
pip install fastapi uvicorn pandas numpy scikit-learn python-multipart pillow
1️⃣6️⃣ Create requirements.txt
pip freeze > requirements.txt
1️⃣7️⃣ Start Backend Server
uvicorn app.main:app --reload --port 8000

Backend runs on:

http://localhost:8000
🔒 Authentication Flow
User visits homepage
User clicks Login or Signup
User logs into account
Protected analyzer page opens
User uploads image
AI generates skincare report
📸 Pages Included
Home Page
Skin Analyzer
Login Page
Signup Page
About Page
Privacy Policy Page
🧠 AI Recommendation Inputs

GlowPredict uses:

Age
Gender
Skin Tone
Skin Type
Sensitivity Level
Sleep Hours
Stress Level
Allergies
Uploaded Skin Image

to generate personalized skincare recommendations.

🎯 Future Improvements
JWT Authentication
MongoDB Integration
AI Face Detection
PDF Report Download
Email Reports
Dark Mode
Real Dermatology Dataset
RAG + LLM Recommendation System
Doctor Consultation System
📄 License

MIT License

👨‍💻 Developer

Developed using:

React.js
FastAPI
Machine Learning
Tailwind CSS

Made with ❤️ for skincare intelligence.
