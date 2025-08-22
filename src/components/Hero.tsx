import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 text-white overflow-hidden transition-all duration-500 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-40 dark:opacity-60 transition-opacity duration-500"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
            url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)
          `
        }}
      ></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mb-6 animate-fade-in-delay-1">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
            <span className="text-sm sm:text-base text-gray-300 dark:text-gray-200 transition-colors duration-300">Trusted by 500+ customers</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-delay-2">
            <span className="block mb-2">Transform Your Space with</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-300 dark:to-orange-300 bg-clip-text text-transparent animate-gradient">
              Varnam Granites
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 dark:text-gray-200 mb-8 leading-relaxed animate-fade-in-delay-3 transition-colors duration-300 max-w-3xl mx-auto lg:mx-0">
            Discover our exquisite collection of marble and granite. From elegant countertops to stunning flooring, we bring luxury and durability to your home or business.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 w-full sm:w-auto">
              <span>Explore Collection</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl w-full sm:w-auto">
              Free Consultation
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-gray-600 dark:border-gray-500 animate-fade-in-delay-5 transition-colors duration-300 max-w-2xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 dark:text-yellow-300 animate-count-up transition-colors duration-300">15+</div>
              <div className="text-sm sm:text-base text-gray-300 dark:text-gray-200 transition-colors duration-300">Years Experience</div>
            </div>
            <div className="text-center lg:text-left transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 dark:text-yellow-300 animate-count-up transition-colors duration-300" style={{ animationDelay: '0.2s' }}>1000+</div>
              <div className="text-sm sm:text-base text-gray-300 dark:text-gray-200 transition-colors duration-300">Projects Completed</div>
            </div>
            <div className="text-center lg:text-left transform hover:scale-110 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 dark:text-yellow-300 animate-count-up transition-colors duration-300" style={{ animationDelay: '0.4s' }}>100%</div>
              <div className="text-sm sm:text-base text-gray-300 dark:text-gray-200 transition-colors duration-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;