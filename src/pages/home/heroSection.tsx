import { Link } from "react-router-dom";
import BackGroundImage from "../../assets/bg-image.jpg";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BackGroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Hero Card */}
        <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg text-center max-w-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Store
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the best products at unbeatable prices. Shop now and enjoy
            exclusive deals!
          </p>
          <Link
            to="/explore-page"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
