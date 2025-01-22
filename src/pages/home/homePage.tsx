import { useEffect, useState } from "react";
import HeroSection from "../home/heroSection";
import FeaturedProducts from "../home/featuredProduct";
import { Product } from "../../types";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=10"
        );
        if (!response.ok) throw new Error("Failed to fetch products");

        const data = await response.json();

        const storeProducts: Product[] = data.map((product: any) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.image,
          description: product.description,
          category: product.category,
          stock: Math.floor(Math.random() * 50) + 10,
          rating: product.rating.rate,
        }));

        setProducts(storeProducts);
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch products"
        );
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center py-12">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="text-center py-12 text-red-500">
        Error loading products: {error}
      </div>
    );

  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProducts products={products}/>
    </div>
  );
};

export default Home;
