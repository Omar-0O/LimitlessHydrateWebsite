
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Glow",
    color: "bg-pink-500",
    description: "Healthy Hair, Skin, & Nails with Mixed Berries Flavor",
    image: "public/lovable-uploads/4f52415d-43c4-4182-8198-91373487c542.png",
    path: "/product/glow"
  },
  {
    id: 2,
    name: "Original",
    color: "bg-blue-500",
    description: "Essential Electrolytes with Blue Raspberry Flavor",
    image: "public/lovable-uploads/28d22a49-2b99-4a31-9371-74c25068278f.png",
    path: "/product/original"
  },
  {
    id: 3,
    name: "Kids",
    color: "bg-green-500",
    description: "Gentle Hydration with Watermelon Flavor",
    image: "public/lovable-uploads/2ccb83a5-04ca-4c0e-bdde-04171bd0c2ce.png",
    path: "/product/kids"
  },
  {
    id: 4,
    name: "Charge",
    color: "bg-amber-500",
    description: "Energy Boost with 130mg Caffeine and Coffee Flavor",
    image: "public/lovable-uploads/e8e1ee08-6a21-486f-9eba-6637463575b1.png",
    path: "/product/charge"
  },
];

const ProductCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="bg-white rounded-lg overflow-hidden shadow-md p-6 flex flex-col items-center"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-40 h-64 object-contain mb-4" 
          />
          <h3 className="text-xl font-bold mb-2 text-center">{product.name}</h3>
          <p className="text-gray-600 text-center mb-6">{product.description}</p>
          <Link to={product.path}>
            <Button className={`${product.color} text-white hover:opacity-90`}>
              Learn More
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
