import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 dark:bg-gray-800 text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 dark:text-gray-200 max-w-3xl mx-auto transition-colors duration-300">
            Ready to start your stone project? Contact us for a free consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-stagger-in">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg transform hover:rotate-12 transition-transform duration-300">
                  <Phone size={24} className="text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300 dark:text-gray-200 transition-colors duration-300">(555) 123-4567</p>
                  <p className="text-gray-300 dark:text-gray-200 transition-colors duration-300">(555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg transform hover:rotate-12 transition-transform duration-300">
                  <Mail size={24} className="text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300 dark:text-gray-200 transition-colors duration-300">info@varnamgranites.com</p>
                  <p className="text-gray-300 dark:text-gray-200 transition-colors duration-300">sales@varnamgranites.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg transform hover:rotate-12 transition-transform duration-300">
                  <MapPin size={24} className="text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-300 dark:text-gray-200 transition-colors duration-300">123 Stone Avenue<br />Quarry District, QD 12345</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 transform hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg transform hover:rotate-12 transition-transform duration-300">
                  <Clock size={24} className="text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-300 dark:text-gray-200 transition-colors duration-300">Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 dark:bg-gray-700 rounded-xl p-8 transform hover:scale-105 transition-all duration-500 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
            
            <form className="space-y-6 animate-stagger-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300 transform focus:scale-105"
                    placeholder="John"
                  />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300 transform focus:scale-105"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300 transform focus:scale-105"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300 transform focus:scale-105"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <select className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300 transform focus:scale-105">
                  <option>Kitchen Countertops</option>
                  <option>Bathroom Vanities</option>
                  <option>Flooring</option>
                  <option>Fireplace Surrounds</option>
                  <option>Commercial Project</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-600 border border-gray-600 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white transition-all duration-300 transform focus:scale-105"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up animate-pulse-subtle"
                style={{ animationDelay: '0.7s' }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;