
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const GeneralFAQs = () => {
  const generalQuestions = [
    {
      question: "What are your hydration packets made of?",
      answer: "Our hydration packets contain a blend of essential electrolytes, vitamins, and minerals designed to replenish what your body loses through exercise, heat, or illness. Each packet includes sodium, potassium, magnesium, and calcium in optimal ratios for hydration, along with B vitamins and zinc."
    },
    {
      question: "What are the key benefits of Limitless Hydrate Original?",
      answer: "Limitless Hydrate Original provides rapid hydration, electrolyte replenishment, improved physical performance, faster recovery, and enhanced mental clarity. Our formula is designed for maximum absorption at the cellular level without artificial ingredients."
    },
    {
      question: "What flavors are available?",
      answer: "We currently offer Blue Raspberry, Watermelon, Lemon-Lime, and Mixed Berry flavors. All our flavors use natural ingredients and contain no artificial colors or sweeteners."
    },
    {
      question: "How often should I consume Limitless Hydrate every day?",
      answer: "We recommend 1-3 servings daily, depending on your activity level, climate, and individual hydration needs. Athletes in training might benefit from multiple servings, while someone less active might need just one serving daily."
    },
    {
      question: "Is it suitable for people with dietary restrictions?",
      answer: "Yes, Limitless Hydrate is gluten-free, vegan, keto-friendly, non-GMO, and contains no artificial colors, flavors, or preservatives. However, always check the ingredient list if you have specific allergies."
    },
    {
      question: "Does it contain caffeine?",
      answer: "No, Limitless Hydrate Original is caffeine-free, making it suitable for use any time of day or night without affecting your sleep."
    },
    {
      question: "When can I use Limitless Hydrate?",
      answer: "You can use Limitless Hydrate before, during, or after workouts, when traveling, after a night out, when feeling under the weather, or anytime you need enhanced hydration throughout your day."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {generalQuestions.map((item, index) => (
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

export default GeneralFAQs;
