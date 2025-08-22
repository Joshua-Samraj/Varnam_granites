import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Carrara White Marble",
      category: "Marble",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      description: "Classic Italian marble with distinctive veining",
      price: "From $45/sq ft"
    },
    {
      id: 2,
      name: "Black Galaxy Granite",
      category: "Granite",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      description: "Stunning black granite with golden speckles",
      price: "From $35/sq ft"
    },
    {
      id: 3,
      name: "Calacatta Gold Marble",
      category: "Marble",
      image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      description: "Luxurious marble with dramatic gold veining",
      price: "From $65/sq ft"
    },
    {
      id: 4,
      name: "Kashmir White Granite",
      category: "Granite",
      image: "https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      description: "Elegant white granite with subtle patterns",
      price: "From $40/sq ft"
    },
    {
      id: 5,
      name: "Emperador Dark Marble",
      category: "Marble",
      image: "https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      description: "Rich brown marble with striking veins",
      price: "From $50/sq ft"
    },
    {
      id: 6,
      name: "Blue Pearl Granite",
      category: "Granite",
      image: "https://images.pexels.com/photos/1571478/pexels-photo-1571478.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop",
      description: "Unique blue-gray granite with pearl-like shimmer",
      price: "From $55/sq ft"
    }
  ];

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Varnam Granites Collection
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 px-4">
            Explore our carefully curated selection of world-class marble and granite, 
            each piece chosen for its exceptional beauty and durability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-stagger-in">
          {products.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up touch-manipulation" style={{ animationDelay: `${product.id * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300">
                    {product.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 line-clamp-1">{product.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300 line-clamp-2">{product.description}</p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{product.price}</span>
                  <button className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:from-gray-800 hover:to-black dark:hover:from-yellow-500 dark:hover:to-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group text-sm sm:text-base w-full sm:w-auto">
                    <span>View Details</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link 
            to="/products"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse-subtle w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;