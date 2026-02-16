import React, { useState } from 'react';
import './App.css';
import photo from './photo.jpg';
import meme from './meme.jpg';
import gathr from './gathr.jpeg';
import coverLetter from './coverletter.png';

interface CartItem {
  name: string;
  value: number;
}

interface Service {
  icon: string;
  title: string;
  rating: string;
  reviews: number;
  description: string;
  mastery: number;
  badge?: string;
  badgeColor?: string;
}

interface Project {
  image: string;
  title: string;
  rating: string;
  description: string;
  link: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  rating: string;
  responsibilities: string[];
  funNote?: string;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const services: Service[] = [
    {
      icon: '⚛️',
      title: 'Front-End Development',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 150,
      description: 'React.js, Next.js, TypeScript, Redux Toolkit, TanStack Query. Building scalable web applications with modern frameworks.',
      mastery: 95,
      badge: 'EXPERT',
      badgeColor: '#10b981'
    },
    {
      icon: '🎨',
      title: 'UI/UX & Styling',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 120,
      description: 'Tailwind CSS, Bootstrap 5, Storybook, Figma-to-Code. Creating beautiful, responsive interfaces that users love.',
      mastery: 92,
      badge: 'BESTSELLER',
      badgeColor: '#f59e0b'
    },
    {
      icon: '🔧',
      title: 'Backend Development',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 110,
      description: 'C# (.NET Core), Node.js, Python, ASP.NET Core, Web API, Express.js. Building robust and scalable backend systems.',
      mastery: 90,
    },
    {
      icon: '🔌',
      title: 'APIs & Integration',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 95,
      description: 'RESTful APIs, GraphQL (Apollo), gRPC, WebSockets, MuleSoft. Seamless integration across systems and platforms.',
      mastery: 88,
      badge: 'CERTIFIED',
      badgeColor: '#7c3aed'
    },
    {
      icon: '💾',
      title: 'Database & Caching',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 85,
      description: 'PostgreSQL, MySQL, MongoDB, Redis, RabbitMQ. Efficient data management and caching strategies.',
      mastery: 87
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      rating: '⭐⭐⭐⭐⭐',
      reviews: 100,
      description: 'AWS (Certified), Azure, Docker, Kubernetes, Jenkins, CI/CD pipelines. Cloud-native deployment and infrastructure.',
      mastery: 85,
      badge: 'AWS CERTIFIED',
      badgeColor: '#ff9900'
    }
  ];

  const projects: Project[] = [
    {
      image: gathr,
      title: 'Gathr - Social Events Platform',
      rating: '⭐⭐⭐⭐⭐',
      description: 'Designed and developed a full-stack social events platform using React, Node.js, and MongoDB, enabling users to create and join local events. Integrated real-time chat and notifications for enhanced user engagement.',
      link: 'https://socialgame-d2zq.onrender.com/'
    },
    {
      image: coverLetter,
      title: 'AI powered Cover Letter Generator',
      rating: '⭐⭐⭐⭐⭐',
      description: 'Built an AI-powered cover letter generator using React and Node.js with OpenAI integration. Users input their resume and job description to generate tailored letters in seconds, with the ability to choose between different GPT models based on speed, cost, and quality.',
      link: 'https://coverletterusingai-frontend.onrender.com/'
    },
  ];

  const experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Tonic Technologies',
      period: 'August 2025 - Present',
      rating: '⭐⭐⭐⭐⭐',
      responsibilities: [
        'Transformed legacy codebases by enforcing modern coding standards, cutting defect rates by ~30%',
        'Partnered with clients to define reporting requirements and delivered real-time, data-driven insights',
        'Integrated Zii, Deputy, and MYOB systems for accelerated decision-making and operational visibility',
        'Automated build and deployment workflows with Jenkins CI pipelines, reducing release errors by 40%',
      ],
      funNote: 'Fun fact: I once reduced application error logs from 200KB to under 30KB. My teammates called me the "Log Nerd" 🪵'
    },
    {
      title: 'Software Engineer',
      company: 'One Model',
      period: 'October 2022 - August 2025',
      rating: '⭐⭐⭐⭐⭐',
      responsibilities: [
        'Delivered end-to-end, production-ready features across the full SDLC',
        'Refactored legacy systems, improving performance and maintainability while reducing technical debt',
        'Standardized reusable engineering practices with 75%+ unit test coverage',
        'Automated QA workflows and test strategy, accelerating release cycles',
        'Mentored 2 junior engineers, improving code review efficiency by 30%',
      ],
      funNote: 'Mentored two junior engineers who are now senior devs themselves. Proud engineering dad moment! 👨‍🏫'
    },
    {
      title: 'Graduate Developer',
      company: 'Denver',
      period: 'September 2021 - October 2022',
      rating: '⭐⭐⭐⭐☆',
      responsibilities: [
        'Architected MuleSoft integrations to improve cross-system connectivity at scale',
        'Led transition from legacy ASP.NET front-end to modern React.js framework',
        'Added comprehensive unit tests to improve code reliability and coverage',
        'Encouraged team adoption of testing best practices',
      ],
      funNote: 'Started as a grad dev and ended up teaching the team about React. Plot twist of the year! 🎓➡️👨‍💻'
    }
  ];

  const addToCart = (item: string, value: number) => {
    const existingItem = cart.find(i => i.name === item);
    if (existingItem) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
      return;
    }

    setCart([...cart, { name: item, value }]);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const removeFromCart = (itemName: string) => {
    setCart(cart.filter(i => i.name !== itemName));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.value, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your interests cart is empty! Browse my skills and add what interests you.');
      return;
    }

    alert(`🎉 Awesome! You're interested in:\n\n${cart.map(i => `• ${i.name}`).join('\n')}\n\nLet's discuss your project! Scroll down to the contact form or email me directly at adityaiyer03051996@gmail.com`);

    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setIsCartOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('🚀 Thank you for your interest!\n\nI\'ll review your project details and get back to you within 24 hours.\n\n(This is a demo - no actual email sent)');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="App">
      {/* Top Banner */}
      <div className="top-banner">
        🎉 Special Offer: Hire Me Today & Get FREE Code Reviews for Life!</div>

      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <nav className="nav-menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#resume">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
            🛒
            <span className="cart-badge">{cart.length}</span>
          </div>
        </div>
      </header>

      {/* Shopping Cart Modal */}
      <div className={`cart-modal ${isCartOpen ? 'active' : ''}`}>
        <div className="cart-header">
          <h3>Your Interests</h3>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>×</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
              Your cart is empty!<br />
              Add some skills or projects you're interested in.
            </p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <div style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                    Interest: {item.value}%
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.name)} className="remove-btn">
                  ×
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-total">
          Total Interest Level: <span>{Math.min(cartTotal, 100)}</span>%
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>
          💼 Let's Collaborate!
        </button>
      </div>

      {/* Toast Notification */}
      <div className={`toast ${showToast ? 'show' : ''}`}>
        ✅ Added to your interests!
      </div>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Aditya Venkataraman Iyer</h1>
          <p>Full-Stack Software Engineer | React & .NET Expert | AWS Certified</p>
          <div className="badges">
            <span className="badge">⚡ 4+ Years Experience</span>
            <span className="badge">✅ Full stack developer</span>
            <span className="badge">🔥 AWS & Mulesoft Certified</span>
            <span className="badge">⭐ 30% Defect Reduction</span>
          </div>
          <br />
          <a href="#services" className="cta-button">🛍️ Browse My Skills</a>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section" id="about">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Results-driven software engineer with a passion for clean code</p>
        </div>
        <div className="about-grid">
          <div>
            <img src={photo} alt="Aditya Venkataraman Iyer" className="about-image" />
          </div>
          <div className="about-content">
            <h3>Building Scalable Solutions</h3>
            <p>
              Hey there! 👋 I'm Aditya, a results-driven Software Engineer with 4+ years of experience
              building and maintaining scalable web applications with React, TypeScript, and C#.
            </p>
            <p>
              Results-driven developer experienced in shipping reliable features in fast-paced environments.
              Strong understanding of software design principles, code reviews, and testing practices, with a consistent track record of delivering
              high-quality solutions on time.
            </p>
            <div className="funny-note">
              😄 <strong>Fun Fact:</strong> I once reduced error logs from 200KB to 30KB. My team now
              calls me the "Log Nerd" 🪵. I prefer to think of myself as a "Bug Terminator" though.
            </div>
            <p>
              I'm passionate about mentorship and have helped accelerate two junior engineers' growth,
              improving code review efficiency by 30%. Because sharing knowledge is just as important
              as writing great code!
            </p>
            <div className="funny-note">
              💡 <strong>Developer Wisdom:</strong> "It works on my machine" is not a deployment strategy.
              Neither is "just restart the server." Trust me, I learned this the hard way during my grad dev days!
            </div>
            <p>
              <strong>Certifications:</strong><br />
              🏆 AWS Certified Cloud Practitioner (Valid: Nov 2025 – Nov 2027)<br />
              🏆 MuleSoft Certified Integration Developer – Level 1 (Valid: Nov 2025 – Nov 2027)<br />
              🏆 Docker Foundations Professional Certificate
            </p>
          </div>
        </div>
      </section>

      {/* Tech Support Section - NEW! */}
      <section className="section tech-support-section">
        <div className="tech-support-container">
          <div className="tech-support-content">
            <h2 className="tech-support-title">🛠️ Need Tech Support?</h2>
            <p className="tech-support-text">
              Whether it's a production bug at 3 AM or your printer acting up (again), I've got you covered!
              From debugging legacy code to explaining why "turning it off and on again" actually works.
            </p>
            <div className="tech-support-buttons">
              <a href="tel:0432742969" className="tech-support-btn">
                📞 Call Me: 0432 742 969
              </a>
              <a href="mailto:adityaiyer03051996@gmail.com" className="tech-support-btn tech-support-btn-secondary">
                📧 Email Support
              </a>
            </div>
            <p className="tech-support-note">
              Response time: Faster than you can say "Have you tried clearing your cache?"
            </p>
          </div>
          <div className="tech-support-image">
            <img src={meme} alt="Tech Support Meme" className="meme-image" />
            <div className="meme-caption">
              "Yes, I can fix your computer. No, I don't know why your printer hates you." 😄
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p>Premium development skills honed over 4+ years</p>
        </div>
        <div className="product-grid">
          {services.map((service, index) => (
            <div key={index} className="product-card">
              <div className="product-image" style={{ position: 'relative' }}>
                {service.icon}
                {service.badge && (
                  <span className="product-badge" style={{ background: service.badgeColor }}>
                    {service.badge}
                  </span>
                )}
              </div>
              <div className="product-content">
                <div className="product-title">{service.title}</div>
                <div className="product-rating">{service.rating} ({service.reviews} projects)</div>
                <div className="product-description">{service.description}</div>
                <div className="product-price">{service.mastery}% Mastery</div>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(service.title, service.mastery)}
                >
                  Add to Interests
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section - WITH CLICKABLE LINKS */}
      <section className="section portfolio-section" id="portfolio">
        <div className="section-header">
          <h2>Personal Projects</h2>
          <p>Real-world applications built with passion</p>
        </div>
        <div className="product-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <div style={{ position: 'relative' }}>
                <img src={project.image} alt={project.title} className="portfolio-image" />
                <div className="portfolio-overlay">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-details"
                  >
                    View Live Project →
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="product-title">{project.title}</div>
                <div className="product-rating">{project.rating}</div>
                <div className="product-description">{project.description}</div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="add-to-cart"
                  style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
                >
                  🚀 Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="section resume-section" id="resume">
        <div className="section-header">
          <h2>Professional Experience</h2>
          <p>4+ years of building scalable, production-ready solutions</p>
        </div>
        {experiences.map((exp, index) => (
          <div key={index} className="resume-item">
            <h3>{exp.title}</h3>
            <div className="resume-meta">{exp.company} | {exp.period} | {exp.rating}</div>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
            {exp.funNote && (
              <div className="funny-note">
                😄 <strong>Behind the Scenes:</strong> {exp.funNote}
              </div>
            )}
          </div>
        ))}

        <div className="resume-item">
          <h3>🎓 Education</h3>
          <div className="resume-meta">Academic Background</div>
          <ul>
            <li>
              <strong>Master of Information Technology - Software Engineering</strong><br />
              QUT (Queensland University of Technology) | July 2019 - June 2021
            </li>
            <li>
              <strong>Bachelor of Engineering - Electronics and Communications</strong><br />
              Anna University | August 2014 - July 2018
            </li>
          </ul>
        </div>

        <div className="resume-item">
          <h3>🔧 Complete Tech Stack</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', marginTop: '15px' }}>
            <div>
              <strong>Front-End:</strong> TypeScript, JavaScript, React.js, Next.js, Redux Toolkit, TanStack Query, React Native
            </div>
            <div>
              <strong>Styling:</strong> Tailwind CSS, Bootstrap 5, Storybook, Figma-to-Code
            </div>
            <div>
              <strong>Backend:</strong> C# (.NET Core), Node.js, Python, ASP.NET Core, Express.js
            </div>
            <div>
              <strong>APIs:</strong> RESTful, GraphQL (Apollo), gRPC, WebSockets, MuleSoft
            </div>
            <div>
              <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, SQL Server, Redis, RabbitMQ
            </div>
            <div>
              <strong>Cloud & DevOps:</strong> AWS, Azure, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform
            </div>
            <div>
              <strong>Testing:</strong> Cypress, Jest, Vitest, React Testing Library
            </div>
            <div>
              <strong>Monitoring:</strong> Grafana, Airbrake, Prometheus, ELK Stack
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            className="cta-button"
            onClick={() => window.open('https://www.linkedin.com/in/aditya-venkataraman-iyer-037213166/', '_blank')}
          >
            📄 View Full LinkedIn Profile
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" id="contact">
        <div className="section-header">
          <h2>Let's Work Together</h2>
          <p>Ready to build something amazing? Let's talk!</p>
        </div>
        <div className="contact-form">
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
              📧 <strong>Email:</strong> <a href="mailto:adityaiyer03051996@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>adityaiyer03051996@gmail.com</a>
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
              📱 <strong>Phone:</strong> <a href="tel:0432742969" style={{ color: 'var(--primary)', textDecoration: 'none' }}>0432 742 969</a>
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
              💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/aditya-venkataraman-iyer-037213166/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Aditya Venkataraman Iyer</a>
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Project Type *</label>
              <input type="text" placeholder="Web Development, System Refactoring, etc." required />
            </div>
            <div className="form-group">
              <label>Project Details *</label>
              <textarea rows={5} placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              🚀 Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <p>&copy; 2026 Aditya Venkataraman Iyer - Software Engineer. All rights reserved.</p>
        <p style={{ marginTop: '10px', fontSize: '0.9rem', opacity: 0.8 }}>
          Built with ❤️, TypeScript, and probably too much coffee ☕
        </p>
      </footer>
    </div>
  );
};

export default App;
