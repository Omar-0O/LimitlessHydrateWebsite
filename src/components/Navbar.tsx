import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 mt-4">
      <nav 
        className="
          flex items-center justify-between 
          bg-white 
          w-full 
          h-[80px] 
          rounded-2xl 
          overflow-hidden 
          shadow-sm
        "
      >
        <div className="hidden md:flex items-center space-x-8 pl-6">
          <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            About us
          </Link>
          <Link to="/community" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Community
          </Link>
        </div>
        
        <div className="flex-shrink-0"> 
          <Link to="/" className="flex items-center justify-center">
            <img 
              src="/images/logo.png" 
              alt="Limitless Hydrate Logo" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        <div className="h-full flex items-center justify-center bg-black hover:bg-black/90 text-white rounded-r-2xl">
          <Button 
            className="bg-transparent hover:bg-transparent text-inherit rounded-none text-sm px-12 py-2 font-medium"
          >
            Buy Now
          </Button>
        </div>

        <div className="md:hidden flex items-center pr-4">
           <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;