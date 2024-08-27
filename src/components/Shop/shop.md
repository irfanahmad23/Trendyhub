import React, { useState } from "react";

const Shop = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (category) => {
    if (activeAccordion === category) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(category);
    }
  };

  return (
    <section className="shop spad">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          {/* Categories Section */}
          <div className="w-full lg:w-1/4 md:w-1/3 p-4">
            <div className="sidebar__categories mb-6">
              <h4 className="text-xl font-semibold mb-4 text-orange-600">
                Categories
              </h4>
              <div className="categories__accordion">
                <div className="accordion" id="accordionExample">
                  {["Women", "Men", "Kids", "Accessories", "Cosmetic"].map(
                    (category, index) => (
                      <div key={index} className="mb-4">
                        <div
                          className={`card-heading flex items-center justify-between cursor-pointer p-2 rounded ${
                            activeAccordion === category.toLowerCase()
                              ? "bg-orange-100"
                              : "bg-gray-800 text-white"
                          }`}
                          onClick={() => toggleAccordion(category.toLowerCase())}
                        >
                          <span className="font-semibold">{category}</span>
                          <i
                            className={`fa ${
                              activeAccordion === category.toLowerCase()
                                ? "fa-chevron-up"
                                : "fa-chevron-down"
                            }`}
                          ></i>
                        </div>
                        <div
                          id={`collapse${index}`}
                          className={`collapse ${
                            activeAccordion === category.toLowerCase()
                              ? "block"
                              : "hidden"
                          } bg-gray-100`}
                        >
                          <div className="card-body p-4">
                            <ul>
                              {[
                                "Coats",
                                "Jackets",
                                "Dresses",
                                "Shirts",
                                "T-shirts",
                                "Jeans",
                              ].map((item, i) => (
                                <li key={i} className="py-1">
                                  <a
                                    href="#"
                                    className="text-gray-800 hover:text-orange-600"
                                  >
                                    {item}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="w-full lg:w-3/4 md:w-2/3 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  image: "shop-1.jpg",
                  name: "Furry hooded parka",
                  price: "$59.0",
                  rating: 5,
                  sale: false,
                  stock: false,
                },
                {
                  image: "shop-2.jpg",
                  name: "Flowy striped skirt",
                  price: "$49.0",
                  rating: 5,
                  sale: false,
                  stock: false,
                },
                // Add more products as needed
              ].map((product, index) => (
                <div
                  key={index}
                  className="product__item relative bg-white shadow-md rounded overflow-hidden group"
                >
                  {product.sale && (
                    <div className="label bg-red-500 text-white absolute top-0 left-0 p-2">
                      Sale
                    </div>
                  )}
                  {product.stock && (
                    <div className="label bg-gray-500 text-white absolute top-0 left-0 p-2">
                      Out Of Stock
                    </div>
                  )}
                  <div
                    className="product__item__pic bg-cover bg-center h-64 transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    style={{ backgroundImage: `url(img/shop/${product.image})` }}
                  >
                    <ul className="product__hover absolute bottom-0 left-0 right-0 flex justify-center space-x-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <li>
                        <a
                          href={`img/shop/${product.image}`}
                          className="text-white bg-orange-500 p-2 rounded-full"
                        >
                          <span className="icon_expand"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white bg-orange-500 p-2 rounded-full"
                        >
                          <span className="icon_heart"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white bg-orange-500 p-2 rounded-full"
                        >
                          <span className="icon_bag"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text p-4">
                    <h6 className="text-lg font-semibold mb-2 text-gray-800">
                      <a href="#">{product.name}</a>
                    </h6>
                    <div className="rating mb-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <i
                          key={i}
                          className="fa fa-star text-yellow-500"
                        ></i>
                      ))}
                    </div>
                    <div className="product__price">
                      {product.originalPrice && (
                        <span className="line-through text-gray-500">
                          {product.originalPrice}
                        </span>
                      )}
                      {product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
