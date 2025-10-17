import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does implementation take?',
      answer: 'Most schools are up and running within 1-2 weeks. Our onboarding team guides you through every step, and we provide comprehensive training for your staff.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use bank-level encryption, regular security audits, and comply with all education data protection standards including FERPA and GDPR. Your data is backed up daily and stored in secure, redundant data centers.'
    },
    {
      question: 'Can I import existing data?',
      answer: 'Yes! We support data import from Excel, CSV, and most common school management systems. Our migration team will assist you to ensure a smooth transition.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer email support for all plans, priority support for Professional plans, and 24/7 phone support for Enterprise customers. Plus, we have extensive documentation and video tutorials available.'
    },
    {
      question: 'Can parents access the system?',
      answer: 'Yes! Parents get their own portal where they can view their children\'s attendance, grades, assignments, and communicate with teachers. They can access it via web or mobile app.'
    },
    {
      question: 'Do you offer training for staff?',
      answer: 'Yes, all plans include initial training sessions. We offer live webinars, on-site training (for Enterprise), and a complete library of video tutorials and documentation.'
    },
    {
      question: 'Can I customize the system?',
      answer: 'Professional and Enterprise plans include custom branding. Enterprise plans also offer custom integrations with your existing tools and workflows through our API.'
    },
    {
      question: 'What happens after the free trial?',
      answer: 'You can choose a plan that fits your needs. No credit card is required for the trial, and you won\'t be charged unless you decide to continue. All your data is preserved when you subscribe.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got questions? We've got answers.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="faq-cta">
          <p>Still have questions?</p>
          <button className="btn-contact">Contact Our Team</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
