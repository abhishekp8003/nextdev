import React, { useState } from 'react';
import './FAQ.css'; // Custom CSS for FAQ

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState({}); // Track active index per slide

  const faqs = [
    { question: "What technology stacks do you use?", answer: "We offer development services using MERN stack, MEAN stack, and WordPress, tailored to the specific needs of your business." },
    { question: "What is the typical timeline to develop a project?", answer: "We can deliver projects in as little as 7 days, depending on complexity and scope." },
    { question: "Can you help me decide which stack is right for my project?", answer: "Yes, we assess your business requirements and recommend the best technology stack, whether it's MERN, MEAN, or WordPress." },
    { question: "Do you provide end-to-end solutions?", answer: "Yes, we handle everything from design to development, deployment, and ongoing maintenance." },
    { question: "How do you ensure fast project delivery?", answer: "Our agile approach, experienced team, and efficient processes allow us to deliver high-quality projects within short timelines." },
    { question: "Can you integrate third-party services?", answer: "Yes, we specialize in integrating APIs, payment gateways, and third-party services to enhance your application." },
    { question: "Do you offer post-launch support?", answer: "Absolutely, we offer full post-launch support, including maintenance and upgrades." },
    { question: "Is SEO included in web development services?", answer: "Yes, we include SEO optimization as part of our web development services to ensure better search engine visibility." },
    { question: "What are your pricing plans?", answer: "Our pricing starts at as low as 599 inr  for new clients with flexible options, depending on project requirements and stack choices." },
    { question: "How do you ensure project security?", answer: "We follow best practices for securing your application, including using SSL, firewalls, and data encryption." },
    { question: "Can you optimize an existing WordPress or MERN project?", answer: "Yes, we can optimize existing projects for performance, security, and scalability." },
    { question: "Do you offer cloud hosting solutions?", answer: "Yes, we provide hosting solutions on AWS, Google Cloud, and other platforms as per your requirements." },
  ];

  const chunkSize = 5; // Number of FAQs per slide
  const slides = Array.from({ length: Math.ceil(faqs.length / chunkSize) }, (_, i) =>
    faqs.slice(i * chunkSize, i * chunkSize + chunkSize)
  );

  const handleToggle = (slideIndex, faqIndex) => {
    setActiveIndex(prevState => ({
      ...prevState,
      [slideIndex]: prevState[slideIndex] === faqIndex ? null : faqIndex, // Toggle active FAQ for specific slide
    }));
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-items">
        {slides.map((slide, slideIndex) => (
          <div className="faq-slide" key={slideIndex}>
            {slide.map((faq, faqIndex) => (
              <div
                key={faqIndex}
                className={`faq-item ${activeIndex[slideIndex] === faqIndex ? 'expanded' : ''}`}
                onClick={() => handleToggle(slideIndex, faqIndex)}
              >
                <div className={`faq-question ${activeIndex[slideIndex] === faqIndex ? 'active' : ''}`}>
                  {faq.question}
                </div>
                {activeIndex[slideIndex] === faqIndex && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
