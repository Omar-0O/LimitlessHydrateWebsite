
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQContent from "@/components/FAQContent";
import FAQHero from "@/components/FAQHero";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#E9F6FE]">
      <Navbar />
      <div className="flex-grow">
        <FAQHero />
        <div className="container mx-auto px-4 py-12">
          <FAQContent />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
