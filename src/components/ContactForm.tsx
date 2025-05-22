
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-full">
          <img 
            src="public/lovable-uploads/ae9b3a6e-d4af-4c12-a863-ccfee3f59990.png"
            alt="Limitless Hydrate Products" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-8 md:p-10">
          <h3 className="text-2xl font-bold mb-6">Contact us</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstname" className="block text-sm font-medium mb-1">First Name</label>
                <input 
                  type="text" 
                  id="firstname" 
                  placeholder="First Name"
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black"
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block text-sm font-medium mb-1">Last Name</label>
                <input 
                  type="text" 
                  id="lastname" 
                  placeholder="Last Name"
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Mail</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="address@domain.com"
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+00123456789"
                  className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                id="message" 
                rows={3}
                placeholder="Write your message..."
                className="w-full border-0 border-b border-gray-300 bg-transparent py-2 focus:ring-0 focus:border-black resize-none"
              ></textarea>
            </div>
            <div>
              <Button type="submit" className="rounded-full bg-black hover:bg-black/90 text-white px-10">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
