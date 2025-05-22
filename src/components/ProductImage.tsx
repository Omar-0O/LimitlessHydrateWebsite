
const ProductImage = () => {
  return (
    <div className="w-full bg-blue-400 mb-16">
      <div className="container mx-auto">
        {/* Video placeholder - will be updated when video is provided */}
        <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center bg-blue-300">
          <p className="text-white text-lg font-medium">Video will be displayed here</p>
          {/* 
            When video is provided, replace the div above with:
            <video 
              src="VIDEO_URL_HERE" 
              controls
              className="w-full h-[300px] md:h-[400px] object-cover" 
              poster="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            />
          */}
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
