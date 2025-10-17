import './Footer.css';
import { Icons } from '../../Icons/Icons';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Accordion state for mobile
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionSections = [
    {
      key: 'product',
      heading: 'Product',
      links: [
        { href: '#features', label: 'Features' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#faq', label: 'FAQ' },
      ],
    },
    {
      key: 'company',
      heading: 'Company',
      links: [
        { href: '#about', label: 'About Us' },
        { href: '#careers', label: 'Careers' },
        { href: '#blog', label: 'Blog' },
        { href: '#press', label: 'Press Kit' },
      ],
    },
    {
      key: 'support',
      heading: 'Support',
      links: [
        { href: '#help', label: 'Help Center' },
        { href: '#contact', label: 'Contact Us' },
        { href: '#status', label: 'System Status' },
        { href: '#docs', label: 'Documentation' },
      ],
    },
    {
      key: 'legal',
      heading: 'Legal',
      links: [
        { href: '#privacy', label: 'Privacy Policy' },
        { href: '#terms', label: 'Terms of Service' },
        { href: '#security', label: 'Security' },
        { href: '#compliance', label: 'Compliance' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
          {/* Desktop grid layout */}
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo-combo">
                <img src="/images/APEK White.png" alt="APEK Logo" className="footer-logo-img" />
                <span className="footer-logo-text">APEKTECH INC</span>
              </div>
              <p className="footer-tagline">
                Modern school management by APEKTECH INC
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Icons.Facebook className="social-icon" />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Icons.Twitter className="social-icon" />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Icons.LinkedIn className="social-icon" />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Icons.Instagram className="social-icon" />
                </a>
              </div>
            </div>
            {accordionSections.map(section => (
              <div className="footer-column" key={section.key}>
                <h4 className="footer-heading">{section.heading}</h4>
                <ul className="footer-links">
                  {section.links.map(link => (
                    <li key={link.href}><a href={link.href}>{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile accordion layout */}
          <div className="footer-accordion">
            <div className="footer-column">
              <div className="footer-logo-combo">
                <img src="/images/APEK White.png" alt="APEK Logo" className="footer-logo-img" />
                <span className="footer-logo-text">APEK</span>
              </div>
              <p className="footer-tagline">
                Modern school management by APEKTECH INC
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <Icons.Facebook className="social-icon" />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <Icons.Twitter className="social-icon" />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <Icons.LinkedIn className="social-icon" />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <Icons.Instagram className="social-icon" />
                </a>
              </div>
            </div>
            {accordionSections.map(section => (
              <div className={`footer-accordion-section${openAccordion === section.key ? ' open' : ''}`} key={section.key}>
                <button
                  className="footer-accordion-header"
                  aria-expanded={openAccordion === section.key}
                  aria-controls={`footer-accordion-panel-${section.key}`}
                  onClick={() => setOpenAccordion(openAccordion === section.key ? null : section.key)}
                >
                  {section.heading}
                  <span className={`footer-accordion-arrow${openAccordion === section.key ? ' open' : ''}`}></span>
                </button>
                <div
                  id={`footer-accordion-panel-${section.key}`}
                  className={`footer-accordion-panel${openAccordion === section.key ? ' open' : ''}`}
                  style={{ maxHeight: openAccordion === section.key ? '500px' : '0px' }}
                >
                  <ul className="footer-links">
                    {section.links.map(link => (
                      <li key={link.href}><a href={link.href}>{link.label}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        <div className="footer-bottom">
          <div className="footer-contact">
            <p className="contact-item">
              <Icons.Mail className="contact-icon" />
              info@apektechinc.com
            </p>
            <p className="contact-item">
              <Icons.Phone className="contact-icon" />
              Calls/WhatsApp +254701583807
            </p>
            <p className="contact-item">
              <Icons.LocationMarker className="contact-icon" />
              Juja, Kiambu County, Kenya
            </p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} APEKTECH INC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
