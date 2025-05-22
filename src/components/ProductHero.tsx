import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Award, Leaf } from "lucide-react";

const ProductHero = () => {
  return (
    <div className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Product Image Section */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-105"></div>
              <img 
                src="public/images/prod3.png" 
                alt="Limitless Hydrate Original" 
                className="relative max-w-[300px] md:max-w-[400px] transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          
          {/* Product Info Section */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Limitless Hydrate Original
              </h1>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="bg-blue-50 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Quality Assured</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="bg-green-50 p-2 rounded-full">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">100% Natural</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="bg-amber-50 p-2 rounded-full">
                    <Award className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Award Winning</span>
                </div>
                <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                  <div className="bg-purple-50 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Fast Absorption</span>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              The original formula that started it all. Our breakthrough hydration technology 
              delivers rapid electrolyte absorption for optimal hydration. Perfect for athletes, 
              busy professionals, or anyone who wants to feel their best through proper hydration.
            </p>
            
            {/* Flavor Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Flavor:</h3>
              <div className="flex gap-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 ring-1 ring-blue-200">
                  Blue Raspberry
                </span>
              </div>
            </div>
            
            {/* Availability Options */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Available as:</h3>
              <div className="flex gap-4">
                <button className="px-6 py-3 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  30 packets
                </button>
                <button className="px-6 py-3 rounded-lg border-2 border-blue-500 bg-blue-50 hover:bg-blue-100 transition-colors duration-200 text-sm font-medium text-blue-700">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            
            {/* Buy Button */}
            <Button 
              className="w-full md:w-auto bg-black hover:bg-gray-900 text-white rounded-lg text-base font-semibold px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Buy Now - $39.99
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
