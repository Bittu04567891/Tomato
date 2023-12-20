// Faq.jsx
import React, { useState } from "react";
import "./Faq.css"; // Import your stylesheet

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question:
        "What will TomatoEats charge me for creating a page on its platform?",
      answer:
        "TomatoEats provides free listing services for your restaurant page. There are no charges for creating a basic page on the platform.",
    },
    {
      question:
        "What all documents are required for registering on online ordering?",
      answer:
        "The documents required for registering on TomatoEats's online ordering platform include...",
    },
    {
      question:
        "I have a large fleet of delivery boys, why should I use TomatoEats’s delivery service?",
      answer:
        "TomatoEats's delivery service offers a wide customer base and additional exposure for your business, resulting in increased orders and revenue.",
    },
    {
      question:
        "What happens if the average order value of TomatoEats orders is very low?",
      answer:
        "Low average order value may impact your profitability. TomatoEats provides tools and insights to help you optimize your menu and pricing for better results.",
    },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently asked questions</h1>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div
            className="faq-question"
            onClick={() => handleAccordionClick(index)}
          >
            <h3>{item.question}</h3>
            <i class="fa-solid fa-chevron-down"></i>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
