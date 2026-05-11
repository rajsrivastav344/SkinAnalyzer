export default function Policy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl p-12">
        <h1 className="text-5xl font-bold text-purple-700 mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            GlowPredict respects your privacy and protects your uploaded images
            and skincare information.
          </p>

          <p>
            Your uploaded photos are used only for AI analysis and recommendation
            generation.
          </p>

          <p>
            We do not sell or share your personal information with third parties.
          </p>

          <p>
            Users must create an account to save reports and access personalized
            skincare recommendations.
          </p>

          <p>
            By using GlowPredict, you agree to our privacy and security policies.
          </p>
        </div>
      </div>
    </div>
  );
}