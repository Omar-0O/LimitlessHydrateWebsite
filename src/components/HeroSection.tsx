import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductData {
  heroTitle: string;
  heroSubtitle: string;
  mainImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      }
    }
  };
  ctaButtonText: string;
  productName: string;
}

interface HeroSectionProps {
  productData: ProductData | null;
}

const HeroSection = ({ productData }: HeroSectionProps) => {
  const strapiBaseUrl = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';
  const imageUrl = productData?.mainImage?.data?.attributes?.url 
    ? `${strapiBaseUrl}${productData.mainImage.data.attributes.url}`
    : 'public/lovable-uploads/c0b48a98-b2f0-499f-a821-7664df5e92cc.png';

  return (
    <div className="relative w-full h-[240px] md:h-[600px] overflow-hidden rounded-lg mb-10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: "center 60%" 
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end items-start p-8 md:p-16">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {productData?.heroTitle || 'Water+'}
          </h1>
          <p className="text-white text-base md:text-lg mb-6">
            {productData?.heroSubtitle || 'Limitless Hydrate redefines hydration with advanced electrolytes and clean ingredients. Designed for performance, recovery, and everyday wellness, our formulas keep you at your best—no matter your lifestyle.'}
          </p>
          
          <Link to="/products">
            <Button variant="outline" className="bg-white hover:bg-white/90 text-black rounded-full px-6">
              {productData?.ctaButtonText || 'Learn More'}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;