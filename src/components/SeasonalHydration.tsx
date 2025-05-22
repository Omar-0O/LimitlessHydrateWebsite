const SeasonalHydrationModified = () => {
  const sectionHeight = "h-96 md:h-[450px]";
  const textPaddingY = "py-10 md:py-16";

  return (
    <section className="py-12 md:py-16"> {/* Padding رأسي للمقطع بأكمله */}
      {/* Section Title Area */}
      <div className="bg-[#E9F6FE] py-10 md:py-14 text-center mb-12 md:mb-16"> {/* الخلفية والـ padding والتوسيط والهامش السفلي */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3"> {/* حجم الخط ولونه والهامش السفلي */}
          Hydration Through the Seasons
        </h1>
        <h2 className="text-md sm:text-lg text-gray-600"> {/* حجم الخط ولونه */}
          Optimize hydration based on the season.
        </h2>
      </div>

      {/* Container for the three stacked sections */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Summer Section: Text Left, Image Right */}
        <div className={`flex flex-col md:flex-row items-stretch shadow-xl rounded-2xl overflow-hidden`}>
          {/* Text Box - Summer */}
          <div className={`w-full md:w-[600px] lg:w-[640px] max-w-full ${sectionHeight} bg-white 
                          ${textPaddingY} px-6 sm:px-8 md:px-10
                          flex flex-col justify-center gap-[10px] 
                          order-2 md:order-1 
                          rounded-l-none md:rounded-l-2xl rounded-t-2xl md:rounded-t-none md:rounded-tr-none`}>
            <h3 className="text-2xl md:text-3xl font-bold">Summer Hydration</h3>
            <h4 className="font-semibold text-gray-600 text-md md:text-lg">Extra Electrolytes for Heat & Sweat</h4>
            <p className="text-gray-700 text-sm md:text-base">
              Hot weather increases sweat loss, leading to faster dehydration. Replenishing 
              electrolytes helps maintain energy, prevent muscle cramps, and keep you 
              cool. Stay ahead of the heat with proper hydration and balanced minerals.
            </p>
          </div>
          {/* Image - Summer */}
          <div className={`w-full md:flex-1 order-1 md:order-2 ${sectionHeight}`}>
            <img 
              src="public/images/sea1.jpg" 
              alt="Summer Hydration"
              className={`w-full h-full object-cover 
                          rounded-r-none md:rounded-r-2xl rounded-b-2xl md:rounded-b-none md:rounded-bl-none`}
            />
          </div>
        </div>
        
        {/* Winter Section: Image Left, Text Right */}
        <div className={`flex flex-col md:flex-row items-stretch shadow-xl rounded-2xl overflow-hidden mt-0`}>
          {/* Image - Winter */}
          <div className={`w-full md:flex-1 ${sectionHeight}`}>
            <img 
              src="public/images/sea2.jpg"
              alt="Winter Hydration"
              className={`w-full h-full object-cover 
                          rounded-l-none md:rounded-l-2xl rounded-t-2xl md:rounded-t-none md:rounded-tr-none`}
            />
          </div>
          {/* Text Box - Winter */}
          <div className={`w-full md:w-[600px] lg:w-[640px] max-w-full ${sectionHeight} bg-white  /* Corrected width from 662px */
                          ${textPaddingY} px-6 sm:px-8 md:px-10 
                          flex flex-col justify-center gap-[10px]
                          rounded-r-none md:rounded-r-2xl rounded-b-2xl md:rounded-b-none md:rounded-bl-none`}>
            <h3 className="text-2xl md:text-3xl font-bold">Winter Hydration</h3>
            <h4 className="font-semibold text-gray-600 text-md md:text-lg">Hydrate Even When You Don't Feel Thirsty</h4>
            <p className="text-gray-700 text-sm md:text-base">
              Cold temperatures can reduce thirst signals, making dehydration more 
              common than you think. Drinking enough fluids supports circulation, skin health, 
              and immune function during colder months. Keep sipping, even when it's chilly!
            </p>
          </div>
        </div>
        
        {/* Spring/Fall Section: Text Left, Image Right */}
        <div className={`flex flex-col md:flex-row items-stretch shadow-xl rounded-2xl overflow-hidden mt-0`}>
          {/* Text Box - Spring/Fall */}
          <div className={`w-full md:w-[600px] lg:w-[640px] max-w-full ${sectionHeight} bg-white 
                          ${textPaddingY} px-6 sm:px-8 md:px-10 
                          flex flex-col justify-center gap-[10px] 
                          order-2 md:order-1
                          rounded-l-none md:rounded-l-2xl rounded-t-2xl md:rounded-t-none md:rounded-tr-none`}>
            <h3 className="text-2xl md:text-3xl font-bold">Spring/Fall Hydration</h3>
            <h4 className="font-semibold text-gray-600 text-md md:text-lg">Balancing Hydration with Changing Climates</h4>
            <p className="text-gray-700 text-sm md:text-base">
              As temperatures fluctuate, your body's hydration needs shift. Seasonal 
              transitions can affect energy levels, digestion, and overall wellness. Stay 
              hydrated with electrolyte-rich drinks to keep your body in sync with the changing 
              weather.
            </p>
          </div>
          {/* Image - Spring/Fall */}
          <div className={`w-full md:flex-1 order-1 md:order-2 ${sectionHeight}`}>
            <img 
              src="public/images/sea3.jpg"
              alt="Spring/Fall Hydration"
              className={`w-full h-full object-cover
                          rounded-r-none md:rounded-r-2xl rounded-b-2xl md:rounded-b-none md:rounded-bl-none`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHydrationModified;