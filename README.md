# ✨ GlowPredict – AI Skin Analyzer

GlowPredict is an AI-powered skincare analysis web application built using:

- React.js
- Tailwind CSS
- FastAPI
- Machine Learning

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
```

---

# ⚙️ Complete Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/glowpredict.git
```

---

## 2️⃣ Open Project Folder

```bash
cd glowpredict
```

---

# 🖥️ FRONTEND SETUP

## 3️⃣ Go to Frontend Folder

```bash
cd frontend
```

---

## 4️⃣ Install Node Modules

```bash
npm install
```

---

## 5️⃣ Install Required Frontend Packages

```bash
npm install axios react-router-dom framer-motion
```

---

## 6️⃣ Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
```

---

## 7️⃣ Initialize Tailwind

```bash
npx tailwindcss init -p
```

---

## 8️⃣ Configure Tailwind

Update `tailwind.config.js`

```js
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
```

---

## 9️⃣ Add Tailwind Directives

Inside `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🔟 Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# ⚡ BACKEND SETUP

## 1️⃣1️⃣ Open New Terminal

Go to the root project folder.

---

## 1️⃣2️⃣ Go to Backend Folder

```bash
cd backend
```

---

## 1️⃣3️⃣ Create Virtual Environment

### Windows

```bash
python -m venv venv
```

---

## 1️⃣4️⃣ Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Mac/Linux

```bash
source venv/bin/activate
```

---

## 1️⃣5️⃣ Install Backend Dependencies

```bash
pip install fastapi uvicorn pandas numpy scikit-learn python-multipart pillow
```

---

## 1️⃣6️⃣ Create requirements.txt

```bash
pip freeze > requirements.txt
```

---

## 1️⃣7️⃣ Start Backend Server

```bash
uvicorn app.main:app --reload --port 8000
```

Backend runs on:

```bash
http://localhost:8000
```

---

# 🔒 Authentication Flow

1. User visits homepage  
2. User clicks Login or Signup  
3. User logs into account  
4. Protected analyzer page opens  
5. User uploads image  
6. AI generates skincare report  

---

# 📸 Pages Included

- Home Page
- Skin Analyzer
- Login Page
- Signup Page
- About Page
- Privacy Policy Page

---

# 🧠 AI Recommendation Inputs

GlowPredict uses:

- Age
- Gender
- Skin Tone
- Skin Type
- Sensitivity Level
- Sleep Hours
- Stress Level
- Allergies
- Uploaded Skin Image

to generate personalized skincare recommendations.

---

# 🎯 Future Improvements

- JWT Authentication
- MongoDB Integration
- AI Face Detection
- PDF Report Download
- Email Reports
- Dark Mode
- Real Dermatology Dataset
- RAG + LLM Recommendation System
- Doctor Consultation System

---

# 📄 License

MIT License

---

# 👨‍💻 Developer

Developed using:

- React.js
- FastAPI
- Machine Learning
- Tailwind CSS

Made with ❤️ for skincare intelligence.
