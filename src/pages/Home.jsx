import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import { FaUsers, FaRocket, FaChalkboardTeacher, FaBook } from "react-icons/fa";

import './Home.css';

const Home = () => {
  const featuredPrograms = [
    {
      title: "Google Summer of Code",
      description: "Work on real-world projects with leading open source organizations during summer break.",
      organization: "Google",
      duration: "12-22 weeks",
      stipend: "$3000-$6600",
      applicationDeadline: "March 2024",
      skills: ["Programming", "Open Source", "Git"],
      link: "https://summerofcode.withgoogle.com/",
      featured: true
    },
    {
      title: "LFX Mentorship",
      description: "Get mentored by experienced developers while contributing to Linux Foundation projects.",
      organization: "Linux Foundation",
      duration: "12 weeks",
      stipend: "$3000-$6000",
      applicationDeadline: "Rolling",
      skills: ["Linux", "Cloud", "DevOps"],
      link: "https://mentorship.lfx.linuxfoundation.org/"
    }
  ];

  const stats = [
    { number: "50+", label: "Contributors", icon: <FaUsers /> },
    { number: "25+", label: "Projects", icon: <FaRocket /> },
    { number: "15+", label: "Mentors", icon: <FaChalkboardTeacher /> },
    { number: "5+", label: "Programs", icon: <FaBook /> }
  ];


  const features = [
    {
      title: "Expert Mentorship",
      description: "Learn from experienced developers and industry professionals who guide you through your open source journey.",
      icon: "🎯"
    },
    {
      title: "Real Projects",
      description: "Work on meaningful projects that solve real-world problems and make a positive impact on the community.",
      icon: "💻"
    },
    {
      title: "Global Network",
      description: "Connect with developers worldwide and build lasting relationships in the open source ecosystem.",
      icon: "🌍"
    },
    {
      title: "Career Growth",
      description: "Gain valuable experience and skills that boost your career prospects in the tech industry.",
      icon: "📈"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Empowering Kashmir's
              <span className="hero-highlight"> Open Source </span>
              Future
            </h1>
            <p className="hero-description">
              Join our vibrant community of developers, contributors, and mentors working together 
              to build the future of technology through open source collaboration.
            </p>
            <div className="hero-actions">
              <Link to="/programs" className="btn btn-primary">
                Explore Programs
              </Link>
              <a 
                href="https://github.com/Open-Source-Kashmir" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Join GitHub
              </a>
              <a 
                href="https://discord.gg/gEHBwfDX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Join Discord
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">🚀</div>
              <h3>Innovation</h3>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🤝</div>
              <h3>Collaboration</h3>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">💡</div>
              <h3>Learning</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Open Source Kashmir?</h2>
            <p className="section-description">
              We provide everything you need to succeed in the open source world
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

      {/* Featured Programs Section */}
      <section className="featured-programs">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Programs</h2>
            <p className="section-description">
              Discover the most popular open source programs and start your journey today
            </p>
          </div>
          <div className="programs-grid">
            {featuredPrograms.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/programs" className="btn btn-outline">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Open Source Journey?</h2>
            <p className="cta-description">
              Join our community of passionate developers and make your mark in the open source world.
            </p>
            <div className="cta-actions">
              <Link to="/contributors" className="btn btn-primary">
                Become a Contributor
              </Link>
              <Link to="/mentors" className="btn btn-secondary">
                Find a Mentor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;