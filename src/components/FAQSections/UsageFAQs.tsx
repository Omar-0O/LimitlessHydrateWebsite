
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const UsageFAQs = () => {
  const usageInstructions = [
    {
      question: "When should I use Limitless Hydrate Original?",
      answer: "Limitless Hydrate Original is perfect for use before, during, or after physical activity, during travel, after a night out, when sick, or any time you need enhanced hydration. Many customers incorporate it into their daily routine."
    },
    {
      question: "How do I use the hydration packets?",
      answer: "Simply mix one packet with 12-16oz (350-470ml) of cold water. Shake or stir until completely dissolved. You can adjust the water amount to your taste preference—more water for a lighter flavor, less for a stronger taste."
    },
    {
      question: "Can I mix it with hot water?",
      answer: "We don't recommend mixing with hot water as it may affect the efficacy of some ingredients and alter the flavor profile. Room temperature or cold water works best for optimal taste and effectiveness."
    },
    {
      question: "Is it possible to use with dietary restrictions?",
      answer: "Yes, our product is compatible with many dietary restrictions as it's gluten-free, vegan, keto-friendly, non-GMO, and contains no artificial ingredients. It's designed to be accessible to as many people as possible."
    },
    {
      question: "Is overdosage possible?",
      answer: "While our product is safe when used as directed, consuming excessive amounts may cause digestive discomfort or electrolyte imbalances. We recommend following the suggested serving guidelines of 1-3 packets per day depending on your activity level and needs."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {usageInstructions.map((item, index) => (
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

export default UsageFAQs;
