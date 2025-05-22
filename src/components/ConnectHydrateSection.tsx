
import React from "react";
import { Instagram } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const connectImages = [
  {
    id: 1,
    image: "public/lovable-uploads/a4677da5-9b26-4a27-90f9-f07820291103.png",
    alt: "Limitless Hydrate Kids product"
  },
  {
    id: 2,
    image: "public/lovable-uploads/afbcab5d-2beb-4b2a-bf32-beb9ce24fd7a.png",
    alt: "Hydration Hack with Limitless Hydrate Glow"
  },
  {
    id: 3,
    image: "public/lovable-uploads/ae0d8595-f76d-45d8-9138-d03b8f67a0de.png",
    alt: "Stay Hydrated with Limitless Hydrate Original"
  },
  {
    id: 4,
    image: "public/lovable-uploads/434535f9-3e50-4ad0-bb0c-2ee2c36c0fca.png",
    alt: "Limitless Hydrate Kids product"
  },
  {
    id: 5,
    image: "public/lovable-uploads/a4677da5-9b26-4a27-90f9-f07820291103.png",
    alt: "Limitless Hydrate Kids product"
  }
];

const ConnectHydrateSection = () => {
  return (
    <div className="py-16 bg-[#D3E4FD]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Connect & Hydrate</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-2">
            Get Water+ tips, inspiring stories, and exclusive moments!
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-700">
            <span>Follow us on Instagram</span>
            <a 
              href="https://instagram.com/limitlesshydrate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold flex items-center hover:text-blue-600 transition-colors"
            >
              <Instagram className="h-4 w-4 mr-1" />
              @limitlesshydrate
            </a>
          </div>
        </div>
        
        {/* Desktop Layout: Row of images */}
        <div className="hidden md:grid grid-cols-5 gap-4 max-w-5xl mx-auto">
          {connectImages.map((item) => (
            <HoverCard key={item.id}>
              <HoverCardTrigger asChild>
                <a 
                  href="https://instagram.com/limitlesshydrate" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full aspect-square object-cover" 
                  />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@limitlesshydrate</h4>
                    <p className="text-sm">
                      Check out our Instagram for more hydration tips and product updates!
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        
        {/* Mobile Layout: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {connectImages.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <a 
                    href="https://instagram.com/limitlesshydrate" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img 
                      src={item.image} 
                      alt={item.alt}
                      className="w-full aspect-square object-cover" 
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ConnectHydrateSection;
