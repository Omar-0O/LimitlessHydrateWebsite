import React from "react";
import { 
  Zap, 
  Droplet,
  WheatOff,
  Candy,
} from "lucide-react";

const FeatureRow = ({ 
  bgColorText, 
  textColor, 
  titleImageSrc, 
  titleAlt,
  mainText, 
  features, 
  imageSrc, 
  altImage, 
  textOrder, 
  imageOrder,
  isDark = false,
  customFeatures 
}) => {
  return (
    <div className={`max-w-[1440px] w-full h-[688px] mx-auto flex flex-col md:flex-row overflow-hidden rounded-xl shadow-xl`}>
      {/* Text Section */}
      <div 
        className={`w-full md:w-1/2 ${bgColorText} ${textColor} pt-12 px-8 md:px-12 lg:px-20 pb-8 md:pb-12 flex flex-col ${customFeatures ? 'items-start text-left' : 'justify-center items-start text-left'} ${textOrder}`}
      >
        {titleImageSrc && !customFeatures && (
          <div className="w-full md:w-[328px] h-[128px] mb-6 md:mb-8 flex justify-start items-center">
            <img src={titleImageSrc} alt={titleAlt} className="max-h-full max-w-full object-contain" />
          </div>
        )}

        {customFeatures && customFeatures.title && (
             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>{customFeatures.title}</h2>
        )}

        <p className={`${isDark ? 'text-gray-300' : 'text-gray-800'} mb-8 md:mb-10 text-sm md:text-base leading-relaxed max-w-xl`}>
          {mainText}
        </p>
        
        {features && !customFeatures && (
            <div className={`grid grid-cols-2 md:flex md:flex-row md:justify-between items-center gap-4 md:gap-x-6`}>
            {features.map((feature, index) => (
                <React.Fragment key={index}>
                <div className="flex items-center gap-2">
                    {feature.icon}
                    <span className="text-xs md:text-sm font-medium">{feature.text}</span>
                </div>
                {index < features.length - 1 && (
                    <img src="public/5T.png" alt="Separator" className="hidden md:block h-8 w-auto" />
                )}
                </React.Fragment>
            ))}
            </div>
        )}

        {customFeatures && customFeatures.items && (
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-4 w-full max-w-md">
            {customFeatures.items.map((item, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                <div className="mb-2 h-10 w-10 md:h-12 md:w-12"> {/* Container for icon */}
                  {item.iconPlaceholder && typeof item.iconPlaceholder === 'string' ? (
                    <img 
                      src={item.iconPlaceholder.startsWith('public/') ? item.iconPlaceholder.replace('public/', '/') : item.iconPlaceholder} 
                      alt="" 
                      className="w-full h-full object-contain" 
                    />
                  ) : item.iconPlaceholder ? ( 
                    item.iconPlaceholder
                  ) : ( 
                    <div className="w-full h-full bg-gray-500 rounded opacity-50 flex items-center justify-center text-xs">
                      Icon
                    </div>
                  )}
                </div>
                <span className="text-xs sm:text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className={`w-full md:w-1/2 bg-gray-100 ${imageOrder}`}>
        <img 
          src={imageSrc} 
          alt={altImage} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};


// HydrateFeatures component remains the same as your provided version
const HydrateFeatures = () => {
  const yellowSectionFeatures = [
    { icon: <Zap className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />, text: "Optimized Osmolarity" },
    { icon: <Droplet className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />, text: "238mg Electrolytes" },
    { icon: <WheatOff className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />, text: "Gluten & Lactose Free" },
    { icon: <Candy className="h-5 w-5 md:h-6 md:w-6 text-pink-500" />, text: "With Xylitol" },
  ];

  const blueSectionCustomFeatures = {
    title: "Stay hydrated, feel elevated",
    items: [
        { 
          iconPlaceholder: "public/images/herovec1.png", 
          text: "Hydration, Elevated" 
        },
        { 
          iconPlaceholder: "public/images/herovec2.png",
          text: "Tailored for Your Lifestyle" 
        },
        { 
          iconPlaceholder: "public/images/herovec3.png",
          text: "Infused with Electrolytes, Vitamins, and More" 
        },
        { 
          iconPlaceholder: "public/images/herovec4.png",
          text: "Amazing Taste" 
        },
    ]
  };

  return (
    <div className="w-full py-12 px-4">
      <FeatureRow 
        bgColorText="bg-[#F4C448]"
        textColor="text-gray-800"
        titleImageSrc="public/Vector.png"
        titleAlt="Limitless Logo"
        mainText="Fuel your body with essential electrolytes, vitamins, and great taste. Whether you're working out or on the go, Limitless Hydrate keeps you refreshed, replenished, and energized."
        features={yellowSectionFeatures}
        imageSrc="public/images/hero1.jpg"
        altImage="Limitless Hydrate Products"
        textOrder="order-1"
        imageOrder="order-2"
      />

      <FeatureRow 
        bgColorText="bg-[#2D6AAE]"
        textColor="text-white"
        mainText="with a refreshing blend of electrolytes, vitamins, and great taste—designed to keep you energized and balanced throughout your day."
        customFeatures={blueSectionCustomFeatures}
        imageSrc="public/images/hero2.jpg"
        altImage="Person using Limitless Hydrate"
        textOrder="order-2 md:order-2"
        imageOrder="order-1 md:order-1"
        isDark={true}
      />
    </div>
  );
};

export default HydrateFeatures;