import React, { useState } from 'react';
import './FAQ.css'; // Custom CSS for FAQ

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState({}); // Track active index per slide

  const faqs = [
    { question: "What services does NextDev offer in MERN development?", answer: "NextDev offers full-stack MERN development, including website and web application development using MongoDB, Express.js, React.js, and Node.js." },
    { question: "How much does MERN development cost globally?", answer: "Our MERN development services start from $30 per hour for global clients, and we currently offer a 30% discount for new projects." },
    { question: "What pricing plans do you offer for MERN development?", answer: "We offer flexible pricing plans, starting from $1000 per project. With a 30% discount, the cost reduces to $700 for new clients." },
    { question: "Do you provide custom MERN solutions?", answer: "Yes, we provide fully customizable MERN solutions based on the specific requirements of the client." },
    { question: "Can I track the progress of my MERN project?", answer: "Yes, we provide regular updates, and you can track the progress of your project using our project dashboard." },
    { question: "What technologies are included in the MERN stack?", answer: "The MERN stack includes MongoDB for the database, Express.js for the back-end framework, React.js for the front-end, and Node.js for the runtime environment." },
    { question: "How long does it take to develop a MERN application?", answer: "The development time varies based on the complexity of the project, but on average, it takes around 4-6 weeks to develop a full-featured MERN application." },
    { question: "Do you offer post-launch support for MERN applications?", answer: "Yes, we offer comprehensive post-launch support and maintenance for all MERN applications developed by NextDev." },
    { question: "Can I get a Progressive Web App (PWA) with MERN?", answer: "Yes, we specialize in developing PWAs using the MERN stack to deliver high-performance, offline-first web applications." },
    { question: "Is it possible to integrate third-party APIs in MERN applications?", answer: "Yes, we can integrate various third-party APIs into your MERN application, including payment gateways, social logins, and more." },
    { question: "What is the typical maintenance cost for a MERN application?", answer: "Maintenance costs vary depending on the complexity of the application. Typically, it ranges from $200 to $500 per month, with flexible plans available." },
    { question: "How scalable is a MERN stack application?", answer: "The MERN stack is highly scalable, allowing us to build applications that can handle increasing workloads with ease." },
    { question: "Do you offer cloud hosting for MERN applications?", answer: "Yes, we provide cloud hosting services using AWS, Google Cloud, or Azure, depending on your requirements." },
    { question: "What kind of database security do you provide for MongoDB?", answer: "We ensure MongoDB is secure by applying SSL/TLS encryption, using firewalls, and implementing proper authentication and authorization mechanisms." },
    { question: "Do you provide data migration services for existing projects to MERN stack?", answer: "Yes, we offer data migration services to migrate your existing project from another stack to the MERN stack." },
    { question: "Can you optimize an existing MERN stack project?", answer: "Yes, we can analyze and optimize your existing MERN stack project for better performance and scalability." }
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
