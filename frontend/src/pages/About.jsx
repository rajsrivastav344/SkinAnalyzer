export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl p-12">

        <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-8">
          About GlowPredict
        </h1>

        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          GlowPredict is an AI-powered skincare platform that analyzes your skin
          concerns and recommends personalized skincare products.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-pink-50 rounded-3xl p-6 shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-3">
              📸 AI Skin Scan
            </h2>

            <p className="text-gray-600">
              Upload skin images for advanced AI-powered analysis.
            </p>
          </div>

          <div className="bg-purple-50 rounded-3xl p-6 shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-3">
              🧴 Smart Products
            </h2>

            <p className="text-gray-600">
              Personalized skincare product recommendations.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-3xl p-6 shadow-lg hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-3">
              ⚡ Instant Results
            </h2>

            <p className="text-gray-600">
              Fast AI predictions with confidence scoring.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}