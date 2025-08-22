import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Grid, List, Search, Star } from 'lucide-react';
import { products, categories, type Product } from '../data/productsData';

const ProductsPage = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');



    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const selectedProduct = productId ? products.find(p => p.id === parseInt(productId)) : null;

    if (selectedProduct) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                    <button
                        onClick={() => navigate('/products')}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white mb-6 sm:mb-8 transition-colors duration-300"
                    >
                        <ArrowLeft size={20} />
                        <span className="text-sm sm:text-base">Back to Products</span>
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <img
                                src={selectedProduct.gallery[0]}
                                alt={selectedProduct.name}
                                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                            />
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
                                {selectedProduct.gallery.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`${selectedProduct.name} ${index + 1}`}
                                        className="w-full h-16 sm:h-20 lg:h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity duration-300"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">{selectedProduct.name}</h1>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className={i < Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                                            />
                                        ))}
                                        <span className="ml-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                                            {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                                        </span>
                                    </div>
                                </div>

                                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6">{selectedProduct.description}</p>
                                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">{selectedProduct.price}</div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Origin</h3>
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{selectedProduct.origin}</p>
                                </div>

                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Available Finishes</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProduct.finish.map((finish) => (
                                            <span key={finish} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm">
                                                {finish}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Applications</h3>
                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm sm:text-base">
                                        {selectedProduct.applications.map((app) => (
                                            <li key={app}>{app}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 dark:from-yellow-400 dark:to-orange-500 text-white dark:text-gray-900 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-gray-800 hover:to-black dark:hover:from-yellow-500 dark:hover:to-orange-600 transition-all duration-300">
                                Request Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
                {/* Header */}
                <div className="flex flex-col space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                        >
                            <ArrowLeft size={20} />
                            <span className="text-sm sm:text-base">Back to Home</span>
                        </button>

                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition-colors duration-300 ${viewMode === 'grid' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <Grid size={18} className="text-gray-600 dark:text-gray-300" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition-colors duration-300 ${viewMode === 'list' ? 'bg-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <List size={18} className="text-gray-600 dark:text-gray-300" />
                            </button>
                        </div>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">Our Products</h1>
                </div>

                {/* Filters */}
                <div className="mb-6 space-y-4">
                    {/* Search */}
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex overflow-x-auto space-x-2 pb-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${selectedCategory === category
                                    ? 'bg-yellow-400 text-gray-900'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results count */}
                <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                    Showing {filteredProducts.length} products
                </div>

                {/* Products Grid/List */}
                {viewMode === 'grid' ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => navigate(`/products/${product.id}`)}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                                            {product.category}
                                        </span>
                                        <div className="flex items-center">
                                            <Star size={14} className="text-yellow-400 fill-current" />
                                            <span className="ml-1 text-xs text-gray-600 dark:text-gray-300">{product.rating}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">{product.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">{product.description}</p>
                                    <div className="text-lg font-bold text-gray-900 dark:text-white">{product.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => navigate(`/products/${product.id}`)}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer p-4 flex space-x-4"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">{product.name}</h3>
                                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 ml-2 flex-shrink-0">
                                            {product.category}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">{product.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Star size={14} className="text-yellow-400 fill-current" />
                                            <span className="ml-1 text-xs text-gray-600 dark:text-gray-300">
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div>
                                        <div className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{product.price}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductsPage;