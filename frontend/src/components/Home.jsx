import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const floatingProducts = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
  "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
  "https://images.unsplash.com/photo-1617897903246-719242758050",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-100">

      {/* Animated Background */}
  
<div className="absolute inset-0 overflow-hidden">

  {floatingProducts.map((img, index) => (
    <motion.img
      key={index}
      src={`${img}?auto=format&fit=crop&w=600&q=80`}
      alt="beauty"
      className="absolute object-cover rounded-[30px] opacity-25 shadow-2xl border border-white/30"
      style={{
        width: `${180 + (index % 5) * 40}px`,
        height: `${180 + (index % 5) * 40}px`,
        top: `${(index * 13) % 90}%`,
        left: `${(index * 9) % 95}%`,
      }}
      initial={{
        y: 0,
        rotate: Math.random() * 20,
      }}
      animate={{
        y: [-20, 20, -20],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 6 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-white/20 to-purple-200/40 backdrop-blur-[2px]" />

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-400 rounded-full blur-[140px] opacity-20"></div>

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400 rounded-full blur-[140px] opacity-20"></div>

  <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-300 rounded-full blur-[120px] opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
</div>
      {/* Main Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-center bg-white/60 backdrop-blur-xl shadow-2xl rounded-[40px] p-12 border border-white/40"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6"
          >
            GlowPredict
          </motion.h1>

          <p className="text-2xl text-gray-700 leading-relaxed mb-8">
            AI-powered skin analysis that understands your skin concerns,
            detects hidden issues, and recommends the perfect skincare products
            for glowing healthy skin.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/70 rounded-2xl p-5 shadow-md">
              <p className="text-4xl mb-2">📸</p>
              <h3 className="font-bold text-lg">Photo Analysis</h3>
              <p className="text-sm text-gray-600 mt-2">
                Upload your skin image for deep AI inspection.
              </p>
            </div>

            <div className="bg-white/70 rounded-2xl p-5 shadow-md">
              <p className="text-4xl mb-2">🧴</p>
              <h3 className="font-bold text-lg">Smart Recommendations</h3>
              <p className="text-sm text-gray-600 mt-2">
                Personalized skincare products based on your skin.
              </p>
            </div>

            <div className="bg-white/70 rounded-2xl p-5 shadow-md">
              <p className="text-4xl mb-2">⚡</p>
              <h3 className="font-bold text-lg">Instant Results</h3>
              <p className="text-sm text-gray-600 mt-2">
                Fast AI predictions with confidence scores.
              </p>
            </div>
          </div>
<div className="flex justify-center gap-5 mt-10">
  <Link to="/login">
    <button className="px-8 py-4 rounded-full bg-purple-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition">
      Login
    </button>
  </Link>

  <Link to="/signup">
    <button className="px-8 py-4 rounded-full bg-pink-500 text-white font-bold text-lg shadow-xl hover:scale-105 transition">
      Signup
    </button>
  </Link>
</div>
          {/* CTA Button */}
          <Link to="/analyzer">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 text-xl font-bold rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-2xl hover:shadow-pink-300 transition"
            >
              Start Skin Analysis →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}