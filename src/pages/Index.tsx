import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import StrapiProductDisplay from "@/components/StrapiProductDisplay";
import HydrateFeatures from "@/components/HydrateFeatures";
import ProductShowcase from "@/components/ProductShowcase";
import ConnectHydrateSection from "@/components/ConnectHydrateSection";
import Footer from "@/components/Footer";

interface ProductData {
  title: string;
  description: string;
  image: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      }
    }
  };
  ctaText: string;
  name: string;
}

const Index = () => {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const strapiBaseUrl = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const strapiToken = import.meta.env.VITE_STRAPI_API_TOKEN;
        const apiUrl = `${strapiBaseUrl}/api/hydrate-products?populate=image&pagination[limit]=1`;
        
        // Prepare headers with authentication if token exists
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
          ...(strapiToken && { 'Authorization': `Bearer ${strapiToken}` })
        };

        // Attempt to fetch data with authentication
        let response = await fetch(apiUrl, { headers });

        // If authentication fails, try without token
        if (response.status === 403 && strapiToken) {
          response = await fetch(apiUrl, { 
            headers: { 'Content-Type': 'application/json' }
          });
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.data?.[0]?.attributes) {
          setProductData(data.data[0].attributes);
        } else {
          setProductData(null);
        }
      } catch (error) {
        // Handle error silently in production, but could be logged to monitoring service
        setProductData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [strapiBaseUrl]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        {productData && (
          <StrapiProductDisplay 
            productData={{
              heroTitle: productData.title,
              heroSubtitle: productData.description,
              mainImage: productData.image,
              ctaButtonText: productData.ctaText,
              productName: productData.name
            }} 
            strapiBaseUrl={strapiBaseUrl} 
          />
        )}
        <HydrateFeatures />
        <ProductShowcase />
      </div>
      <ConnectHydrateSection />
      <Footer />
    </div>
  );
};

export default Index;
