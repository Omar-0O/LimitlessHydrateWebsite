
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const AvailabilityFAQs = () => {
  const availabilityQuestions = [
    {
      question: "Where can I purchase Limitless Hydrate?",
      answer: "Limitless Hydrate is available directly through our website, as well as select retail partners nationwide including specialty health stores, fitness centers, and online marketplaces. Check our website's store locator for a retailer near you."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we currently ship to over 30 countries. International shipping rates and delivery timeframes vary by location. You can find specific shipping information during checkout or on our shipping policy page."
    },
    {
      question: "What is the shelf life of Limitless Hydrate?",
      answer: "Limitless Hydrate packets have a shelf life of 24 months from the date of manufacture when stored in a cool, dry place. The expiration date is printed on each packet and outer packaging."
    },
    {
      question: "Do you offer subscription options?",
      answer: "Yes, we offer flexible subscription plans that save you 15% on every order. You can choose to receive your preferred products every 15, 30, 45, or 60 days, and you can pause, skip, or cancel your subscription anytime."
    },
    {
      question: "How long does shipping take?",
      answer: "Domestic orders typically ship within 1-2 business days and arrive within 3-5 business days with standard shipping. Expedited shipping options are available at checkout for faster delivery."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {availabilityQuestions.map((item, index) => (
        <AccordionItem 
          key={index} 
          value={`item-${index}`}
          className="border-t border-gray-200 last:border-b"
        >
          <AccordionTrigger className="py-5 text-lg font-medium">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 pb-5 text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AvailabilityFAQs;
