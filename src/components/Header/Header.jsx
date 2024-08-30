import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky z-50 top-6 left-0 ">
            <nav className=" bg-white shadow-md mx-auto flex items-center h-16 justify-between font-semibold px-4 py-3 lg:px-8 lg:py-4 sm:rounded-full max-w-full md:max-w-[95%] lg:max-w-[90%] xl:max-w-[85%] 2xl:max-w-[65%]">
            
  <Link to="/" className="flex items-center">
    <img
      src="/trendyhub/lg-2.png" // Replace with your TrendyHub logo
      className="h-20 w-20 max-h-full" // Adjust to fit within navbar height
      alt="TrendyHub Logo"
    />
  </Link>
                <div className="flex items-center lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex space-x-8">
                    <NavLink to="/"  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                        Home
                    </NavLink>
                    <NavLink to="/shop" className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }>
                        Shop
                    </NavLink>
                   
                    <NavLink to="/contact"  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                    }>
                        Contact
                    </NavLink>
                    <NavLink to="/faq"  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-red-700" : "text-gray-800"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-red-700 lg:p-0`
                                    }>
                        FAQ
                    </NavLink>
                </div>
                <div className="hidden lg:flex space-x-4">
                    <Link
                        to="/login"
                        className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Log In
                    </Link>
                    <Link
                        to="/signup"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Register
                    </Link>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40" onClick={toggleMenu}></div>
            )}

            <div
                className={`fixed inset-y-0 left-0 bg-white w-64 z-50 transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex items-center justify-between px-4 py-3">
                    <Link to="/" className="flex items-center">
                        <img
                            src="/trendyhub/lg-1.png" // Replace with your TrendyHub logo
                            className="h-20 w-20"
                            alt="TrendyHub Logo"
                        />
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <nav className="mt-4">
                    <NavLink
                        to="/"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={toggleMenu}
                    >
                        Shop
                    </NavLink>
                   
                    <NavLink
                        to="/contact"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={toggleMenu}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/faq"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={toggleMenu}
                    >
                        FAQ
                    </NavLink>
                </nav>
                <div className="mt-4 px-4">
                    <Link
                        to="/login"
                        className="block text-center text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mb-2"
                        onClick={toggleMenu}
                    >
                        Log In
                    </Link>
                    <Link
                        to="/Signup"
                        className="block text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
                        onClick={toggleMenu}
                    >
                        Register
                    </Link>
                </div>
            </div>
        </header>
    );
}
