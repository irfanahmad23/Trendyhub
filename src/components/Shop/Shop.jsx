import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faShoppingCart, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FaHeart, FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

const Shop = () => {
  
  
  
  const [minPrice, setMinPrice] = useState(99);
  const [maxPrice, setMaxPrice] = useState(200);
  const [sliderValue, setSliderValue] = useState(200);

  // const toggleAccordion = (category) => {
  //   setActiveAccordion(activeAccordion === category ? '' : category);

    
  // };
  

  useEffect(() => {
    setMaxPrice(sliderValue);
  }, [sliderValue]);

  const handleSliderChange = (event) => {
    setSliderValue(Number(event.target.value));
  };

  const productsPerPage = 9; // Display 9 products per page
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [activeCategory, setActiveCategory] = useState(''); // State for active category, empty string means no category is selected
  // List of products
  const products = [
    { image: 'casuel.jpg', name: ' Floral Dress', price: '₹2,449', rating: 5, sale: false, stock: false, category: 'Casual Dress' },
    { image: 'casuel-2.jpg', name: ' Salwar Suit', price: '₹3,849', rating: 5, sale: false, stock: false, category: 'Casual Dress' },
    { image: 'casuel-3.jpg', name:  'Chic Dress', price: '₹1,300', rating: 5, sale: false, stock: false, category: 'Casual Dress' },
    { image: 'casuel-4.jpg', name: ' Blue Gown', price: '₹4,789', rating: 5, sale: false, stock: false, category: 'Casual Dress' },
    { image: 'western-2-1.jpg', name: 'Mini Dress ', price: '₹7,349', originalPrice: '₹10,302', rating: 5, sale: true, stock: false, category: 'Western Dress' },
    { image: 'western-2-4.jpg', name: ' Top-Skirt', price: '₹5,149', rating: 5, sale: false, stock: false, category: 'Western Dress' },
    { image: 'western-6.jpg', name: ' Mini-Dress', price: '₹1,249', rating: 5, sale: false, stock: false , category: 'Western Dress'},
    { image: 'western-2-7.jpg', name: 'Strap-Top-skirt', price: '₹5,349', rating: 5, sale: false, stock: true , category: 'Western Dress'},
    { image: 'bomber-4.jpg', name: 'Bomber Jackets', price: '₹4,505', originalPrice: '$59.0', rating: 5, sale: true, stock: false ,category: 'Jackets' },
    { image: 'denim-7.jpg', name: 'Denim Jackets', price: '₹3,249', rating: 4, sale: false, stock: true, category: 'Jackets' },
    { image: 'bomber-7.jpg', name: 'T-Shirts', price: '₹1,190', rating: 4, sale: false, stock: false, category: 'Jackets' },
    { image: 'wedding-3.png', name: 'Wedding Dress', price: '₹120,000', rating: 5, sale: false, stock: true , category: 'Wedding Dress'},
    { image: 'weding-1.webp', name: ' Wedding Dress', price: '₹125,000', rating: 4, sale: false, stock: false , category: 'Wedding Dress'},
    { image: 'weding-4.jpg', name: ' Wedding Dress', price: '₹121,000', rating: 5, sale: false, stock: true , category: 'Wedding Dress'},
    { image: 'nighty-1.jpg', name: 'Nighty-Gown', price: '₹1,845', rating: 5, sale: true, stock: false , category: 'Nightwear'},
    { image: 'night-6.jpg', name: 'Nightwear-Suit', price: '₹1,959', rating: 5, sale: false, stock: false , category: 'Nightwear'},
    { image: 'night-3.webp', name: 'Nighty-Nest', price: '₹1,679', rating: 4, sale: true, stock: false , category: 'Nightwear'},
    { image: 'img3.jpg', name: 'Casual Shirts', price: '₹1287', rating: 5, sale: false, stock: false, category: 'Casual Dress' },
    { image: 'naqab-3.jpg', name: 'Redish Niqab', price: '₹3,269', rating: 4, sale: false, stock: true , category: 'Niqab' },
    { image: 'abaya.webp', name: 'Abaya', price: '₹2,989', rating: 4, sale: false, stock: true , category: 'Niqab'},
    { image: 'naqab-4.jpg', name: 'Black Niqab', price: '₹2,679', rating: 4, sale: false, stock: true , category: 'Niqab'},
    { image: 'md-sar-2.webp', name: 'Stylish Saree', price: '₹3,699', rating: 3, sale: false, stock: true, category: 'Saree' },
    { image: 'saree-6.webp', name: 'Green Saree', price: '₹2,799', rating: 5, sale: true, stock: false, category: 'Saree' },
    { image: 'saree-5.1.webp', name: 'Silk Saree', price: '₹3,139', rating: 4, sale: false, stock: false , category: 'Saree'},
    { image: 'shoes-4.jpg', name: 'Pink Shoes', price: '₹5,355', rating: 4, sale: false, stock: false , category: 'Footwear'},
    { image: 'shoes-3.jpg', name: 'High Heels', price: '₹28,800', rating: 4, sale: false, stock: false , category: 'Footwear'},
    { image: 'shoes-2.jpg', name: 'Sandal', price: '₹2,233', rating: 4, sale: false, stock: false , category: 'Footwear'},
  ];


  // Function to get filtered products based on active category
  const getFilteredProducts = () => {
    if (activeCategory === '' || activeCategory === 'All') {
      return products; // Return all products if no specific category is selected
    }
    return products.filter(product => product.category === activeCategory);
  };

  // Function to get current page's products
  const getPaginatedProducts = () => {
    const filteredProducts = getFilteredProducts();
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(getFilteredProducts().length / productsPerPage);

  // Function to change page
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div className="bg-gray-100">
      {/* Shop Header */}
      <div className="relative w-full">
        <div
          className="w-full h-80 -mt-20 mb-4 bg-cover bg-center flex justify-center items-center"
          style={{ backgroundImage: "url('/trendyhub/bg-5.jpg')" }}
        >
          
          <div className="relative z-10 text-center text-white mt-5">
            <h1 className="text-5xl font-bold">Products</h1>
            <h2 className="mt-4 text-lg">
              <span className="text-white font-semibold text-xl hover:text-red-700">
                <a href="/">Home</a>
              </span>{" "}
              / <span className='text-white font-semibold hover:text-red-700 cursor-pointer'>Shop</span>
            </h2>
          </div>
        </div>
        <section className="shop py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 md:w-1/3 p-4">
            <div className="shop__sidebar bg-white p-4 shadow-md rounded">
{/* 
      ----------------------------------    Filter by categories       ---------------------------
-----------------------------------------------------------------------------------------------------------------
              */}
              <div className="sidebar__categories mb-10 ">
      <h4 className="text-2xl font-bold mb-4 text-gray-800 relative">CATEGORIES
      <span className="absolute bottom-0 left-0 w-20 border-b-2 border-red-700"></span>
      </h4>
      <div className="categories__list mt-8">
        {['All','Casual Dress','Western Dress','Jackets','Wedding Dress','Nightwear', 'Niqab', 'Saree','Footwear'].map((category, index) => (
          <div key={index} className="flex items-center mb-4">
            <input
              type="radio"
              name="category"
              id={`category-${index}`}
              className="form-radio h-5 w-5"
              checked={activeCategory === category || (activeCategory === '' && category === 'All')}
              onChange={() => {
                setActiveCategory(category === 'All' ? '' : category);
                setCurrentPage(1); // Reset to first page when category changes
              }}
            />
            <label
                htmlFor={`category-${index}`}
                className={`ml-2 text-lg font-medium cursor-pointer ${activeCategory === category || (activeCategory === '' && category === 'All') ? 'text-red-700' : 'text-gray-900'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
          </div>
        ))}
      </div>
    </div>


    {/* ----------------------------------    Filter by price       ---------------------------------------
    ----------------------------------------------------------------------------------------------------------------- */}

              
    <div className="sidebar__filter mb-10">
    <h4 className="text-2xl font-bold mb-6 text-gray-800 relative">
    SHOP BY PRICE
    <span className="absolute bottom-0 left-0 w-20 border-b-2 border-red-700"></span>
  </h4>
        <div className="filter-range-wrap">
           {/* Range Slider */}
          <div className="price-range relative mb-4">
        <  input
           type="range"
           min="99"
           max="30000"
           step="3"
           value={sliderValue}
           className="w-full bg-red-600"
           onChange={handleSliderChange}
           />
    </div>

      {/* Price Inputs and Filter Button */}

      <div className="range-slider p-4 sm:-mt-4 xl:-ml-3">

      {/* Price input section */}
      <div className="price-input flex flex-col sm:flex-col xl:flex-row gap-4 items-center mb-4">
        <p className="text-base sm:text-lg font-semibold text-gray-800">Price:</p>
        <input
          type="text"
          id="minamount"
          className="border border-gray-600 p-2 rounded-md w-full sm:w-3/4 md:w-full lg:w-full xl:w-20 2xl:w-28 focus:outline-none focus:ring-2 focus:ring-gray-900"
          value={`₹ ${minPrice}`}
          readOnly
        />
        <input
          type="text"
          id="maxamount"
          className="border border-gray-600 p-2 rounded-md w-full sm:w-3/4 md:w-full lg:w-full xl:w-20 2xl:w-28 focus:outline-none focus:ring-2 focus:ring-gray-900"
          value={`₹ ${sliderValue}`}
          readOnly
        />
      </div>

      {/* Filter button */}
      <a
        href="#"
        className="block w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3 xl:ml-20 2xl:ml-20  mx-auto mt-4 bg-red-600 text-white font-bold text-center py-2 rounded-md shadow hover:bg-red-700 transition duration-300"
      >
        Filter
      </a>
    </div>
    </div>
              </div>

        {/* ----------------------------------  Filter by Size        ---------------------------------------
----------------------------------------------------------------------------------------------------------------- */}

<div className="filter-widget mb-10">
  <h4 className="text-2xl text-gray-800 font-bold mb-7 relative">
    SHOP BY SIZE
    <span className="absolute bottom-0 left-0 w-20 border-b-2 border-red-700"></span>
  </h4>
  <div className="fw-size-choose flex flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5">
    {['S', 'M', 'L', 'XL', '2XL'].map((size, index) => (
      <div key={index} className="sc-item flex-1 min-w-[3rem]">
        <input
          type="radio"
          id={`${size}-size`}
          name="size"
          className="hidden peer"
        />
        <label
          htmlFor={`${size}-size`}
          className="block cursor-pointer border border-gray-400 py-2 px-4 text-gray-900 font-semibold text-xs sm:text-sm md:text-base lg:text-lg peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 transition-colors duration-200 text-center"
        >
          {size}
        </label>
      </div>
    ))}
  </div>
</div>


{/* ------------------------------------------------ Filter by Color ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


<div className="filter-widget mb-10">
  <h4 className="text-2xl font-bold mb-6 text-gray-800 relative">SHOP BY COLOR
  <span className="absolute bottom-0 left-0 w-20 border-b-2 border-red-700"></span>
  </h4>
  <div className="fw-color-choose grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-2 md:-ml-5 lg:grid-cols-2 lg:-ml-4 xl:grid-cols-2 2xl:grid-cols-3">

    {['black', 'violet', 'blue', 'yellow', 'red', 'green', 'pink', 'cream'].map((color) => (
      <div key={color} className="cs-item flex items-center gap-2">
        <input
          type="radio"
          id={`cs-${color}`}
          name="color"
          className="hidden peer"
        />
        <label
          htmlFor={`cs-${color}`}
          className={`cursor-pointer flex items-center gap-2 rounded-full py-2 px-4 text-sm font-semibold transition-colors duration-300 ${
            color === 'black'
              ? 'text-black'
              : color === 'violet'
              ? 'text-black'
              : color === 'blue'
              ? 'text-black'
              : color === 'yellow'
              ? 'text-black'
              : color === 'red'
              ? 'text-black'
              : color === 'green'
              ? 'text-black'
              : color === 'pink'
              ? 'text-black'
              : color === 'cream'
              ? 'text-black' // Custom color for cream
              : ''
          }`}
        >
          <span
            className={`block w-6 h-6 rounded-full ${
              color === 'black'
                ? 'bg-black'
                : color === 'violet'
                ? 'bg-violet-500'
                : color === 'blue'
                ? 'bg-blue-500'
                : color === 'yellow'
                ? 'bg-yellow-500'
                : color === 'red'
                ? 'bg-red-500'
                : color === 'green'
                ? 'bg-green-500'
                : color === 'pink'
                ? 'bg-pink-500'
                
                : color === 'cream'
                ? 'bg-[#f5f5dc]' // Custom color for cream
                : ''
            } peer-checked:border-white`}
          ></span>
          <span className="ml-2">
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </span>
        </label>
      </div>
    ))}
  </div>
</div>


            </div>
          </div>


{/* ------------------------------------------ shop card img--------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

<div className="w-full lg:w-3/4 md:w-2/3 p-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {getPaginatedProducts().map((product, index) => (
      <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
        {/* Product Image */}
        <div className="relative w-full h-64 group">
  <img
    src={`/trendyhub/${product.image}`}
    alt={product.name}
    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
  />
  {/* Hover Icons Container */}
  <div className="absolute -bottom-8 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0">
    <div className="flex items-center space-x-4 bg-white px-6 py-1 ">
      <a
        href="#"
        className="p-2 text-red-700 hover:text-gray-800 transition-colors duration-300 flex items-center justify-center"
      >
        <FaHeart className="text-xl" />
      </a>
      <a
        href="#"
        className="p-2 text-red-700 hover:text-gray-800 transition-colors duration-300 flex items-center justify-center"
      >
        <FaShoppingCart className="text-xl" />
      </a>
      <a
        href="#"
        className="p-2 text-red-700 hover:text-gray-800 transition-colors duration-300 flex items-center justify-center"
      >
        <FaShoppingBag className="text-xl" />
      </a>
    </div>
  </div>
</div>
        {/* Product Info */}
        <div className="p-0 flex-1 flex flex-col justify-end ml-3 mt-20 hover:text-red-600 cursor-pointer">
          <h6 className="text-lg font-semibold mb-2 ">
            <a href="#" className="">{product.name}</a>
          </h6>
          <div className="flex items-center mb-2  justify-end mr-2 -mt-7">
            {[...Array(product.rating)].map((_, i) => (
              <i key={i} className="fa fa-star text-yellow-500 text-xs "></i>
            ))}
          </div>
          <div className="text-gray-900">
            {product.originalPrice && (
              <span className="line-through  text-gray-800 mr-2">{product.originalPrice}</span>
            )}
            <span className="font-bold text-lg">{product.price}</span>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="text-center mt-8">
    <div className="pagination__option flex justify-center space-x-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <a
          key={page}
          href="#"
          onClick={() => handlePageChange(page)}
          className={`bg-red-600 rounded-full w-6 text-white hover:bg-red-700 ${currentPage === page ? 'font-bold' : ''}`}
        >
          {page}
        </a>
      ))}
      <a href="#" onClick={() => handlePageChange(currentPage + 1)} className="text-red-700 hover:underline">
        <i className="fa fa-angle-right"></i>
      </a>
    </div>
  </div>
</div>


    
        </div>
      </div>
    </section>

      </div>

      
      
    </div>
  );
};

export default Shop;
