import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white py-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-stagger-in">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 animate-fade-in-up">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center transform hover:scale-110 hover:rotate-12 transition-all duration-300">
                <span className="text-gray-900 font-bold text-xl">VG</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Varnam Granites</h3>
                <p className="text-gray-400 dark:text-gray-300 transition-colors duration-300">Marble & Granite Specialists</p>
              </div>
            </div>

            <p className="text-gray-400 dark:text-gray-300 mb-6 max-w-md transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Transforming spaces with premium natural stone since 2008.
              Quality craftsmanship, professional installation, and exceptional service.
            </p>

            <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <a href="#" className="bg-gray-800 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 dark:bg-gray-700 p-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li><a href="#home" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">Products</a></li>
              <li><a href="#services" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">Contact</a></li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-300">
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">Kitchen Countertops</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">Bathroom Vanities</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">Flooring</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">Custom Fabrication</a></li>
              <li><a href="#" className="hover:text-white transition-all duration-300 transform hover:translate-x-2">Installation</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mt-8 transition-colors duration-300">
          <div className="flex flex-col md:flex-row justify-between items-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-gray-400 dark:text-gray-300 text-sm transition-colors duration-300">
              © 2024 Varnam Granites. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-all duration-300 transform hover:scale-105">Privacy Policy</a>
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-all duration-300 transform hover:scale-105">Terms of Service</a>
              <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-all duration-300 transform hover:scale-105">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;