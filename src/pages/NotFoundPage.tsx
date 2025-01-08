import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-64 h-64 bg-white/10 rounded-full top-1/4 left-1/4 animate-float"></div>
        <div className="absolute w-48 h-48 bg-white/10 rounded-full top-1/2 right-1/4 animate-float animation-delay-2000"></div>
        <div className="absolute w-32 h-32 bg-white/10 rounded-full bottom-1/4 left-1/2 animate-float animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-lg text-white/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={goHome}
          className="px-8 py-3 bg-white text-purple-900 font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
