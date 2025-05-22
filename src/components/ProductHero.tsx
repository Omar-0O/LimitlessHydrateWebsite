
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Award, Leaf } from "lucide-react";

const ProductHero = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Product Image */}
        <div className="flex justify-center">
          <img 
            src="public/lovable-uploads/342ffa65-ee13-4ca2-81b9-4630c691dde6.png" 
            alt="Limitless Hydrate Original" 
            className="max-w-[300px] md:max-w-[400px]"
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Limitless Hydrate Original</h1>
          
          {/* Features */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-2">
                <Shield className="h-4 w-4 text-gray-700" />
              </div>
              <span className="text-sm">Quality Assured</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-2">
                <Leaf className="h-4 w-4 text-gray-700" />
              </div>
              <span className="text-sm">100% Natural</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-2">
                <Award className="h-4 w-4 text-gray-700" />
              </div>
              <span className="text-sm">Award Winning</span>
            </div>
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-full mr-2">
                <Zap className="h-4 w-4 text-gray-700" />
              </div>
              <span className="text-sm">Fast Absorption</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-sm text-gray-700 mb-6">
            The original formula that started it all. Our breakthrough hydration technology 
            delivers rapid electrolyte absorption for optimal hydration. Perfect for athletes, 
            busy professionals, or anyone who wants to feel their best through proper hydration.
          </p>
          
          {/* Flavor */}
          <div className="mb-4">
            <h3 className="font-medium mb-2">Flavor:</h3>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Blue Raspberry</span>
            </div>
          </div>
          
          {/* Availability */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Available as:</h3>
            <div className="flex gap-3">
              <div className="border border-black px-4 py-2 rounded-md text-sm">30 packets</div>
              <div className="border border-blue-500 bg-blue-50 px-4 py-2 rounded-md text-sm font-medium">SUBSCRIBE</div>
            </div>
          </div>
          
          {/* Buy Button */}
          <Button className="bg-black hover:bg-black/90 text-white rounded-md text-sm px-8 py-6">
            Buy Now - $39.99
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
