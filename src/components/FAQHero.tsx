
import React from 'react';

const FAQHero = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative rounded-xl overflow-hidden">
        {/* Background image */}
        <div className="relative w-full h-[360px] md:h-[420px]">
          <img 
            src="public/lovable-uploads/94447b25-cdda-4e66-b7cc-c97ec78660e8.png" 
            alt="Limitless Hydrate Product on Desk" 
            className="w-full h-full object-cover"
          />
          
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          
          {/* Text content */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-md text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Got Questions?</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We've Got Answers</h2>
            
            <p className="text-base md:text-lg opacity-90">
              Find everything you need to know about Limitless Hydrate, from ingredients to usage and availability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQHero;
