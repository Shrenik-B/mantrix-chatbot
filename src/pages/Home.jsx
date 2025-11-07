import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-16 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          Welcome to <span className="text-blue-600">MANTRIX</span>
        </h1>
        <p className="text-2xl text-gray-600 mb-12 animate-fade-in-delay">
          Your safe space for mental wellness and support
        </p>

        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-16 max-w-3xl mx-auto border border-blue-100 animate-slide-up">
          <p className="text-xl text-gray-700 italic mb-4">
            "It's okay to not be okay, and it's okay to talk about it."
          </p>
          <p className="text-sm text-gray-500">— Naomi Osaka</p>
        </div>

        
        <div className="flex gap-6 justify-center flex-wrap mb-20 animate-slide-up-delay">
          <Link 
            to="/chatbot"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Talk to Our AI Companion
          </Link>
          <Link 
            to="/forum"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Join the Community
          </Link>
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-50 animate-fade-in">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">AI Chatbot</h3>
            <p className="text-gray-600">
              24/7 support with our empathetic AI companion, ready to listen and guide you
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-50 animate-fade-in-delay">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Community Forum</h3>
            <p className="text-gray-600">
              Connect with others who understand, share experiences, and find support
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-50 animate-fade-in-delay-2">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Safe Space</h3>
            <p className="text-gray-600">
              A judgment-free environment where your mental health journey matters
            </p>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 animate-slide-up">
            <p className="text-gray-700 italic mb-3">
              "There is hope, even when your brain tells you there isn't."
            </p>
            <p className="text-sm text-gray-600">— John Green</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 animate-slide-up-delay">
            <p className="text-gray-700 italic mb-3">
              "You are not alone. You are seen. I am with you."
            </p>
            <p className="text-sm text-gray-600">— Shonda Rhimes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
