import React, { useState } from 'react';
import './BenefitsCarousel.css';

const benefits = [
  {
    number: '01',
    title: 'Save Time',
    description: 'Automate repetitive tasks and save up to 15 hours per week on administrative work.',
    stat: '15 hrs/week saved',
    img: '1501705388883-4ed8a543392c',
    alt: 'tiger in the water'
  },
  {
    number: '02',
    title: 'Improve Communication',
    description: 'Real-time updates and instant messaging keep everyone connected and informed.',
    stat: '95% satisfaction rate',
    img: '1519066629447-267fffa62d4b',
    alt: 'lion and lioness resting on a rock in the sun'
  },
  {
    number: '03',
    title: 'Data-Driven Insights',
    description: 'Powerful analytics and reporting tools help you make informed decisions.',
    stat: '100+ reports available',
    img: '1566489564594-f2163930c034',
    alt: 'blue-eyed leopard resting high up with its head on its front paws'
  },
  {
    number: '04',
    title: 'Go Paperless',
    description: 'Digital documentation reduces costs and environmental impact significantly.',
    stat: '80% cost reduction',
    img: '1601544359642-c76c4f7c3221',
    alt: 'jaguar closeup'
  },
  {
    number: '05',
    title: 'Enhanced Parent Engagement',
    description: 'Keep parents actively involved in their children\'s education journey.',
    stat: '3x more engagement',
    img: '1689847190291-f8e0823f13ab',
    alt: 'snow leopard lying low on some rocks, its fur blending in perfectly'
  },
  {
    number: '06',
    title: 'Secure & Compliant',
    description: 'Bank-level security with full compliance to education data protection standards.',
    stat: '99.9% uptime',
    img: '1693702366986-cbfbd1cf0450',
    alt: 'cheetah in the grass at dusk'
  }
];

export default function BenefitsCarousel() {
  const [current, setCurrent] = useState(0);
  const n = benefits.length;

  // Auto-slide every 3 seconds
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % n);
    }, 3000);
    return () => clearInterval(timer);
  }, [n]);

  const b = benefits[current];

  return (
    <section className="benefits-carousel" style={{'--n': n, '--k': current}}>
      <article style={{'--i': current}} className="benefit-card">
        <div className="benefit-number">{b.number}</div>
        <h3 className="benefit-title">{b.title}</h3>
        <p className="benefit-description">{b.description}</p>
        <div className="benefit-stat">{b.stat}</div>
      </article>
    </section>
  );
}
