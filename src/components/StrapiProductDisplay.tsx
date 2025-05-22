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

interface StrapiProductDisplayProps {
  productData: ProductData | null;
  strapiBaseUrl: string;
}

const StrapiProductDisplay = ({ productData, strapiBaseUrl }: StrapiProductDisplayProps) => {
  // Early return for missing product data
  if (!productData) {
    return (
      <div className="w-full h-[240px] md:h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-500">Product information not available.</p>
      </div>
    );
  }

  // Construct image URL with fallback
  const getImageUrl = () => {
    if (productData.mainImage?.data?.attributes?.url) {
      return `${strapiBaseUrl}${productData.mainImage.data.attributes.url}`;
    }
    // Fallback to default image
    return '/images/default-product.png';
  };

  const imageUrl = getImageUrl();
  const imageAlt = productData.mainImage?.data?.attributes?.alternativeText || productData.productName;

  return (
    <section className="relative w-full h-[240px] md:h-[600px] overflow-hidden rounded-lg mb-10">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('${imageUrl}')`,
          backgroundPosition: "center 60%" 
        }}
        role="img"
        aria-label={imageAlt}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-end items-start p-8 md:p-16">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {productData.heroTitle}
          </h1>
          <p className="text-white text-base md:text-lg mb-6">
            {productData.heroSubtitle}
          </p>
          
          <Link to="/products">
            <Button 
              variant="outline" 
              className="bg-white hover:bg-white/90 text-black rounded-full px-6"
            >
              {productData.ctaButtonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StrapiProductDisplay; 