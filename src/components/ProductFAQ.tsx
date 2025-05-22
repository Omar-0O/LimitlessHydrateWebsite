
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ProductFAQ = () => {
  const faqs = [
    {
      question: "When should I use Limitless Hydrate Original?",
      answer: "Limitless Hydrate Original is ideal for use before, during, or after physical activity, during travel, after a night out, when sick, or any time you need enhanced hydration. Many customers also use it as part of their daily routine for maintaining optimal hydration levels."
    },
    {
      question: "How do I use Limitless Hydrate Original?",
      answer: "Simply mix one packet with 12-16oz of cold water. For best results, shake vigorously or stir until completely dissolved. You can adjust the water amount to your taste preference."
    },
    {
      question: "What are the key benefits of Limitless Hydrate Original?",
      answer: "Limitless Hydrate Original provides rapid hydration, electrolyte replenishment, improved physical performance, faster recovery, and enhanced mental clarity. Our unique formula is designed for maximum absorption at the cellular level."
    },
    {
      question: "What does it taste like?",
      answer: "Our Blue Raspberry flavor offers a refreshing, not-too-sweet taste that customers love. It's designed to be enjoyable without the excessive sweetness found in typical sports drinks."
    },
    {
      question: "How often should I drink Limitless Hydrate Original every day?",
      answer: "We recommend 1-3 servings daily, depending on your activity level, climate, and individual hydration needs. Athletes in training might benefit from multiple servings, while someone less active might need just one serving daily."
    },
    {
      question: "Is it suitable for people with dietary restrictions?",
      answer: "Yes, Limitless Hydrate Original is gluten-free, vegan, keto-friendly, non-GMO, and contains no artificial colors, flavors or preservatives."
    },
    {
      question: "Does it contain caffeine?",
      answer: "No, Limitless Hydrate Original is caffeine-free, making it suitable for use any time of day or night without affecting your sleep."
    },
    {
      question: "Can I use it during workouts?",
      answer: "Absolutely! Limitless Hydrate Original is perfect for consumption during workouts to maintain hydration levels and support performance."
    },
    {
      question: "Where was Limitless Hydrate Original developed?",
      answer: "Limitless Hydrate Original was developed in the USA in collaboration with sports nutrition scientists and hydration specialists to create the most effective hydration formula possible."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 mb-8">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b">
            <AccordionTrigger className="text-left font-medium py-4">
              {index + 1}. {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ProductFAQ;
