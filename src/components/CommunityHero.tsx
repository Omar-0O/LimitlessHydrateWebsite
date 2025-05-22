import React from 'react';

// ... (sectionsData remains as is)
const sectionsData = [
  // --- Top row ---
  {
    id: 1,
    type: 'colorBlock',
    textLines: ["Hydrate for Radiance"],
    backgroundColor: "bg-pink-500",
    textColor: "text-white",
  },
  {
    id: 2,
    type: 'image',
    imageUrl: "public/images/firstGuy.png",
  },
  {
    id: 3,
    type: 'colorBlock',
    textLines: ["Fuel Their Play,", "Keep Them Hydrated"],
    backgroundColor: "bg-green-500",
    textColor: "text-white",
  },
  {
    id: 4,
    type: 'image',
    imageUrl: "public/images/thatguywithbottle.jpg",
  },
  // --- Bottom row ---
  {
    id: 5,
    type: 'image',
    imageUrl: "public/images/thewomanwithpink.jpg",
  },
  {
    id: 6,
    type: 'colorBlock',
    textLines: ["Stay Balanced,", "Stay Limitless"],
    backgroundColor: "bg-blue-600",
    textColor: "text-white",
  },
  {
    id: 7,
    type: 'image',
    imageUrl: "public/images/thethreeguysfamily.jpg",
  },
  {
    id: 8,
    type: 'colorBlock',
    textLines: ["Boost,", "Hydrate,", "Perform"],
    backgroundColor: "bg-yellow-400",
    textColor: "text-gray-800",
  },
];


const MixedGridShowcase = () => {
  return (
    <div className="max-w-7xl mx-auto p-1 md:p-2 my-8 md:my-12"> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl shadow-lg">
        {sectionsData.map((section) => (
          <div
            key={section.id}
            className={`
              relative 
              h-64 md:h-80 lg:h-72 xl:h-80
              ${section.type === 'colorBlock' ? section.backgroundColor : ''}
              ${section.type === 'colorBlock' ? section.textColor : ''}
              ${section.type === 'colorBlock' ? 'flex flex-col items-center justify-center text-center p-4 sm:p-6' : ''}
              ${section.type === 'image' ? 'bg-cover bg-center' : ''}
            `}
            style={section.type === 'image' ? { backgroundImage: `url(${section.imageUrl})` } : {}}
          >
            {section.type === 'colorBlock' && section.textLines && (
              <h2 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                {section.textLines.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < section.textLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MixedGridShowcase;