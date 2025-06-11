import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'C Language', level: 80 },
    { name: 'Web Development', level: 88 }
  ];

  const projects = [
    {
      title: 'Parking management system',
      description: 'The Parking Management System is designed to streamline the process of vehicle parking, focusing on ease of use, efficiency, and future scalability. The system consists of various components including the user interface, backend logic, and database design.',
      tech: ['Xamp', 'GitHub', 'HTML', 'CSS', 'MySQL','JavaScript'],
      link: '#'
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Vaishnavi Khuba</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Vaishnavi Khuba</span>
            </h1>
            <p className="hero-subtitle">Full Stack Developer & Problem Solver</p>
            <p className="hero-description">
              Passionate about creating innovative web solutions and bringing ideas to life through code.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer with a strong foundation in web technologies and a keen eye for creating 
                user-friendly applications. My journey in programming started with curiosity and has evolved into 
                a deep love for solving complex problems through elegant code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or learning about the latest trends in web development. I believe in continuous learning and staying 
                updated with the ever-evolving tech landscape.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Class 12th (Higher Secondary)</h3>
                <p className="timeline-date">2022 - 82%</p>
                <p>Completed higher secondary education with focus on Science stream, 
                   building strong analytical and problem-solving foundations.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Class 10th (Secondary)</h3>
                <p className="timeline-date">2020 - 80%</p>
                <p>Completed secondary education with excellent academic performance, 
                   developing core mathematical and logical reasoning skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Featured Project</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <a href="" className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect!</h3>
              <p>
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="icon">📧</span>
                  <span>Vaishnavi Khuba07@gmail.com</span>
                </div>
                <div className="contact-method">
                  <span className="icon">📱</span>
                  <span>+91 9448735826</span>
                </div>
                <div className="contact-method">
                  <span className="icon">📍</span>
                  <span>Hassan, Karnataka, India</span>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Vaishnavi Khuba. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;