import { Card, CardContent } from "@/components/ui/card";

const AboutContent = () => {
  return (
    <div className="max-w-5xl mx-auto">      
      {/* Card */}
      <Card className="shadow-lg border-blue-100">
        <CardContent className="p-6 md:p-8"> {/* */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"> {/* items-center aligns image and text vertically */}
            
            {/* image */}
            <div className="flex justify-center items-center"> {/* md:order-1 if using flex, but with grid, order in code matters */}
              <img 
                src="public/images/hydsci7.png" 
                alt="Limitless Hydrate Product" 
                className="max-w-full h-auto object-contain"
                style={{ maxHeight: "800px" }} // Increased size
              />
            </div>
            
            {/* 2. Text on the right */}
            <div className="">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Who we are?</h2>
              <p className="text-gray-700 mb-6">
                At Limitless Naturals, we innovate health and wellness with science-backed supplements. 
                Limitless Hydrate restores essential electrolytes for optimal hydration, keeping you 
                energized and at your best.
              </p>
              
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Philosophy</h2>
              <p className="text-gray-700 mb-4">
                Hydration is essential for energy, focus, and overall well-being. Dehydration can impact 
                performance, mood, and recovery, which is why we created Limitless Hydrate—a scientifically 
                formulated solution to replenish electrolytes and keep you at your best.
              </p>
              <p className="text-gray-700 mb-6">
                Designed for those who push their limits, it ensures optimal hydration, whether you're working out, 
                recovering, or powering through your day. At Limitless Naturals, we believe in providing clean, 
                effective hydration to help you perform and feel your best.
              </p>
              
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Sustainability & Quality Assurance</h2>
              <p className="text-gray-700 mb-4">
                Limitless Hydrate is crafted with the highest standards in mind, powered by OFT and 
                formulated based on WHO-advised guidelines for optimal hydration.
              </p>
              <p className="text-gray-700">
                We prioritize premium sourcing, ensuring clean, high-quality ingredients for maximum 
                effectiveness. Committed to sustainability, we follow eco-friendly practices in production 
                and packaging, delivering a product that's both effective and responsible.
              </p>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutContent;