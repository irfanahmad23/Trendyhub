// src/components/FAQ/FAQ.jsx

import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: "What is Trendy Hub?",
      answer: "Trendy Hub is an online store that offers a wide variety of trendy clothing and accessories for all ages."
    },
    {
      question: "How can I place an order?",
      answer: "To place an order, simply browse our products, add items to your cart, and proceed to checkout."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers."
    },
    {
      question: "How can I track my order?",
      answer: "After placing your order, you will receive a tracking number via email. You can use this number to track your order on our website."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase. The items must be in their original condition with all tags attached."
    },
    {
      question: "How do I contact customer service?",
      answer: "You can contact our customer service team via the Contact Us page or by emailing support@trendyhub.com."
    },
  ];

  return (
    <div className="faq-container p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="faq-list space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item bg-white shadow-md p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
