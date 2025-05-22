
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Glow",
    color: "from-pink-400 to-purple-500",
    description: "Electrolyte drink mix for Hair, Skin & Nails Health",
    image: "public/lovable-uploads/4f52415d-43c4-4182-8198-91373487c542.png",
    path: "/product/glow"
  },
  {
    id: 2,
    name: "Charge",
    color: "from-amber-400 to-amber-600",
    description: "Essential electrolyte drink mix",
    image: "public/lovable-uploads/e8e1ee08-6a21-486f-9eba-6637463575b1.png",
    path: "/product/charge"
  },
  {
    id: 3,
    name: "Original",
    color: "from-blue-400 to-blue-600",
    description: "Essential electrolyte drink mix",
    image: "public/lovable-uploads/28d22a49-2b99-4a31-9371-74c25068278f.png",
    path: "/product/original"
  },
  {
    id: 4,
    name: "Kids",
    color: "from-red-400 via-red-500 to-green-500",
    description: "Essential electrolyte drink mix for kids",
    image: "public/lovable-uploads/2ccb83a5-04ca-4c0e-bdde-04171bd0c2ce.png",
    path: "/product/kids"
  },
];

const ProductShowcase = () => {
  return (
    <div className="py-16 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Refreshment</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Refreshing flavors and essential nutrients tailored to keep you energized and hydrated.
        </p>
      </div>
      
      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`rounded-lg overflow-hidden shadow-lg bg-gradient-to-r ${product.color} text-white`}
          >
            <div className="p-6">
              <div className="text-center mb-2">
                <h3 className="font-bold text-2xl mb-1">LIMITLESS</h3>
                <h4 className="font-bold text-3xl mb-1">HYDRATE</h4>
                <h5 className="font-semibold text-xl mb-3">{product.name}</h5>
                <p className="text-sm mb-6">{product.description}</p>
              </div>
              
              <div className="flex justify-center mb-4">
                <img 
                  src={product.image} 
                  alt={`Limitless Hydrate ${product.name}`} 
                  className="h-48 object-contain"
                />
              </div>
              
              <div className="flex justify-center">
                <Link to={product.path}>
                  <Button className="bg-white text-gray-800 hover:bg-gray-100 rounded-full px-6">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
