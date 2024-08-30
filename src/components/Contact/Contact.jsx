import React from 'react';
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <div
        className="w-full h-80 -mt-20 mb-20 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: "url('/trendyhub/bg-4.jpg')" }}
      >
        <div className="relative z-10 text-center text-white mt-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact</h1>
          <h2 className="mt-4 text-base sm:text-lg md:text-lg">
            <span className="text-white font-semibold text-xl hover:text-red-700">
              <a href="/">Home</a>
            </span>{" "}
            /{" "}
            <span className="text-white font-semibold hover:text-red-700 cursor-pointer">
              Contact
            </span>
          </h2>
        </div>
      </div>

      <div className="w-full h-64 sm:h-80 md:h-96 mb-10">
        <iframe
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=New%20York%20City+(Your%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        ></iframe>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap -mx-4">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800">
              Get in Touch
            </h2>
            <form
              className="contact_form"
              action="contact_process.php"
              method="post"
              id="contactForm"
              noValidate="novalidate"
            >
              <div className="flex flex-wrap -mx-4 mb-4">
                <div className="w-full sm:w-1/2 px-4 mb-4 sm:mb-0">
                  <input
                    className="w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-red-700"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-4">
                  <input
                    className="w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-red-700"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  className="w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-red-700"
                  name="subject"
                  id="subject"
                  type="text"
                  placeholder="Enter Subject"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-3 border border-gray-800 rounded-lg focus:outline-none focus:border-red-700"
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Enter Message"
                ></textarea>
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="bg-red-700 text-white py-3 px-8 rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 px-4 mt-12 lg:mt-16">
            <div className="space-y-8">
              <div className="flex items-start">
                <span className="text-red-700 text-2xl mr-4">
                  <FaHome />
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    Buttonwood, California.
                  </h3>
                  <p className="text-red-700">Rosemead, CA 91770</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-700 text-2xl mr-4">
                  <FaPhone />
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    +1 253 565 2365
                  </h3>
                  <p className="text-red-700">Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-700 text-2xl mr-4">
                  <FaEnvelope />
                </span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    support@colorlib.com
                  </h3>
                  <p className="text-red-700">Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
