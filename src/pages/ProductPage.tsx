
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/ProductHero";
import ProductImage from "@/components/ProductImage";
import ProductIngredients from "@/components/ProductIngredients";
import ProductFAQ from "@/components/ProductFAQ";

const ProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#E9F6FE]">
      <Navbar />
      <div className="flex-grow">
        <ProductHero />
        <ProductImage />
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-center mb-12">What's Inside?</h2>
          <ProductIngredients />
        </div>
        <ProductFAQ />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
