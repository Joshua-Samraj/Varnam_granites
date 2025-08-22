import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The Carrara marble countertops transformed our kitchen completely. The craftsmanship is outstanding and the installation was flawless. Highly recommend Varnam Granites!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Restaurant Owner", 
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "We needed durable granite surfaces for our commercial kitchen. The team delivered exceptional quality on time and within budget. Professional service from start to finish.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Interior Designer",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "I've worked with many stone suppliers, but Varnam Granites stands out for their expertise and attention to detail. They always help me achieve the perfect look for my clients.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-stagger-in">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-2xl transition-all duration-500 relative transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Quote size={40} className="text-gray-300 dark:text-gray-600 mb-4 transform hover:scale-110 hover:rotate-12 transition-all duration-300" />
              
              <div className="flex mb-4 animate-fade-in-delay-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400 animate-pulse hover:scale-125 transition-transform duration-300" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic transition-colors duration-300 animate-fade-in-delay-2">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center animate-fade-in-delay-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 transform hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;