import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-8">
                {/* Subscription Section */}
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="mb-6 text-gray-400">Get the latest updates on new arrivals, special offers, and more.</p>
                    <form className="flex flex-col md:flex-row items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-4 py-2 rounded-md text-gray-800 placeholder-gray-600 mb-4 md:mb-0 md:mr-2"
                        />
                        <button
                            type="submit"
                            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between">
                    {/* Logo and Description */}
                    <div className="mb-8 lg:mb-0 lg:w-1/4">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://your-logo-url.com/logo.png" // Update logo URL
                                className="h-12"
                                alt="TrendyHub Logo"
                            />
                        </Link>
                        <p className="mt-4 text-gray-400">Discover the latest trends in ladies' fashion with TrendyHub.</p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:w-3/4">
                        <div>
                            <h2 className="text-lg font-semibold mb-4 text-gray-300">Shop</h2>
                            <ul className="text-gray-400">
                                <li className="mb-2">
                                    <Link to="/" className="hover:underline">New Arrivals</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/collections" className="hover:underline">Collections</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/sale" className="hover:underline">Sale</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4 text-gray-300">Company</h2>
                            <ul className="text-gray-400">
                                <li className="mb-2">
                                    <Link to="/about" className="hover:underline">About Us</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/contact" className="hover:underline">Contact</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/careers" className="hover:underline">Careers</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-4 text-gray-300">Support</h2>
                            <ul className="text-gray-400">
                                <li className="mb-2">
                                    <Link to="/faq" className="hover:underline">FAQ</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/returns" className="hover:underline">Returns</Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/shipping" className="hover:underline">Shipping Info</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700" />
                <div className="flex flex-col lg:flex-row lg:justify-between items-center">
                    <span className="text-sm text-gray-400">
                        © 2024 <a href="https://trendyhub.com" className="font-semibold hover:underline">TrendyHub</a>. All Rights Reserved.
                    </span>
                    <div className="flex space-x-4 mt-4 lg:mt-0">
                        <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://pinterest.com" className="text-gray-400 hover:text-white" aria-label="Pinterest">
                            <FaPinterestP />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
