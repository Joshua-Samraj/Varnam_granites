import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Home, Scissors, Wrench, Eye, CheckCircle, Clock, DollarSign, Users, Star, Phone, Mail } from 'lucide-react';

const ServicesPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: <Home size={48} />,
      title: "Custom Stone Fabrication",
      shortDescription: "Precision cutting and shaping to your exact specifications",
      fullDescription: "Our custom fabrication service transforms raw stone into precisely crafted pieces that perfectly fit your space. Using state-of-the-art CNC machinery and traditional craftsmanship, we ensure every cut, edge, and finish meets the highest standards of quality and precision.",
      features: ["CAD Design & 3D Modeling", "Precision CNC Cutting", "Hand-Finished Edges", "Custom Shapes & Sizes", "Template Creation", "Quality Control"],
      process: [
        "Initial consultation and measurements",
        "CAD design and 3D visualization",
        "Material selection and approval",
        "Precision cutting and shaping",
        "Edge finishing and polishing",
        "Final quality inspection"
      ],
      pricing: "Starting from $45/sq ft",
      timeline: "5-7 business days",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 2,
      icon: <Wrench size={48} />,
      title: "Professional Installation",
      shortDescription: "Expert installation by certified craftsmen",
      fullDescription: "Our certified installation team ensures your stone surfaces are installed with precision and care. We handle everything from site preparation to final sealing, guaranteeing a flawless finish that will last for decades.",
      features: ["Site Assessment", "Professional Mounting", "Sealing & Waterproofing", "Cleanup Service", "Warranty Coverage", "Post-Installation Support"],
      process: [
        "Pre-installation site inspection",
        "Surface preparation and leveling",
        "Careful transportation and handling",
        "Precision installation and mounting",
        "Sealing and finishing touches",
        "Final walkthrough and approval"
      ],
      pricing: "Starting from $25/sq ft",
      timeline: "1-2 days",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 3,
      icon: <Eye size={48} />,
      title: "Design Consultation",
      shortDescription: "Free design consultation to bring your vision to life",
      fullDescription: "Our expert designers work closely with you to create the perfect stone solution for your space. From material selection to layout planning, we ensure your vision becomes reality while maximizing both beauty and functionality.",
      features: ["Free Initial Consultation", "Material Selection Guidance", "Color & Pattern Matching", "3D Visualization", "Budget Planning", "Timeline Coordination"],
      process: [
        "Initial consultation and needs assessment",
        "Space measurement and evaluation",
        "Material samples and selection",
        "Design concept development",
        "3D rendering and visualization",
        "Final design approval and planning"
      ],
      pricing: "Free consultation",
      timeline: "Same day",
      image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 4,
      icon: <Scissors size={48} />,
      title: "Restoration Services",
      shortDescription: "Restore and refinish your existing stone surfaces",
      fullDescription: "Bring new life to your existing stone surfaces with our comprehensive restoration services. We can repair damage, remove stains, and restore the original beauty of your marble, granite, or other natural stone surfaces.",
      features: ["Deep Cleaning", "Stain Removal", "Crack & Chip Repair", "Polishing & Refinishing", "Protective Sealing", "Maintenance Planning"],
      process: [
        "Surface assessment and damage evaluation",
        "Deep cleaning and preparation",
        "Repair of cracks, chips, and scratches",
        "Professional polishing and refinishing",
        "Protective sealing application",
        "Maintenance recommendations"
      ],
      pricing: "Starting from $15/sq ft",
      timeline: "2-3 days",
      image: "https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      project: "Kitchen Renovation",
      rating: 5,
      comment: "Exceptional craftsmanship and attention to detail. The team transformed our kitchen with beautiful Carrara marble countertops.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Michael Chen",
      project: "Bathroom Remodel",
      rating: 5,
      comment: "Professional service from start to finish. The installation was flawless and completed on time.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      project: "Commercial Project",
      rating: 5,
      comment: "Outstanding quality and service. They handled our large commercial project with expertise and professionalism.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  if (selectedService) {
    const service = services.find(s => s.id === selectedService);
    if (!service) return null;

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => setSelectedService(null)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors duration-300 p-2"
          >
            <ArrowLeft size={20} />
            <span>Back to Services</span>
          </button>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="w-full lg:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-gray-700 dark:text-gray-300">
                  {service.icon}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{service.title}</h1>
              </div>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">{service.fullDescription}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <DollarSign className="mx-auto mb-2 text-green-500" size={24} />
                  <div className="font-semibold text-gray-900 dark:text-white">Pricing</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{service.pricing}</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <Clock className="mx-auto mb-2 text-blue-500" size={24} />
                  <div className="font-semibold text-gray-900 dark:text-white">Timeline</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{service.timeline}</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow sm:col-span-2 md:col-span-1">
                  <Users className="mx-auto mb-2 text-purple-500" size={24} />
                  <div className="font-semibold text-gray-900 dark:text-white">Team</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Certified Experts</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 py-3 rounded-lg text-lg font-semibold hover:from-gray-800 hover:to-black dark:hover:from-yellow-500 dark:hover:to-orange-600 transition-all duration-300">
                Get Free Quote
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Service Features</h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Process</h3>
              <ol className="space-y-4">
                {service.process?.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-gray-700 dark:bg-yellow-400 text-white dark:text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 p-2"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">Our Services</h1>
          <div className="w-10"></div>
        </div>

        <div className="text-center mb-8 md:mb-12">
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            From initial consultation to final installation, we provide comprehensive services
            to ensure your stone project exceeds expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group p-6 md:p-8"
            >
              <div className="flex items-center space-x-4 mb-4 md:mb-6">
                <div className="text-gray-700 dark:text-gray-300 group-hover:text-yellow-500 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base">{service.shortDescription}</p>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="text-center p-2 md:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <DollarSign className="mx-auto mb-1 text-green-500" size={18} />
                  <div className="text-xs md:text-sm font-medium text-gray-900 dark:text-white">Pricing</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">{service.pricing}</div>
                </div>
                <div className="text-center p-2 md:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Clock className="mx-auto mb-1 text-blue-500" size={18} />
                  <div className="text-xs md:text-sm font-medium text-gray-900 dark:text-white">Timeline</div>
                  <div className="text-xs text-gray-600 dark:text-gray-300">{service.timeline}</div>
                </div>
              </div>

              <ul className="space-y-2 mb-4 md:mb-6">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    +{service.features.length - 3} more features
                  </li>
                )}
              </ul>

              <button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:from-gray-800 hover:to-black dark:hover:from-yellow-500 dark:hover:to-orange-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic text-sm md:text-base">"{testimonial.comment}"</p>
                <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">{testimonial.project}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600 rounded-lg p-6 md:p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote. Our experts will help you choose the perfect service for your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
              <Phone size={20} />
              <span>Call Now</span>
            </button>
            <button className="flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              <Mail size={20} />
              <span>Email Us</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;