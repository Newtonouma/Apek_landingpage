import './Features.css';
import { Icons } from '../../Icons/Icons';

const Features = () => {
  const features = [
    {
      icon: <Icons.Users className="icon" />,
      title: 'Student Management',
      description: 'Comprehensive student profiles, enrollment tracking, and academic records all in one place.'
    },
    {
      icon: <Icons.CheckCircle className="icon" />,
      title: 'Attendance Tracking',
      description: 'Real-time attendance monitoring with automated alerts and detailed reporting.'
    },
    {
      icon: <Icons.ChartBar className="icon" />,
      title: 'Grade Management',
      description: 'Digital grade books, automated report cards, and powerful analytics dashboard.'
    },
    {
      icon: <Icons.UserGroup className="icon" />,
      title: 'Parent Portal',
      description: 'Dedicated portal for parents to track progress, communicate, and stay informed.'
    },
    {
      icon: <Icons.AcademicCap className="icon" />,
      title: 'Staff Management',
      description: 'Streamlined scheduling, payroll integration, and performance tracking.'
    },
    {
      icon: <Icons.CurrencyDollar className="icon" />,
      title: 'Financial Management',
      description: 'Automated fee collection, billing, expense tracking, and financial reporting.'
    },
    {
      icon: <Icons.Calendar className="icon" />,
      title: 'Timetable & Scheduling',
      description: 'Intelligent automated class scheduling with conflict detection and resolution.'
    },
    {
      icon: <Icons.Chat className="icon" />,
      title: 'Communication Tools',
      description: 'Instant announcements, messaging, and push notifications for all stakeholders.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">Powerful Features for Modern Schools</h2>
          <p className="section-subtitle">
            Everything you need to manage your school efficiently in one integrated platform
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
