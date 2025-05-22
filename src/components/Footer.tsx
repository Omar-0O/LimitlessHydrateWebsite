
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Column 1 - Newsletter */}
          <div className="md:col-span-2">
            <Link to="/">
              <img 
                src="/public/images/logo.png"
                alt="Limitless Hydrate" 
                className="h-14 mb-6"
              />
            </Link>
            <h3 className="text-xl font-bold mb-2">Stay Hydrated, Stay Updated!</h3>
            <p className="text-gray-600 mb-4">Get hydration tips & product updates!</p>
            
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email to stay refreshed!" 
                className="max-w-xs"
              />
              <Button>Send</Button>
            </div>
          </div>
          
          {/* Column 2 - Our Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Products</h4>
            <ul className="space-y-3">
              <li><Link to="/product/original" className="text-gray-600 hover:text-blue-600">Limitless Hydrate Original</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-blue-600">Limitless Hydrate Glow</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-blue-600">Limitless Hydrate Kids</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Need Help? */}
          <div>
            <h4 className="font-bold text-lg mb-4">Need Help?</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQs</Link></li>
              <li><Link to="/articles" className="text-gray-600 hover:text-blue-600">Articles</Link></li>
              <li><Link to="/lifestyle" className="text-gray-600 hover:text-blue-600">Lifestyle & Wellness</Link></li>
            </ul>
          </div>
          
          {/* Column 4 - About */}
          <div>
            <h4 className="font-bold text-lg mb-4">About</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">Who we are</Link></li>
              <li><Link to="/philosophy" className="text-gray-600 hover:text-blue-600">Our Philosophy</Link></li>
              <li><Link to="/quality" className="text-gray-600 hover:text-blue-600">Quality Assurance</Link></li>
            </ul>
          </div>
          
          {/* Column 5 - Community */}
          <div>
            <h4 className="font-bold text-lg mb-4">Community</h4>
            <ul className="space-y-3">
              <li><Link to="/ambassador" className="text-gray-600 hover:text-blue-600">Our Ambassador</Link></li>
              <li><Link to="/community" className="text-gray-600 hover:text-blue-600">Water+ Community</Link></li>
            </ul>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>   
  </footer>
  );
};

export default Footer;
