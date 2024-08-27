import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaTruck, FaLock, FaUndo, FaHeadset } from 'react-icons/fa';


export default function Home() {
    return (
        <div>

                                    {/* Background Section */}

            <div
                className="w-full h-screen bg-cover bg-center -mt-20 relative"
                style={{ backgroundImage: "url('/trendyhub/pexels-eliasdecarvalho-1144834.jpg')" }} 
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>


                                       {/*  text-Content bg image */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
                        Discover the Latest Fashion Trends
                    </h1>
                    <p className="text-lg md:text-2xl mb-6 sm:mb-8">
                        Find your perfect style with our exclusive collections
                    </p>
                    <a
                        href="#shop"
                        className="inline-flex items-center px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg text-lg transition duration-300 ease-in-out"
                    >
                        Shop Now
                    </a>
                </div>
            </div>

                          {/* text after image */}


            <div className="py-8 text-center mt-12">
    <h2 className="text-4xl font-extrabold mb-4 text-red-700">
        Unleash Your Style with TrendyHub
    </h2>
    <p className="text-xl text-gray-800 mb-8 mx-auto max-w-2xl font-medium">
        Discover the latest trends with TrendyHub. Our exclusive collections ensure you look stylish for every occasion. Explore now!
    </p>
</div>

                                         {/* Image Grid Section */}


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-20 mb-20">
    {/* First Card */}
    <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="/trendyhub/image1.webp" alt="Fashion 1" className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
                <h3 className="text-lg font-semibold mb-2">Stylish Dress</h3>
                <p className="text-xl font-bold">$49.99</p>
                <a href="/shop" className="mt-2 inline-block px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">Shop Now</a>
            </div>
        </div>
    </div>
    {/* Repeat for other cards */}
    <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="/trendyhub/image2.jpg" alt="Fashion 2" className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
                <h3 className="text-lg font-semibold mb-2">Elegant Gown</h3>
                <p className="text-xl font-bold">$79.99</p>
                <a href="/shop" className="mt-2 inline-block px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">Shop Now</a>
            </div>
        </div>
    </div>
    <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="/trendyhub/img3.jpg" alt="Fashion 3" className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
                <h3 className="text-lg font-semibold mb-2">Casual Outfit</h3>
                <p className="text-xl font-bold">$39.99</p>
                <a href="/shop" className="mt-2 inline-block px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">Shop Now</a>
            </div>
        </div>
    </div>
    {/* Repeat for remaining cards */}
    <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="/trendyhub/img4.jpg" alt="Fashion 4" className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
                <h3 className="text-lg font-semibold mb-2">Trendy Jacket</h3>
                <p className="text-xl font-bold">$59.99</p>
                <a href="/shop" className="mt-2 inline-block px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">Shop Now</a>
            </div>
        </div>
    </div>
    <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="/trendyhub/img5.jpg" alt="Fashion 5" className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
                <h3 className="text-lg font-semibold mb-2">Chic Pants</h3>
                <p className="text-xl font-bold">$44.99</p>
                <a href="/shop" className="mt-2 inline-block px-4 py-2 bg-red-700 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">Shop Now</a>
            </div>
        </div>
    </div>
    <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="/trendyhub/img6.jpg" alt="Fashion 6" className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
                <h3 className="text-lg font-semibold mb-2">Classic Shirt</h3>
                <p className="text-xl font-bold">$29.99</p>
                <Link to="/shop"  className="mt-2 inline-block px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">Shop Now  </Link>
            </div>
        </div>
    </div>
</div>
                 

                 {/* Text Section Between Images and Cards */}

<div className="py-8 px-4 md:px-20 ">
    
    <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
            <span className="text-red-700 ">Trending Now</span>
            <span className="text-gray-800">: Our Top Picks</span>
        </h2>
        
    </div>

                                           {/* card section */}

    <div className="flex flex-wrap gap-6 justify-center mb-20" >
    {/* Card 1 */}
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '350px' }}>
        <img src="/trendyhub/product-1.webp" alt="Product 1" className="w-full h-96 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
                <a href="#" className="text-gray-800 hover:text-gray-600">Stylish Jacket</a>
            </h3>
            <div className="flex justify-between items-center mb-2">
                <div className="pricing">
                    <p className="text-lg font-bold text-gray-900"><span>$49.99</span></p>
                </div>
                <div className="rating flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-gray-400"> (5)</span>
                </div>
            </div>
            <hr className="border-gray-200 mb-3" />
            <div className="flex justify-between items-center">
                <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                    <span>Add to cart</span>
                    <i className="ml-1 fas fa-cart-plus"></i>
                </a>
                <a href="#" className="text-red-500 hover:text-red-600">
                    <i className="fas fa-heart"></i>
                </a>
            </div>
        </div>
    </div>

    {/* Card 2 */}
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '350px' }}>
        <img src="/trendyhub/product-2.webp" alt="Product 3" className="w-full h-96 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
                <a href="#" className="text-gray-800 hover:text-gray-600">Casual Shirt</a>
            </h3>
            <div className="flex justify-between items-center mb-2">
                <div className="pricing">
                    <p className="text-lg font-bold text-gray-900"><span>$29.99</span></p>
                </div>
                <div className="rating flex items-center">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="text-gray-400"> (4)</span>
                </div>
            </div>
            <hr className="border-gray-200 mb-3" />
            <div className="flex justify-between items-center">
                <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                    <span>Add to cart</span>
                    <i className="ml-1 fas fa-cart-plus"></i>
                </a>
                <a href="#" className="text-red-500 hover:text-red-600">
                    <i className="fas fa-heart"></i>
                </a>
            </div>
        </div>
    </div>

    {/* Card 3 */}
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '350px' }}>
        <img src="/trendyhub/product-4.webp" alt="Product 3" className="w-full h-96 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
                <a href="#" className="text-gray-800 hover:text-gray-600">Elegant Dress</a>
            </h3>
            <div className="flex justify-between items-center mb-2">
                <div className="pricing">
                    <p className="text-lg font-bold text-gray-900"><span>$69.99</span></p>
                </div>
                <div className="rating flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-gray-400"> (5)</span>
                </div>
            </div>
            <hr className="border-gray-200 mb-3" />
            <div className="flex justify-between items-center">
                <a href="#" className="text-primary hover:text-primary-dark flex items-center">
                    <span>Add to cart</span>
                    <i className="ml-1 fas fa-cart-plus"></i>
                </a>
                <a href="#" className="text-red-500 hover:text-red-600">
                    <i className="fas fa-heart"></i>
                </a>
            </div>
        </div>
    </div>

    {/* card 4 */}
    
</div>

 </div>

                                           {/* feature section */}
     <section className="bg-red-700 pt-8 pb-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Feature 1 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="mb-4 flex justify-center text-4xl text-red-700">
                <FaTruck />
              </div>
              <h5 className="text-xl font-semibold mb-2">Fast & Free Delivery</h5>
              <p className="text-gray-600">Free delivery on all orders</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="mb-4 flex justify-center text-4xl text-red-700">
                <FaLock />
              </div>
              <h5 className="text-xl font-semibold mb-2">Secure Payment</h5>
              <p className="text-gray-600">Safe and secure payment methods</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="mb-4 flex justify-center text-4xl text-red-700">
                <FaUndo />
              </div>
              <h5 className="text-xl font-semibold mb-2">Money Back Guarantee</h5>
              <p className="text-gray-600">Get your money back if not satisfied</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <div className="mb-4 flex justify-center text-4xl text-red-700">
                <FaHeadset />
              </div>
              <h5 className="text-xl font-semibold mb-2 ">Online Support</h5>
              <p className="text-gray-600">24/7 support to assist you</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        
        </div>
    );
}
