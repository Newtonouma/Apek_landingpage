import './CTA.css';
import { Icons } from '../../Icons/Icons';

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your School?</h2>
          <p className="cta-subtitle">
            Join 500+ schools already using APEK to streamline their operations and enhance education.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta primary">Start Free Trial</button>
            <button className="btn-cta secondary">Schedule Demo</button>
          </div>
          <div className="cta-note">
            <span className="cta-feature">
              <Icons.Check className="cta-check-icon" />
              No credit card required
            </span>
            <span className="cta-feature">
              <Icons.Check className="cta-check-icon" />
              30-day free trial
            </span>
            <span className="cta-feature">
              <Icons.Check className="cta-check-icon" />
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
