import React from 'react';
import { 
  ShoppingBag, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw,
  ChevronRight,
  Heart,
  Eye
} from 'lucide-react';

const Home = () => {
  // Sample product data
  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 79.99, rating: 4.5, image: '/api/placeholder/300/300', discount: 20 },
    { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.8, image: '/api/placeholder/300/300', discount: 15 },
    { id: 3, name: 'Laptop Backpack', price: 49.99, rating: 4.3, image: '/api/placeholder/300/300' },
    { id: 4, name: 'Bluetooth Speaker', price: 89.99, rating: 4.6, image: '/api/placeholder/300/300', discount: 10 },
    { id: 5, name: 'Phone Stand', price: 19.99, rating: 4.2, image: '/api/placeholder/300/300' },
    { id: 6, name: 'USB-C Hub', price: 59.99, rating: 4.4, image: '/api/placeholder/300/300' },
  ];

  const categories = [
    { name: 'Electronics', icon: '📱', count: 245 },
    { name: 'Fashion', icon: '👕', count: 189 },
    { name: 'Home & Living', icon: '🏠', count: 156 },
    { name: 'Books', icon: '📚', count: 98 },
    { name: 'Sports', icon: '⚽', count: 134 },
    { name: 'Beauty', icon: '💄', count: 76 },
  ];

  const benefits = [
    { icon: Truck, title: 'Free Shipping', description: 'On orders over $50' },
    { icon: Shield, title: 'Secure Payment', description: '100% secure transactions' },
    { icon: RefreshCw, title: 'Easy Returns', description: '30-day return policy' },
    { icon: Star, title: 'Quality Guarantee', description: 'Premium products only' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-amber-50 from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Summer Sale!
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100">
              Get up to 50% off on selected items
            </p>
            <p className="text-lg mb-8 text-blue-50">
              Discover the latest trends and upgrade your style with our premium collection.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              Shop Now <ChevronRight size={20} />
            </button>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-amber-500 from-blue-500/20 to-transparent"></div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                <benefit.icon className="text-blue-600" size={24} />
                <div>
                  <p className="font-semibold text-sm">{benefit.title}</p>
                  <p className="text-xs text-gray-500">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
            View All <ChevronRight size={20} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer border hover:border-blue-500"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-sm">{category.name}</h3>
              <p className="text-xs text-gray-500">{category.count} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
            View All <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 group relative">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-lg bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
                {/* Quick action buttons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <Eye size={20} />
                  </button>
                  <button className="bg-white p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.rating})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  {product.discount && (
                    <span className="text-sm text-gray-400 line-through">
                      ${(product.price / (1 - product.discount/100)).toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-6">Get the latest updates on new products and upcoming sales</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;