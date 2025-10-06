import { useState, useEffect } from 'react';
import './Contributors.css';

const Contributors = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock contributors data - in a real app, this would come from GitHub API
  const contributors = [
    {
      id: 1,
      name: "Ahmad Sheikh",
      username: "ahmadshk",
      avatar: "https://via.placeholder.com/150x150/3b82f6/ffffff?text=AS",
      contributions: 156,
      role: "Core Maintainer",
      location: "Srinagar, Kashmir",
      joinDate: "2022-01-15",
      skills: ["JavaScript", "React", "Node.js", "Python"],
      bio: "Full-stack developer passionate about open source. Building tools that help the Kashmir tech community grow.",
      githubUrl: "https://github.com/ahmadshk",
      projects: ["OSK Website", "Code Mentor Bot", "Community Portal"],
      level: "expert",
      streak: 45,
      featured: true
    },
    {
      id: 2,
      name: "Zara Malik",
      username: "zaramalik",
      avatar: "https://via.placeholder.com/150x150/10b981/ffffff?text=ZM",
      contributions: 89,
      role: "Frontend Developer",
      location: "Baramulla, Kashmir",
      joinDate: "2022-03-20",
      skills: ["React", "Vue.js", "CSS", "Design"],
      bio: "UI/UX developer creating beautiful and accessible web interfaces. Love contributing to design systems.",
      githubUrl: "https://github.com/zaramalik",
      projects: ["Component Library", "Design System", "Landing Pages"],
      level: "intermediate",
      streak: 23
    },
    {
      id: 3,
      name: "Rohit Kumar",
      username: "rohitkumar",
      avatar: "https://via.placeholder.com/150x150/f59e0b/ffffff?text=RK",
      contributions: 124,
      role: "Backend Developer",
      location: "Jammu, Kashmir",
      joinDate: "2021-11-08",
      skills: ["Go", "Docker", "Kubernetes", "PostgreSQL"],
      bio: "DevOps engineer and backend developer. Building scalable infrastructure for open source projects.",
      githubUrl: "https://github.com/rohitkumar",
      projects: ["API Gateway", "Microservices", "CI/CD Pipeline"],
      level: "expert",
      streak: 67
    },
    {
      id: 4,
      name: "Fatima Khan",
      username: "fatimakhan",
      avatar: "https://via.placeholder.com/150x150/8b5cf6/ffffff?text=FK",
      contributions: 67,
      role: "Mobile Developer",
      location: "Anantnag, Kashmir",
      joinDate: "2022-05-12",
      skills: ["Flutter", "Dart", "Firebase", "React Native"],
      bio: "Mobile app developer creating cross-platform applications. Passionate about accessibility and user experience.",
      githubUrl: "https://github.com/fatimakhan",
      projects: ["OSK Mobile App", "Learning Platform", "Community Chat"],
      level: "intermediate",
      streak: 31
    },
    {
      id: 5,
      name: "Arjun Singh",
      username: "arjunsingh",
      avatar: "https://via.placeholder.com/150x150/ef4444/ffffff?text=AS",
      contributions: 43,
      role: "Documentation Lead",
      location: "Kupwara, Kashmir",
      joinDate: "2022-07-03",
      skills: ["Technical Writing", "Markdown", "Git", "Documentation"],
      bio: "Technical writer ensuring our projects have excellent documentation. Making open source more accessible through clear docs.",
      githubUrl: "https://github.com/arjunsingh",
      projects: ["Documentation Site", "Tutorials", "API Docs"],
      level: "beginner",
      streak: 19
    },
    {
      id: 6,
      name: "Priya Sharma",
      username: "priyasharma",
      avatar: "https://via.placeholder.com/150x150/06b6d4/ffffff?text=PS",
      contributions: 91,
      role: "Data Scientist",
      location: "Srinagar, Kashmir",
      joinDate: "2022-02-28",
      skills: ["Python", "Machine Learning", "Data Analysis", "Jupyter"],
      bio: "Data scientist working on ML projects for social good. Contributing to open source data science tools and libraries.",
      githubUrl: "https://github.com/priyasharma",
      projects: ["ML Models", "Data Visualization", "Analytics Dashboard"],
      level: "intermediate",
      streak: 38
    },
    {
      id: 7,
      name: "Mohd. Amin",
      username: "mohdamin",
      avatar: "https://via.placeholder.com/150x150/ec4899/ffffff?text=MA",
      contributions: 156,
      role: "Security Expert",
      location: "Pulwama, Kashmir",
      joinDate: "2021-09-15",
      skills: ["Cybersecurity", "Pentesting", "Python", "Linux"],
      bio: "Security researcher focusing on application security. Building tools to make open source projects more secure.",
      githubUrl: "https://github.com/mohdamin",
      projects: ["Security Scanner", "Vulnerability DB", "Security Docs"],
      level: "expert",
      streak: 52
    },
    {
      id: 8,
      name: "Neha Gupta",
      username: "nehagupta",
      avatar: "https://via.placeholder.com/150x150/14b8a6/ffffff?text=NG",
      contributions: 78,
      role: "Community Manager",
      location: "Doda, Kashmir",
      joinDate: "2022-04-18",
      skills: ["Community Building", "Event Management", "Social Media", "Content"],
      bio: "Building and nurturing the OSK community. Organizing events, managing social media, and helping newcomers get started.",
      githubUrl: "https://github.com/nehagupta",
      projects: ["Community Events", "Social Media", "Newsletter"],
      level: "intermediate",
      streak: 29
    }
  ];

  const levels = [
    { value: 'all', label: 'All Contributors', icon: '👥' },
    { value: 'expert', label: 'Expert', icon: '🌟' },
    { value: 'intermediate', label: 'Intermediate', icon: '🚀' },
    { value: 'beginner', label: 'Beginner', icon: '🌱' }
  ];

  const stats = [
    { label: 'Total Contributors', value: contributors.length, icon: '👥' },
    { label: 'Total Contributions', value: contributors.reduce((sum, c) => sum + c.contributions, 0), icon: '📊' },
    { label: 'Active This Month', value: contributors.filter(c => c.streak > 0).length, icon: '🔥' },
    { label: 'Projects', value: new Set(contributors.flatMap(c => c.projects)).size, icon: '🚀' }
  ];

  const filteredContributors = contributors.filter(contributor => {
    const matchesLevel = activeTab === 'all' || contributor.level === activeTab;
    const matchesSearch = contributor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contributor.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contributor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesLevel && matchesSearch;
  });

  const featuredContributors = contributors.filter(c => c.featured);

  const getLevelBadgeColor = (level) => {
    switch(level) {
      case 'expert': return 'badge-expert';
      case 'intermediate': return 'badge-intermediate';
      case 'beginner': return 'badge-beginner';
      default: return 'badge-default';
    }
  };

  return (
    <div className="contributors">
      {/* Header Section */}
      <section className="contributors-header">
        <div className="container">
          <h1 className="contributors-title">Our Contributors</h1>
          <p className="contributors-description">
            Meet the amazing people who make Open Source Kashmir possible. 
            Our contributors come from all backgrounds and skill levels, united by their passion for open source.
          </p>
        </div>
      </section>

      {/* ✅ Fixed Stats Section */}
      <section className="contributors-stats">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            {stats.map((stat, index) => (
              <div
             {stats.map((stat, index) => (
               <div
                key={stat.label}
                 className="w-44 md:w-48 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
               >
                className="w-44 md:w-48 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-3xl md:text-4xl">{stat.icon}</div>
                <div className="text-xl md:text-2xl font-bold text-slate-900 mt-3">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-500 mt-1 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Contributors Section */}
      <section className="featured-contributors">
        <div className="container">
          <h2 className="section-title">Featured Contributors</h2>
          <div className="featured-grid">
            {featuredContributors.map((contributor) => (
              <div key={contributor.id} className="featured-card">
                <div className="featured-avatar">
                  <img src={contributor.avatar} alt={contributor.name} />
                  <div className="featured-badge">⭐</div>
                </div>
                <h3 className="featured-name">{contributor.name}</h3>
                <p className="featured-role">{contributor.role}</p>
                <p className="featured-contributions">{contributor.contributions} contributions</p>
                <p className="featured-bio">{contributor.bio}</p>
                <a href={contributor.githubUrl} className="featured-link" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="contributors-filters">
        <div className="container">
          <div className="filters-header">
            <h2 className="section-title">All Contributors</h2>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search contributors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
          </div>

          <div className="level-filters">
            {levels.map((level) => (
              <button
                key={level.value}
                onClick={() => setActiveTab(level.value)}
                className={`filter-btn ${activeTab === level.value ? 'active' : ''}`}
              >
                <span className="filter-icon">{level.icon}</span>
                {level.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Grid */}
      <section className="contributors-grid-section">
        <div className="container">
          {filteredContributors.length > 0 ? (
            <>
              <div className="results-count">
                {filteredContributors.length} contributor{filteredContributors.length !== 1 ? 's' : ''} found
              </div>
              <div className="contributors-grid">
                {filteredContributors.map((contributor) => (
                  <div key={contributor.id} className="contributor-card">
                    <div className="contributor-header">
                      <div className="contributor-avatar">
                        <img src={contributor.avatar} alt={contributor.name} />
                        {contributor.streak > 0 && (
                          <div className="streak-badge">{contributor.streak}🔥</div>
                        )}
                      </div>
                      <div className="contributor-info">
                        <h3 className="contributor-name">{contributor.name}</h3>
                        <p className="contributor-username">@{contributor.username}</p>
                        <span className={`level-badge ${getLevelBadgeColor(contributor.level)}`}>
                          {contributor.level}
                        </span>
                      </div>
                    </div>

                    <div className="contributor-stats">
                      <div className="stat">
                        <span className="stat-value">{contributor.contributions}</span>
                        <span className="stat-label">Contributions</span>
                      </div>
                      <div className="stat">
                        <span className="stat-value">{contributor.projects.length}</span>
                        <span className="stat-label">Projects</span>
                      </div>
                    </div>

                    <p className="contributor-role">{contributor.role}</p>
                    <p className="contributor-location">📍 {contributor.location}</p>

                    <div className="contributor-skills">
                      {contributor.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                      {contributor.skills.length > 3 && (
                        <span className="skill-tag more">+{contributor.skills.length - 3}</span>
                      )}
                    </div>

                    <div className="contributor-actions">
                      <a 
                        href={contributor.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        View GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No contributors found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {setActiveTab('all'); setSearchTerm('');}}
                className="btn btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join CTA */}
      <section className="join-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Community</h2>
            <p>
              Ready to make your first contribution? Join our community of passionate developers 
              and start building amazing open source projects together.
            </p>
            <div className="cta-actions">
              <a href="https://github.com/Open-Source-Kashmir" className="btn btn-primary">
                Start Contributing
              </a>
              <a href="#" className="btn btn-secondary">
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributors;
