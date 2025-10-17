import './HowItWorks.css';
import { Icons } from '../../Icons/Icons';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Sign Up',
      description: 'Create your school account in minutes with our simple onboarding process.',
      icon: <Icons.ClipboardList className="icon" />
    },
    {
      step: 2,
      title: 'Set Up Your School',
      description: 'Configure classes, departments, and customize settings to match your needs.',
      icon: <Icons.Settings className="icon" />
    },
    {
      step: 3,
      title: 'Invite Your Team',
      description: 'Add staff, teachers, students, and parents to the platform.',
      icon: <Icons.Mail className="icon" />
    },
    {
      step: 4,
      title: 'Start Managing',
      description: 'Begin streamlining your school operations and see immediate results.',
      icon: <Icons.Rocket className="icon" />
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Get started with Apek in four simple steps
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">Step {step.step}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
