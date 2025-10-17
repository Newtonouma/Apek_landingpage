import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';
import { Icons } from '../../Icons/Icons';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsInView, setCardsInView] = useState(4);
  const [showArrows, setShowArrows] = useState(window.innerWidth >= 1024);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      name: 'Mary Wanjiku',
  role: 'Principal, Tumaini Springs Academy',
      image: <Icons.AcademicCap className="testimonial-avatar-icon" />,
  quote: 'APEK makes our work easier and faster.',
      rating: 4
    },
    {
      name: 'John Otieno',
  role: 'ICT Teacher, Baraka Ridge School',
      image: <Icons.Users className="testimonial-avatar-icon" />,
      quote: 'Teachers and parents love the portal.',
      rating: 5
    },
    {
      name: 'Faith Mwende',
  role: 'Administrator, Elimu Crest Academy',
      image: <Icons.UserGroup className="testimonial-avatar-icon" />,
      quote: 'Reports are quick and clear.',
      rating: 3
    },
    {
      name: 'Peter Njoroge',
  role: 'Head Teacher, Upendo Valley Primary',
      image: <Icons.AcademicCap className="testimonial-avatar-icon" />,
      quote: 'Setup was easy. Support is great.',
      rating: 5
    }
  ];

  // Responsive cards in view
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setCardsInView(4);
        setShowArrows(true);
      } else if (window.innerWidth >= 768) {
        setCardsInView(3);
        setShowArrows(false);
      } else {
        setCardsInView(1);
        setShowArrows(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    let visible = [];
    for (let i = 0; i < cardsInView; i++) {
      const idx = (activeIndex + i) % testimonials.length;
      visible.push(testimonials[idx]);
    }
    return visible;
  };

  // Navigation handlers
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="section-title">What Educators Say</h2>
          <p className="section-subtitle">
            Trusted by educational leaders worldwide
          </p>
        </div>
        <div className="testimonial-carousel multi">
          {showArrows && (
            <button className="carousel-btn prev" onClick={prevTestimonial}>‹</button>
          )}
          {getVisibleTestimonials().map((t, i) => (
            <div className="testimonial-card slide" key={i}>
              <div className="testimonial-image">{t.image}</div>
              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, j) => (
                  <Icons.Star key={j} className="star-icon" color="#fbbf24" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <h4 className="testimonial-name">{t.name}</h4>
              <p className="testimonial-role">{t.role}</p>
            </div>
          ))}
          {showArrows && (
            <button className="carousel-btn next" onClick={nextTestimonial}>›</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
