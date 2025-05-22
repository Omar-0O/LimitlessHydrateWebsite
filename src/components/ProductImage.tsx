const ProductImage = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
            {/* Video Player */}
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/images/video-poster.jpg"
              preload="metadata"
            >
              <source src="public/images/video.mp4" type="video/mp4" />
              <source src="public/images/video.webm" type="video/webm" />
              {/* Fallback Message */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <p className="text-gray-500 text-lg">
                  Your browser doesn't support video playback.
                </p>
              </div>
            </video>

            {/* Loading State */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 hidden">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200 cursor-pointer group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center transform transition-transform duration-200 group-hover:scale-110">
                <svg 
                  className="w-8 h-8 md:w-10 md:h-10 text-blue-600" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              See Limitless Hydrate in Action
            </h3>
            <p className="text-gray-600">
              Watch how our advanced hydration formula works to keep you at your best
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
