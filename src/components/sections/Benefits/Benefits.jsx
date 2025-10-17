import './Benefits.css';
import BenefitsCarousel from './BenefitsCarousel';

const Benefits = () => {
  const benefits = [
    {
      number: '01',
      title: 'Save Time',
      description: 'Automate repetitive tasks and save up to 15 hours per week on administrative work.',
      stat: '15 hrs/week saved'
    },
    {
      number: '02',
      title: 'Improve Communication',
      description: 'Real-time updates and instant messaging keep everyone connected and informed.',
      stat: '95% satisfaction rate'
    },
    {
      number: '03',
      title: 'Data-Driven Insights',
      description: 'Powerful analytics and reporting tools help you make informed decisions.',
      stat: '100+ reports available'
    },
    {
      number: '04',
      title: 'Go Paperless',
      description: 'Digital documentation reduces costs and environmental impact significantly.',
      stat: '80% cost reduction'
    },
    {
      number: '05',
      title: 'Enhanced Parent Engagement',
      description: 'Keep parents actively involved in their children\'s education journey.',
      stat: '3x more engagement'
    },
    {
      number: '06',
      title: 'Secure & Compliant',
      description: 'Bank-level security with full compliance to education data protection standards.',
      stat: '99.9% uptime'
    }
  ];

  return (
    <section className="benefits" id="benefits">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="section-title">Why Schools Choose Apek</h2>
          <p className="section-subtitle">
            Transform your school operations with measurable results and proven benefits
          </p>
        </div>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-number">{benefit.number}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <div className="benefit-stat">{benefit.stat}</div>
            </div>
          ))}
        </div>
        <BenefitsCarousel />
      </div>
    </section>
  );
};

export default Benefits;
