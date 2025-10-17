import './Pricing.css';
import { Icons } from '../../Icons/Icons';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
  price: 'KSh 35,000',
  period: '/term',
      description: 'Perfect for small schools',
      features: [
        'Up to 400 students',
        'Basic attendance tracking',
        'Parent portal access',
        'Email support',
        '5 GB storage',
        'Mobile app access'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
  price: 'KSh 70,000',
  period: '/term',
      description: 'Most popular for medium schools',
      features: [
        'Up to 400+ students',
        'Advanced attendance & grading',
        'Financial management',
        'Priority support',
        '50 GB storage',
        'Custom branding',
        'API access',
        'Advanced analytics'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large institutions',
      features: [
        'Unlimited students',
        'All Professional features',
        'Dedicated account manager',
        '24/7 phone support',
        'Unlimited storage',
        'Custom integrations',
        'Advanced security',
        'On-premise option'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            Choose the plan that fits your school's needs. All plans include a 30-day free trial.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
              {plan.highlighted && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <Icons.Check className="checkmark-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`plan-btn ${plan.highlighted ? 'primary' : 'secondary'}`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>
        <div className="pricing-note">
          <p>All plans include free onboarding and training. No credit card required for trial.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
