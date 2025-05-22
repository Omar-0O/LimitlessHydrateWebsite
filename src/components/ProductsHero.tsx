import { Button } from "@/components/ui/button";

const ProductsHero = () => {
  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <div className="rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="p-8 md:p-12 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Discover Your<br />
              Hydration Upgrade
            </h1>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Learn More
            </Button>
          </div>
          
          {/* Right side - Product image with splash */}
          <div className="md:w-1/2 relative b">
            <img 
              src="public/images/firstinrprod.png" 
              alt="Limitless Hydrate with Splash Effect" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHero;
