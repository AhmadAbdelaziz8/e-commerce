const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Background Section */}
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/src/assets/bg-image.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  flex items-center justify-center">
          {/* Hero Card */}
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center max-w-md">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to Our Store
            </h1>
            <p className="text-gray-600 mb-6">
              Discover the best products at unbeatable prices. Shop now and
              enjoy exclusive deals!
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Cards */}
          {[1, 2, 3, 4].map((product) => (
            <div
              key={product}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={`/src/assets/product-${product}.jpg`}
                alt={`Product ${product}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Product {product}
                </h3>
                <p className="text-gray-600">$19.99</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-white mb-6">
            Subscribe to get the latest updates and exclusive offers.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-r-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
