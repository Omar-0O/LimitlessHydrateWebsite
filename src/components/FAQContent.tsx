
import FAQTabs from "./FAQTabs";
import ContactForm from "./ContactForm";

const FAQContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          Find answers to common questions about our products, ingredients, usage, and availability.
        </p>
      </div>
      
      <FAQTabs />
      
      <ContactForm />
    </div>
  );
};

export default FAQContent;
