import HeroSection from "../home/heroSection";
import FeaturedProducts from "../home/featuredProduct";
import { Product } from "../../types";

const Home = () => {
  // Example product data
  interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;
    stock: number;
  }

  const products: Product[] = [
    {
      id: 1,
      name: "Winter Pine Candle",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0",
      description: "Fresh forest aroma with notes of cedar and vetiver",
      category: "Seasonal",
      stock: 50,
    },
    {
      id: 2,
      name: "Lavender Fields",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1580327344343-c716195d0d8a",
      description: "Calming floral scent with herbal undertones",
      category: "Floral",
      stock: 35,
    },
    {
      id: 3,
      name: "Vanilla Dream",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1580327344181-5e363310e3a1",
      description: "Warm vanilla bean with a hint of caramel",
      category: "Sweet",
      stock: 60,
    },
    {
      id: 4,
      name: "Ocean Breeze",
      price: 27.99,
      image: "https://images.unsplash.com/photo-1580327344343-5113146a4d6a",
      description: "Crisp aquatic fragrance with sea salt notes",
      category: "Fresh",
      stock: 25,
    },
    {
      id: 5,
      name: "Citrus Burst",
      price: 21.99,
      image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0",
      description: "Zesty blend of orange, lemon, and grapefruit",
      category: "Fruity",
      stock: 45,
    },
    {
      id: 6,
      name: "Sandalwood Sanctuary",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1580327344343-5113146a4d6a",
      description: "Rich woody aroma with earthy undertones",
      category: "Woody",
      stock: 30,
    },
    {
      id: 7,
      name: "Spiced Chai",
      price: 26.99,
      image: "https://images.unsplash.com/photo-1580327344181-5e363310e3a1",
      description: "Warm blend of cinnamon, cardamom, and black tea",
      category: "Spicy",
      stock: 40,
    },
    {
      id: 8,
      name: "Fresh Linen",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1580327344343-5113146a4d6a",
      description: "Clean cotton scent reminiscent of sun-dried laundry",
      category: "Clean",
      stock: 55,
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
