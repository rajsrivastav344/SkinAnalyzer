import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./components/Home";
import SkinAnalyzer from "./components/SkinAnalyzer";

import About from "./pages/About";
import Policy from "./pages/Policy";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<About />} />

        <Route path="/policy" element={<Policy />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/analyzer"
          element={
            <ProtectedRoute>
              <SkinAnalyzer />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;