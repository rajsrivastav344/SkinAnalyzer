import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const concernsList = [
  'acne',
  'wrinkles',
  'pigmentation',
  'dryness',
  'redness',
  'oiliness',
  'dark spots',
  'blackheads',
  'large pores',
];

const skinTones = ['fair', 'light', 'medium', 'tan', 'deep'];
const undertones = ['cool', 'warm', 'neutral'];
const sensitivityLevels = ['low', 'medium', 'high'];
const budgetOptions = ['low', 'medium', 'high', 'premium'];
const stressLevels = ['low', 'medium', 'high'];

const backgroundImages = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
  "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
];

export default function SkinAnalyzer() {
  const [form, setForm] = useState({
    age: 25,
    skin_type: 'combination',
    concerns: ['acne'],
    gender: 'female',
    skin_tone: 'medium',
    undertone: 'neutral',
    sensitivity_level: 'medium',
    allergies: [],
    known_reactions: [],
    is_pregnant: false,
    is_breastfeeding: false,
    has_hormonal_issues: false,
    stress_level: 'medium',
    sleep_hours: 7,
    budget_preference: 'medium',
    desired_results_time: '4-8 weeks',
    product_preferences: [],
    current_routine: [],
    notes: '',
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setPhotoPreview(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append('file', file);

      axios
        .post('http://localhost:8000/upload-skin-photo', formData)
        .catch(() => {});
    }
  };

  const toggleSelection = (field, value) => {
    const current = form[field] || [];

    const newValues = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];

    setForm({ ...form, [field]: newValues });
  };

  const handlePredict = async () => {
    setLoading(true);

    try {
      const res = await axios.post(
        'http://localhost:8000/predict',
        form
      );

      setResult(res.data);
    } catch (err) {
      alert(
        'Backend is not running.\nStart it with: uvicorn app.main:app --reload --port 8000'
      );
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-12">

      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">

        {backgroundImages.map((img, index) => (
          <motion.img
            key={index}
            src={`${img}?auto=format&fit=crop&w=700&q=80`}
            alt="beauty"
            className="absolute rounded-[40px] object-cover opacity-20 shadow-2xl"
            style={{
              width: `${220 + (index % 4) * 50}px`,
              height: `${220 + (index % 4) * 50}px`,
              top: `${(index * 13) % 90}%`,
              left: `${(index * 11) % 90}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/70 via-white/50 to-purple-100/70 backdrop-blur-[3px]" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-300 rounded-full blur-[150px] opacity-20"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300 rounded-full blur-[150px] opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4"
          >
            GlowPredict
          </motion.h1>

          <p className="text-2xl text-gray-700">
            Advanced AI Skin Analysis & Product Recommendation
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-2xl rounded-[40px] shadow-2xl border border-white/40 p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Age */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Age
              </label>

              <input
                type="number"
                value={form.age}
                onChange={(e) =>
                  setForm({
                    ...form,
                    age: parseInt(e.target.value),
                  })
                }
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80 outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Gender
              </label>

              <select
                value={form.gender}
                onChange={(e) =>
                  setForm({
                    ...form,
                    gender: e.target.value,
                  })
                }
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Skin Type */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Skin Type
              </label>

              <select
                value={form.skin_type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    skin_type: e.target.value,
                  })
                }
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80"
              >
                <option value="dry">Dry</option>
                <option value="oily">Oily</option>
                <option value="combination">Combination</option>
                <option value="sensitive">Sensitive</option>
                <option value="normal">Normal</option>
              </select>
            </div>

            {/* Skin Tone */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Skin Tone
              </label>

              <select
                value={form.skin_tone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    skin_tone: e.target.value,
                  })
                }
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80"
              >
                {skinTones.map((tone) => (
                  <option key={tone}>{tone}</option>
                ))}
              </select>
            </div>

            {/* Concerns */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Skin Concerns
              </label>

              <div className="flex flex-wrap gap-3">
                {concernsList.map((concern) => (
                  <button
                    key={concern}
                    type="button"
                    onClick={() =>
                      toggleSelection('concerns', concern)
                    }
                    className={`px-5 py-3 rounded-full transition-all duration-300 font-medium ${
                      form.concerns.includes(concern)
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-105'
                        : 'bg-white/80 hover:bg-pink-100'
                    }`}
                  >
                    {concern}
                  </button>
                ))}
              </div>
            </div>

            {/* Undertone */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Undertone
              </label>

              <select
                value={form.undertone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    undertone: e.target.value,
                  })
                }
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80"
              >
                {undertones.map((u) => (
                  <option key={u}>{u}</option>
                ))}
              </select>
            </div>

            {/* Sensitivity */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Sensitivity Level
              </label>

              <select
                value={form.sensitivity_level}
                onChange={(e) =>
                  setForm({
                    ...form,
                    sensitivity_level: e.target.value,
                  })
                }
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80"
              >
                {sensitivityLevels.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Stress */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Stress Level
              </label>

              <select
                value={form.stress_level}
                onChange={(e) =>
                  setForm({
                    ...form,
                    stress_level: e.target.value,
                  })
                }
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80"
              >
                {stressLevels.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Sleep */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Sleep Hours
              </label>

              <input
                type="number"
                value={form.sleep_hours}
                onChange={(e) =>
                  setForm({
                    ...form,
                    sleep_hours: parseInt(e.target.value),
                  })
                }
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Budget Preference
              </label>

              <select
                value={form.budget_preference}
                onChange={(e) =>
                  setForm({
                    ...form,
                    budget_preference: e.target.value,
                  })
                }
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80"
              >
                {budgetOptions.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Notes
              </label>

              <textarea
                rows="4"
                value={form.notes}
                onChange={(e) =>
                  setForm({
                    ...form,
                    notes: e.target.value,
                  })
                }
                placeholder="Tell us more about your skin..."
                className="w-full p-4 rounded-2xl border border-gray-200 bg-white/80"
              />
            </div>

            {/* Allergies */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Allergies / Avoid Ingredients
              </label>

              <div className="flex flex-wrap gap-3">
                {[
                  'fragrance',
                  'alcohol',
                  'retinol',
                  'niacinamide',
                  'salicylic acid',
                  'paraben',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      toggleSelection('allergies', item)
                    }
                    className={`px-5 py-3 rounded-full transition-all duration-300 font-medium ${
                      form.allergies.includes(item)
                        ? 'bg-red-500 text-white shadow-lg scale-105'
                        : 'bg-white/80 hover:bg-red-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Upload Skin Photo
              </label>

              <div className="border-2 border-dashed border-pink-300 rounded-[35px] p-10 text-center bg-white/40 hover:bg-white/60 transition">

                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />

                <label
                  htmlFor="photo-upload"
                  className="cursor-pointer block"
                >
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="preview"
                      className="mx-auto rounded-3xl max-h-80 shadow-2xl"
                    />
                  ) : (
                    <>
                      <p className="text-7xl mb-4">📸</p>

                      <p className="text-2xl font-bold text-gray-700">
                        Upload Your Skin Photo
                      </p>

                      <p className="text-gray-500 mt-3">
                        AI will analyze acne, redness, pores & pigmentation
                      </p>
                    </>
                  )}
                </label>
              </div>
            </div>
          </div>

          {/* Predict Button */}
          <button
            onClick={handlePredict}
            disabled={loading}
            className="w-full mt-10 py-5 rounded-full text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {loading
              ? 'Analyzing with AI...'
              : 'Get Personalized Recommendations'}
          </button>
        </motion.div>

        {/* Results */}
        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 bg-white/70 backdrop-blur-2xl rounded-[40px] shadow-2xl border border-white/40 p-10"
          >
            <h2 className="text-5xl font-bold text-center text-purple-700 mb-8">
              Your Personalized Recommendations
            </h2>

            <div className="text-center mb-10">
              <p className="text-5xl font-bold text-pink-600">
                {result.recommended_product}
              </p>

              <p className="text-2xl text-green-600 font-semibold mt-4">
                Confidence: {result.confidence}%
              </p>
            </div>

            {result.top_recommendations && (
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {result.top_recommendations.map((rec, i) => (
                  <div
                    key={i}
                    className="bg-white/80 rounded-3xl p-6 shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <p className="font-bold text-xl text-purple-700">
                      {rec.product_name}
                    </p>

                    <p className="text-pink-500 font-medium mt-1">
                      {rec.brand}
                    </p>

                    <p className="text-sm text-green-600 mt-3 font-semibold">
                      Match: {rec.confidence}%
                    </p>

                    <p className="text-sm text-gray-600 mt-4 line-clamp-4">
                      {rec.ingredients}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}