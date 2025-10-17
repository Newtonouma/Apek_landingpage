import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background Video */}
      <video 
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        playsInline
        crossOrigin="anonymous"
      >
        <source src="https://videos.pexels.com/video-files/5198152/5198152-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-full">Transform Your School Administration with <span className="brand-highlight">APEK</span></span>
            <span className="hero-title-mobile">Smart School Management by <span className="brand-highlight">APEK</span></span>
          </h1>
          <p className="hero-subtitle">
            <span className="hero-subtitle-full">Modern school management made simple. Streamline operations, enhance communication, 
            and empower your educational institution with cutting-edge technology.</span>
            <span className="hero-subtitle-mobile">Modern school management made simple and efficient.</span>
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">Request Demo</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Schools</p>
            </div>
            <div className="stat">
              <h3>50K+</h3>
              <p>Users</p>
            </div>
            <div className="stat">
              <h3>99.9%</h3>
              <p>Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
