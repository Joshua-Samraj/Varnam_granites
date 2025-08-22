import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0" onClick={closeMobileMenu}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg md:text-xl">VG</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Varnam Granites</h1>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">Crafting Excellence in Stone</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 hover:scale-105">Home</Link>
            <Link to="/products" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 hover:scale-105">Products</Link>
            <Link to="/services" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 hover:scale-105">Services</Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium transition-all duration-300 hover:scale-105">About</Link>
            <a href="#contact" className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 px-4 xl:px-6 py-2 rounded-lg hover:from-gray-800 hover:to-black dark:hover:from-yellow-500 dark:hover:to-orange-600 transition-all duration-300 transform hover:scale-105 text-sm xl:text-base">
              Get Quote
            </a>
          </nav>

          {/* Right side - Theme toggle, Phone, Mobile menu */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <ThemeToggle />

            {/* Phone number - hidden on mobile */}
            <div className="hidden xl:flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-300">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
          ? 'max-h-96 opacity-100 pb-4'
          : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
          <nav className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
            <Link
              to="/services"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={closeMobileMenu}
            >
              About
            </Link>

            {/* Mobile contact info */}
            <div className="pt-3 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <div className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300">
                <Phone size={16} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              {/* <a 
                href="#contact" 
                className="block bg-gradient-to-r from-gray-700 to-gray-900 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 px-4 py-3 rounded-lg hover:from-gray-800 hover:to-black dark:hover:from-yellow-500 dark:hover:to-orange-600 transition-all duration-300 text-center font-medium"
                onClick={closeMobileMenu}
              >
                Get Quote
              </a> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;