// pages/ExplorePage.tsx
import { Fade, Slide } from "react-awesome-reveal";
import { useEffect, useState } from "react";
import { Product } from "../types";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import {
  XMarkIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// Mock data - replace with your actual data source
const allProducts: Product[] = [
  // Your product array here
];

const ExplorePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("price-asc");
  const [showFilters, setShowFilters] = useState(false);

  // Get filtered and sorted products
  const filteredProducts = allProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "all" || product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  // Sync state with URL parameters
  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
    setSelectedCategory(searchParams.get("category") || "all");
    setSortBy(searchParams.get("sort") || "price-asc");
  }, [searchParams]);

  // Update URL when filters change
  const updateFilters = () => {
    setSearchParams({
      ...(searchQuery && { q: searchQuery }),
      ...(selectedCategory !== "all" && { category: selectedCategory }),
      sort: sortBy,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Filters Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <Fade triggerOnce>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-full border rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg sm:hidden"
              >
                <FunnelIcon className="h-5 w-5" />
                Filters
              </button>

              {(showFilters || window.innerWidth >= 640) && (
                <Slide triggerOnce direction={showFilters ? "down" : "left"}>
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <select
                      className="px-4 py-2 border rounded-lg"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="all">All Categories</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      {/* Add more categories */}
                    </select>

                    <select
                      className="px-4 py-2 border rounded-lg"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="name">Alphabetical</option>
                    </select>

                    <button
                      onClick={updateFilters}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                      Apply
                    </button>

                    {showFilters && (
                      <button
                        onClick={() => setShowFilters(false)}
                        className="sm:hidden absolute top-4 right-4"
                      >
                        <XMarkIcon className="h-6 w-6 text-gray-500" />
                      </button>
                    )}
                  </div>
                </Slide>
              )}
            </div>
          </Fade>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Fade triggerOnce cascade damping={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fade>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No products found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
