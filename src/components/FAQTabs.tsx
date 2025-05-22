
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GeneralFAQs from "./FAQSections/GeneralFAQs";
import IngredientFAQs from "./FAQSections/IngredientFAQs";
import UsageFAQs from "./FAQSections/UsageFAQs";
import AvailabilityFAQs from "./FAQSections/AvailabilityFAQs";

const FAQTabs = () => {
  return (
    <Tabs defaultValue="general" className="w-full mb-16">
      <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-transparent">
        <TabsTrigger 
          value="general"
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full px-6 py-2 text-sm"
        >
          General
        </TabsTrigger>
        <TabsTrigger 
          value="ingredients"
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full px-6 py-2 text-sm"
        >
          Ingredients
        </TabsTrigger>
        <TabsTrigger 
          value="usage"
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full px-6 py-2 text-sm"
        >
          Usage
        </TabsTrigger>
        <TabsTrigger 
          value="availability"
          className="data-[state=active]:bg-black data-[state=active]:text-white rounded-full px-6 py-2 text-sm"
        >
          Availability
        </TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <GeneralFAQs />
      </TabsContent>

      <TabsContent value="ingredients">
        <IngredientFAQs />
      </TabsContent>

      <TabsContent value="usage">
        <UsageFAQs />
      </TabsContent>

      <TabsContent value="availability">
        <AvailabilityFAQs />
      </TabsContent>
    </Tabs>
  );
};

export default FAQTabs;
