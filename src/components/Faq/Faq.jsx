import React, { useState } from 'react';

// FAQ Data
const faqs = {
  General: [
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be in their original condition and packaging.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days. Expedited shipping options are available at checkout.',
    },
    {
      question: 'Can I change my order after placing it?',
      answer: 'Orders cannot be modified once placed. You can contact customer service for assistance.',
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we offer international shipping. Shipping fees and delivery times vary by location.',
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your order using the tracking number provided in the confirmation email.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, debit cards, and PayPal.',
    },
  ],
  'Fees and Charges': [
    {
      question: 'What are the shipping fees?',
      answer: 'Shipping fees are calculated based on the delivery location and weight of the package.',
    },
    {
      question: 'Are there any hidden charges?',
      answer: 'No, we have transparent pricing. Any applicable charges will be displayed before checkout.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept major credit cards, debit cards, and PayPal.',
    },
    {
      question: 'Is there a fee for returning items?',
      answer: 'Returns are free if done within 30 days. After 30 days, a return fee may apply.',
    },
    {
      question: 'How can I get a refund?',
      answer: 'Refunds are processed to the original payment method once the returned item is received.',
    },
    {
      question: 'Do I have to pay customs duties for international orders?',
      answer: 'Customs duties are determined by the destination country and are the buyer’s responsibility.',
    },
  ],
  'Managing Your Account': [
    {
      question: 'How can I update my account information?',
      answer: 'You can update your account information from the account settings page.',
    },
    {
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click on the "Forgot Password" link.',
    },
    {
      question: 'How do I delete my account?',
      answer: 'You can request account deletion through customer support.',
    },
    {
      question: 'Can I change my email address?',
      answer: 'Yes, you can change your email address in your account settings.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach customer support via email, phone, or live chat.',
    },
    {
      question: 'How do I view my order history?',
      answer: 'You can view your order history in the "Orders" section of your account dashboard.',
    },
  ],
  Services: [
    {
      question: 'What services do you offer?',
      answer: 'We offer a range of services including product delivery, customer support, and more.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact customer support via email, phone, or live chat on our website.',
    },
    {
      question: 'Do you offer installation services?',
      answer: 'Installation services are available for select products. Please contact us for more details.',
    },
    {
      question: 'What is the warranty period?',
      answer: 'Warranty periods vary by product. Check the product details or contact customer service for specifics.',
    },
    {
      question: 'Can I schedule a delivery?',
      answer: 'Yes, delivery scheduling options are available at checkout.',
    },
    {
      question: 'Do you offer gift wrapping services?',
      answer: 'Yes, we offer gift wrapping for select products during the checkout process.',
    },
  ],
  'Fulfillment by Shopsy': [
    {
      question: 'What is Fulfillment by Shopsy?',
      answer: 'Fulfillment by Shopsy is a service where we handle storage, packaging, and shipping of your products.',
    },
    {
      question: 'How can I use Fulfillment by Shopsy?',
      answer: 'You can enroll in Fulfillment by Shopsy from your seller dashboard.',
    },
    {
      question: 'Are there any fees for using this service?',
      answer: 'Fees apply based on storage and shipping volumes. Details are available in your seller account.',
    },
    {
      question: 'How do I manage inventory with Fulfillment by Shopsy?',
      answer: 'Inventory management can be done through your seller dashboard where you can track and update stock levels.',
    },
    {
      question: 'What are the shipping options available?',
      answer: 'Various shipping options are available including standard, expedited, and overnight delivery.',
    },
    {
      question: 'Can I use my own packaging for Fulfillment by Shopsy?',
      answer: 'Yes, you can use your own packaging, but it must meet Shopsy’s packaging guidelines.',
    },
  ],
};

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const displayFAQs = faqs[activeCategory].slice(0, 6); // Display the first 6 questions

  return (
    <div>
      {/* Background Image Section */}
      <div className="relative w-full h-96 bg-cover bg-center -mt-28" style={{ backgroundImage: 'url("image/imgFAQ2.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-75"></div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-8 text-right">
          <h1 className="text-5xl font-extrabold text-white">FAQs at Trendy Hub</h1>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="flex flex-col md:flex-row">
        {/* Categories Section */}
        <div className="w-full md:w-1/4 bg-gray-100 p-4 pt-14">
          <ul className="space-y-3">
            {Object.keys(faqs).map((category, index) => (
              <li key={index}>
                <button
                  className={`w-full text-left py-3 px-5 rounded-lg transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-purple-500 text-white'
                      : 'bg-white text-gray-800 hover:bg-indigo-500 hover:text-white'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* FAQ Section */}
        <div className="w-full md:w-3/4 p-6 pt-8">
          <div className="space-y-6">
            {displayFAQs.map((faq, index) => (
              <div key={index} className="rounded-lg bg-white shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-5 py-6 text-left bg-white border-b border-gray-300 focus:outline-none"
                >
                  <span className="text-xl font-semibold text-gray-700">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-5 py-4 bg-gray-50 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
