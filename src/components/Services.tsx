import { useState } from 'react';
import { Home, Scissors, Wrench, Eye, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Services = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  
  const services = [
    {
      icon: <Home size={28} />,
      title: "Custom Stone Fabrication",
      description: "Precision cutting and shaping to your exact specifications",
      features: ["CAD Design", "3D Modeling", "Precision Cutting", "Edge Finishing"]
    },
    {
      icon: <Wrench size={28} />,
      title: "Professional Installation", 
      description: "Expert installation by certified craftsmen",
      features: ["Site Preparation", "Professional Mounting", "Sealing & Finishing", "Quality Inspection"]
    },
    {
      icon: <Eye size={28} />,
      title: "Design Consultation",
      description: "Free design consultation to bring your vision to life",
      features: ["Material Selection", "Design Planning", "Color Matching", "Sample Viewing"]
    },
    {
      icon: <Scissors size={28} />,
      title: "Restoration Services",
      description: "Restore and refinish your existing stone surfaces",
      features: ["Deep Cleaning", "Polishing", "Crack Repair", "Protective Sealing"]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedCards.includes(index);

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Professional Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 px-4">
            From initial consultation to final installation, we provide comprehensive 
            services to ensure your stone project exceeds expectations.
          </p>
        </div>

        {/* Mobile View */}
        <div className="block sm:hidden space-y-4 mb-12 animate-stagger-in">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg cursor-pointer overflow-hidden transition-all duration-300" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleCard(index)}
            >
              <div className="flex items-center justify-between p-4 min-h-[80px]">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white transition-colors duration-300 break-words leading-tight">{service.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300 mt-1">Tap to view details</p>
                  </div>
                </div>
                <div className="text-gray-400 dark:text-gray-500 flex-shrink-0 ml-2">
                  {isExpanded(index) ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>
              
              {/* Expandable Content */}
              <div className={`transition-all duration-500 ease-in-out ${isExpanded(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed transition-colors duration-300 break-words">{service.description}</p>
                  
                  <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2 transition-colors duration-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start justify-start space-x-3">
                        <CheckCircle size={14} className="text-green-500 dark:text-green-400 transition-colors duration-300 flex-shrink-0 mt-0.5" />
                        <span className="text-left break-words flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16 animate-stagger-in">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-500 animate-fade-in-up bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg p-6" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-400 group-hover:to-orange-500 group-hover:text-gray-900 transition-all duration-500 transform group-hover:rotate-12 group-hover:shadow-2xl">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{service.title}</h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">{service.description}</p>
              
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-3 transition-colors duration-300">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-start space-x-3 transform hover:scale-105 transition-transform duration-300">
                    <CheckCircle size={16} className="text-green-500 dark:text-green-400 transition-colors duration-300 flex-shrink-0" />
                    <span className="text-left">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600 rounded-2xl p-8 sm:p-8 lg:p-12 text-white text-center transform hover:scale-105 transition-all duration-500 hover:shadow-2xl animate-fade-in-up">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 animate-fade-in-delay-1">Ready to Start Your Project?</h3>
          <p className="text-lg sm:text-lg lg:text-xl text-gray-300 dark:text-gray-200 mb-8 sm:mb-8 max-w-2xl mx-auto animate-fade-in-delay-2 transition-colors duration-300 leading-relaxed">
            Get a free consultation and quote. Our experts will help you choose the perfect stone for your space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in-delay-3 max-w-md sm:max-w-none mx-auto">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 sm:px-8 py-4 rounded-lg text-lg sm:text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 sm:px-8 py-4 rounded-lg text-lg sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto">
              Get Instant Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;