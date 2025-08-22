import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award size={32} />, number: "15+", label: "Years of Excellence" },
    { icon: <Users size={32} />, number: "50+", label: "Expert Craftsmen" },
    { icon: <Clock size={32} />, number: "1000+", label: "Projects Completed" },
    { icon: <Shield size={32} />, number: "100%", label: "Quality Guarantee" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Crafting Excellence Since 2008
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              Varnam Granites has been at the forefront of natural stone fabrication and installation.
              We combine traditional craftsmanship with cutting-edge technology to deliver exceptional results
              that stand the test of time.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
              Our team of skilled artisans works with the finest marble and granite from quarries around
              the world, ensuring every project reflects our commitment to quality, beauty, and durability.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 animate-stagger-in">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-gray-700 dark:text-gray-300 mb-3 flex justify-center transition-colors duration-300 transform hover:scale-110 hover:rotate-12">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 animate-count-up transition-colors duration-300">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700 group">
              <img
                src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Craftsman working on stone"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-2 animate-fade-in-delay-1">Master Craftsmanship</h3>
                <p className="text-gray-200 animate-fade-in-delay-2">Every piece tells a story of dedication and skill</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-2 animate-fade-in-delay-1">Master Craftsmanship</h3>
                <p className="text-gray-200 animate-fade-in-delay-2">Every piece tells a story of dedication and skill</p>
              </div>
            </div>

            <div className="absolute -top-8 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 p-6 rounded-xl shadow-lg transform hover:scale-110 hover:rotate-3 transition-all duration-500 animate-bounce-subtle">
              <div className="text-2xl font-bold animate-pulse">Award Winning</div>
              <div className="text-sm">Quality & Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;