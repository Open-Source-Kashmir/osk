import { useState, useEffect } from 'react';
import { getGitHubAvatar, getMultipleGitHubUsers } from '../utils/githubApi';
import LoadingSpinner from '../components/shared/LoadingSpinner';

const Contributors = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [contributors, setContributors] = useState([]);

  // Real contributors data with GitHub integration
  const mockContributors = [
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

  // Fetch GitHub data for contributors
  useEffect(() => {
    const fetchContributorsData = async () => {
      setIsLoading(true);
      try {
        // Get usernames from mock data
        const usernames = mockContributors.map(contributor => contributor.username);
        
        // Fetch GitHub data for all contributors
        const githubData = await getMultipleGitHubUsers(usernames);
        
        // Merge mock data with GitHub data
        const updatedContributors = mockContributors.map((contributor, index) => {
          const githubInfo = githubData[index];
          return {
            ...contributor,
            avatar: githubInfo.avatar,
            name: githubInfo.name || contributor.name,
            bio: githubInfo.bio || contributor.bio,
            location: githubInfo.location || contributor.location,
            githubUrl: githubInfo.githubUrl,
            joinDate: githubInfo.joinDate ? new Date(githubInfo.joinDate).toISOString().split('T')[0] : contributor.joinDate,
            publicRepos: githubInfo.publicRepos,
            followers: githubInfo.followers,
            following: githubInfo.following
          };
        });
        
        setContributors(updatedContributors);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Fallback to mock data with GitHub avatars
        const fallbackContributors = mockContributors.map(contributor => ({
          ...contributor,
          avatar: getGitHubAvatar(contributor.username)
        }));
        setContributors(fallbackContributors);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributorsData();
  }, []);

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
      case 'expert': return 'bg-gradient-to-r from-amber-100 to-amber-300 text-amber-900 border border-amber-500';
      case 'intermediate': return 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 border border-blue-400';
      case 'beginner': return 'bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-900 border border-emerald-400';
      default: return 'bg-gray-100 text-gray-900 border border-gray-300';
    }
  };

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center">
        <LoadingSpinner 
          size="large" 
          color="blue" 
          text="Loading contributors from GitHub..." 
        />
      </div>
    );
  }

  return (
    <div className="">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gray-50 to-indigo-50 py-12 text-center">
        <div className="max-w-3xl mx-auto px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Contributors</h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Meet the amazing people who make Open Source Kashmir possible. 
            Our contributors come from all backgrounds and skill levels, united by their passion for open source.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
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
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContributors.map((contributor) => (
              <div key={contributor.id} className="bg-white p-8 rounded-xl text-center shadow-lg shadow-gray-200/50 transition-transform duration-300 hover:-translate-y-1">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img src={contributor.avatar} alt={contributor.name} className="w-full h-full rounded-full object-cover" />
                  <div className="absolute -top-1 -right-1 text-2xl">⭐</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{contributor.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{contributor.role}</p>
                <p className="text-gray-600 mb-4">{contributor.contributions} contributions</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6">{contributor.bio}</p>
                <a href={contributor.githubUrl} className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:from-blue-800 hover:to-blue-900 hover:-translate-y-0.5" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white py-8 border-b border-gray-200 sticky top-20 z-10">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 flex-wrap">
            <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left">All Contributors</h2>
            <div className="relative max-w-xs w-full md:w-auto">
            <input
                type="text"
                placeholder="Search contributors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 rounded-lg text-base text-gray-800 placeholder-gray-400 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm transition-all duration-300"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {levels.map((level) => (
              <button
                key={level.value}
                onClick={() => setActiveTab(level.value)}
                className={`flex items-center gap-2 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${activeTab === level.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <span className="text-base">{level.icon}</span>
                {level.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors Grid */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-8">
          {filteredContributors.length > 0 ? (
            <>
              <div className="text-gray-600 mb-8 font-medium">
                {filteredContributors.length} contributor{filteredContributors.length !== 1 ? 's' : ''} found
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredContributors.map((contributor) => (
                  <div key={contributor.id} className="bg-white rounded-xl p-6 shadow-lg shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 flex-shrink-0 overflow-visible">
                  <div className="absolute inset-0 transform hover:scale-110 transition-transform duration-500">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-full h-full rounded-full object-cover border-4 border-gray-200 shadow-lg shadow-gray-300/50 bg-gradient-to-br from-gray-100 to-gray-200"
                    />
                  </div>

                  {contributor.streak > 0 && (
                    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-amber-500 to-amber-700 text-white py-0.5 px-2 rounded-full text-xs font-bold border-2 border-white shadow-sm">
                      {contributor.streak}🔥
                    </div>
                  )}
                </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 truncate">{contributor.name}</h3>
                        <p className="text-gray-600 text-sm truncate">@{contributor.username}</p>
                        <span className={`inline-block py-0.5 px-2 rounded-full text-xs font-bold uppercase tracking-wide ${getLevelBadgeColor(contributor.level)}`}>
                          {contributor.level}
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-around mb-4 p-4 bg-gray-100 rounded-lg">
                      <div className="text-center">
                        <span className="text-lg font-bold text-gray-900">{contributor.contributions}</span>
                        <span className="text-xs text-gray-600 block">Contributions</span>
                      </div>
                      <div className="text-center">
                        <span className="text-lg font-bold text-gray-900">{contributor.projects.length}</span>
                        <span className="text-xs text-gray-600 block">Projects</span>
                      </div>
                    </div>

                    <p className="text-blue-600 font-semibold text-sm mb-1">{contributor.role}</p>
                    <p className="text-gray-600 text-sm mb-4">📍 {contributor.location}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {contributor.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-900 py-1 px-3 rounded-full text-xs font-medium border border-blue-200">
                          {skill}
                        </span>
                      ))}
                      {contributor.skills.length > 3 && (
                        <span className="bg-gray-200 text-gray-600 py-1 px-3 rounded-full text-xs font-medium">
                          +{contributor.skills.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-end">
                      <a 
                        href={contributor.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:from-blue-800 hover:to-blue-900 hover:-translate-y-0.5"
                      >
                        View GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center shadow-lg shadow-gray-200/50">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No contributors found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {setActiveTab('all'); setSearchTerm('');}}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-blue-800 hover:to-blue-900 hover:-translate-y-0.5"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 text-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to make your first contribution? Join our community of passionate developers 
              and start building amazing open source projects together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <a 
          href="https://github.com/Open-Source-Kashmir" 
          className="inline-flex items-center gap-2 py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 bg-white text-gray-900 shadow-md border-2 border-transparent hover:bg-gray-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  Start Contributing
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 py-3 px-8 rounded-lg font-bold text-lg transition-all duration-300 bg-transparent text-white border-2 border-gray-300 hover:bg-gray-200 hover:text-gray-900 hover:-translate-y-1 hover:shadow-lg"
                >
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
