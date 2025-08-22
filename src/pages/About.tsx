import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Award, Users, Clock, Shield, MapPin, Phone, Mail, Star, CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <Award size={48} />, number: "15+", label: "Years of Excellence", description: "Serving customers with dedication since 2008" },
    { icon: <Users size={48} />, number: "50+", label: "Expert Craftsmen", description: "Skilled professionals with decades of experience" },
    { icon: <Clock size={48} />, number: "1000+", label: "Projects Completed", description: "Successfully delivered projects of all sizes" },
    { icon: <Shield size={48} />, number: "100%", label: "Quality Guarantee", description: "Complete satisfaction guaranteed on every project" }
  ];

  const team = [
    {
      name: "Michael Rodriguez",
      position: "Founder & Master Craftsman",
      experience: "25+ years",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Michael founded Varnam Granites with a vision to bring exceptional craftsmanship to every project. His expertise in traditional stone working techniques combined with modern technology ensures the highest quality results."
    },
    {
      name: "Sarah Chen",
      position: "Design Director",
      experience: "12+ years",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Sarah leads our design team with her keen eye for aesthetics and deep understanding of natural stone properties. She helps clients transform their vision into stunning reality."
    },
    {
      name: "David Thompson",
      position: "Installation Manager",
      experience: "18+ years",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "David oversees all installation projects, ensuring precision and quality in every detail. His meticulous approach guarantees flawless results that exceed client expectations."
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every piece of stone is carefully selected and every project is executed with precision.",
      icon: <Award size={32} />
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We work closely with you throughout the entire process to ensure your vision comes to life.",
      icon: <Users size={32} />
    },
    {
      title: "Craftsmanship Excellence",
      description: "Our skilled artisans combine traditional techniques with modern technology to deliver exceptional results.",
      icon: <Shield size={32} />
    },
    {
      title: "Timely Delivery",
      description: "We respect your time and schedule. Our projects are completed on time without compromising quality.",
      icon: <Clock size={32} />
    }
  ];

  const certifications = [
    "Natural Stone Institute Certified",
    "Better Business Bureau A+ Rating",
    "Licensed & Insured",
    "OSHA Safety Certified",
    "Environmental Compliance Certified",
    "Quality Management ISO 9001"
  ];

  const timeline = [
    { year: "2008", event: "Company Founded", description: "Michael Rodriguez establishes Varnam Granites with a small team of skilled craftsmen." },
    { year: "2012", event: "Facility Expansion", description: "Expanded our workshop and added state-of-the-art CNC machinery for precision cutting." },
    { year: "2015", event: "Design Team Added", description: "Brought in professional designers to offer comprehensive design consultation services." },
    { year: "2018", event: "1000th Project", description: "Celebrated completing our 1000th successful project, marking a major milestone." },
    { year: "2020", event: "Digital Innovation", description: "Introduced 3D visualization and digital templating for enhanced customer experience." },
    { year: "2023", event: "Sustainability Focus", description: "Launched eco-friendly practices and sustainable sourcing initiatives." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">About Us</h1>
          <div></div>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Crafting Excellence Since 2008
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Varnam Granites has been at the forefront of natural stone fabrication and installation. 
              We combine traditional craftsmanship with cutting-edge technology to deliver exceptional results 
              that stand the test of time.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our team of skilled artisans works with the finest marble and granite from quarries around 
              the world, ensuring every project reflects our commitment to quality, beauty, and durability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 px-8 py-3 rounded-lg font-semibold hover:from-gray-800 hover:to-black dark:hover:from-yellow-500 dark:hover:to-orange-600 transition-all duration-300">
                Get Free Quote
              </button>
              <button className="border-2 border-gray-700 dark:border-yellow-400 text-gray-700 dark:text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-gray-900 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
              alt="Craftsman working on stone"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Award Winning</div>
              <div className="text-sm">Quality & Service</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105">
              <div className="text-gray-700 dark:text-gray-300 mb-4 flex justify-center group-hover:text-yellow-500 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-gray-700 dark:text-yellow-400">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:transform hover:scale-105">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <div className="text-yellow-600 dark:text-yellow-400 font-semibold mb-2">{member.position}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.experience}</div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.event}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Certifications & Awards</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-800 dark:to-gray-600 rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Visit Our Showroom</h2>
              <p className="text-gray-300 mb-6">
                Experience our extensive collection of natural stones in person. Our showroom features 
                hundreds of slabs and samples to help you make the perfect choice for your project.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-yellow-400" />
                  <span>123 Stone Avenue, Craftsman District, City 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-yellow-400" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-yellow-400" />
                  <span>info@varnamgranites.com</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Showroom Hours</h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>By Appointment</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300">
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;