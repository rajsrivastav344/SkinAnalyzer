import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.email && form.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/analyzer");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 px-6">
      <div className="w-full max-w-md bg-white rounded-[35px] shadow-2xl p-10">
        <h1 className="text-5xl font-bold text-center text-purple-700 mb-8">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-2xl border"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-2xl border"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xl">
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?
          <Link to="/signup" className="text-purple-600 font-semibold ml-2">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}