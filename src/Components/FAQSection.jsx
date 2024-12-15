/* eslint-disable no-unused-vars */
 
import React, { useState } from "react";

const faqs = [
  {
    question: "What is Hunch?",
    answer: "Et est at netus dolor aliquam elit. At augue at metus semper. Et est at netus dolor aliquam elit. At augue at metus semper. Et est at netus dolor aliquam elit. At augue at metus semper.",
  },
  {
    question: "What is Hunch",
    answer: "Et est at netus dolor aliquam elit. At augue at metus semper.",
  },
  {
    question: "What is Hunch",
    answer: "Et est at netus dolor aliquam elit. At augue at metus semper.",
  },
  {
    question: "What is Hunch",
    answer: "Et est at netus dolor aliquam elit. At augue at metus semper.",
  },
  {
    question: "What is Hunch",
    answer: "Et est at netus dolor aliquam elit. At augue at metus semper.",
  },
 
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b py-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{faq.question}</h3>
                  <span>{activeIndex === index ? "−" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-medium mb-4">Do you have a question?</h3>
            <textarea
              className="w-full h-60 p-4 border font-bold text-black border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="Drop a message for us"
            />
            <button className="mt-4 px-20 py-3 bg-red-500 text-white rounded-md hover:bg-red-600">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;