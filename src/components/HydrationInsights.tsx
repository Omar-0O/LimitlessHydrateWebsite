import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const HydrationInsightsModified = () => {
  const insightCardsData = [
    {
      id: 1,
      title: "5 Reasons Why Electrolytes Matter More Than You Think",
      image: "public/images/hydsci1.jpg"
    },
    {
      id: 2,
      title: "The science behind hydration",
      image: "public/images/hydsci2.jpg"
    },
    {
      id: 3,
      title: "Debunking common hydration myths",
      image: "public/images/hydsci3.jpg"
    },
    {
      id: 4,
      title: "Hydration's role in performance",
      image: "public/images/hydsci4.jpg"
    },
    {
      id: 5,
      title: "Why electrolytes matter",
      image: "public/images/hydsci5.jpg"
    },
    {
      id: 6,
      title: "Hydration and immune health",
      image: "public/images/hydsci6.jpg"
    },
    {
      id: 7,
      title: "Hydration for skin and beauty",
      image: "public/images/hydsci7.png"
    },
    {
      id: 8,
      title: "How much water you really need",
      image: "public/images/hydsci8.jpg"
    }
  ];

  return (
    <section className="py-14 px-4 bg-[#E9F6FE]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Hydration Science & Wellness Insights</h2>
        <p className="text-gray-700 text-center mb-10 md:mb-12 text-sm md:text-base">
          Expert-backed knowledge to help you stay optimally hydrated
        </p>
        
        {/* Updated grid classes here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {insightCardsData.map((card) => (
            <Card key={card.id} className="overflow-hidden bg-white rounded-2xl shadow-lg flex flex-col">
              <div className="h-48 sm:h-52 md:h-56 w-full overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5 md:p-6 flex-grow">
                <h3 className="font-bold text-lg leading-tight mb-3 text-gray-800 min-h-[3em]">{card.title}</h3>
              </CardContent>
              <CardFooter className="px-5 md:px-6 pb-5 md:pb-6 pt-0 mt-auto">
                <Button 
                  variant="default"
                  className="w-full bg-black text-white hover:bg-gray-800 rounded-full text-sm py-2.5"
                >
                  Read article
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HydrationInsightsModified;