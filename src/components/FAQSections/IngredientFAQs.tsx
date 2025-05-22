
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const IngredientFAQs = () => {
  const ingredientQuestions = [
    {
      question: "What are the ingredients in your hydration packets?",
      answer: "Our hydration packets contain sodium citrate, potassium citrate, magnesium citrate, calcium citrate, vitamin C, zinc, B vitamins (B1, B3, B5, B6, B12), natural flavors, citric acid, malic acid, stevia leaf extract, and monk fruit extract. All ingredients are carefully sourced for quality and effectiveness."
    },
    {
      question: "Are your hydration packets natural?",
      answer: "Yes, we use only natural flavors, colors from fruit and vegetable juices, and natural sweeteners like stevia and monk fruit extract. Our products contain no artificial ingredients, preservatives, or synthetic colors."
    },
    {
      question: "Do your packets contain any allergens?",
      answer: "Our products are manufactured in a facility that processes common allergens like milk, eggs, wheat, soy, and tree nuts. While our formula itself doesn't contain these ingredients, those with severe allergies should be aware of potential cross-contamination risks."
    },
    {
      question: "What is monk fruit?",
      answer: "Monk fruit is a small round fruit native to southern China that has been used for centuries in traditional medicine. The extract is 100-250 times sweeter than sugar but contains zero calories and does not impact blood sugar levels, making it an excellent natural sweetener alternative."
    },
    {
      question: "How much sodium is in each packet?",
      answer: "Each packet contains 350mg of sodium, which is carefully calibrated to help replace what is lost through sweat without providing excessive amounts. This level is optimal for hydration without overloading on sodium."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {ingredientQuestions.map((item, index) => (
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

export default IngredientFAQs;
