import HeroSection from "../home/heroSection";
import FeaturedProducts from "../home/featuredProduct";
import { Product } from "../../types";

const Home = () => {
  // Example product data
  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 4,
      name: "Product 4",
      price: 49.99,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 5,
      name: "Product 5",
      price: 59.99,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 6,
      name: "Product 6",
      price: 69.99,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 7,
      name: "Product 7",
      price: 79.99,
      image: "https://picsum.photos/300/200",
    },
    {
      id: 8,
      name: "Product 8",
      price: 89.99,
      image: "https://picsum.photos/300/200",
    },
  ];

  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedProducts products={products} />
    </div>
  );
};

export default Home;
