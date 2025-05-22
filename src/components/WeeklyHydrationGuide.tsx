
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WeeklyHydrationGuide = () => {
  const guideCards = [
    {
      id: 1,
      title: "Start your day with lemon water",
      description: "Boost your metabolism and get a vitamin C kick to start your morning.",
      image: "public/images/Wechyd1.jpg",
    },
    {
      id: 2,
      title: "Tea for mid-day slumps",
      description: "Switch to herbal tea for an afternoon pick-me-up without the caffeine crash.",
      image: "public/images/Wechyd2.jpg",
    },
    {
      id: 3,
      title: "Stay hydrated on workouts",
      description: "Learn how to properly hydrate before, during, and after exercise.",
      image: "public/images/Wechyd3.jpg",
    },
    {
      id: 4,
      title: "Create a bedtime hydration routine",
      description: "Find the right balance to stay hydrated without disrupting sleep.",
      image: "public/images/Wechyd4.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Your Weekly Hydration Guide</h2>
        <p className="text-gray-600 text-center mb-10">Simple tips to boost your daily hydration</p>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {guideCards.map((card) => (
              <CarouselItem key={card.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card className="h-full overflow-hidden border rounded-xl">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" className="w-full rounded-md">Read More</Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default WeeklyHydrationGuide;
