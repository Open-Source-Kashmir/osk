import { useMemo, useState } from 'react';

const Mentors = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevance'); // relevance | experience | mentees | name
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const mentors = [
    {
      id: 1,
      name: "Sarah Ahmed",
      title: "Senior Software Engineer",
      company: "Google",
      avatar: "https://via.placeholder.com/150x150/3b82f6/ffffff?text=SA",
      expertise: ["JavaScript", "React", "Node.js", "Cloud Computing"],
      experience: "5+ years",
      mentees: 25,
      bio: "Passionate about helping developers grow their skills in modern web technologies. I've mentored students through GSoC and help developers transition into tech careers.",
      specialties: ["Web Development", "Career Guidance", "Open Source"],
      location: "Srinagar, Kashmir",
      languages: ["English", "Urdu", "Kashmiri"],
      availability: "Weekends",
      category: "engineering",
      online: true,
      socials: { twitter: "https://twitter.com/", github: "https://github.com/" }
    },
    {
      id: 2,
      name: "Mohammad Tariq",
      title: "DevOps Architect",
      company: "Microsoft",
      avatar: "https://via.placeholder.com/150x150/10b981/ffffff?text=MT",
      expertise: ["Kubernetes", "Docker", "AWS", "CI/CD"],
      experience: "7+ years",
      mentees: 18,
      bio: "Cloud and DevOps expert with extensive experience in building scalable infrastructure. Love sharing knowledge about cloud-native technologies.",
      specialties: ["DevOps", "Cloud Architecture", "System Design"],
      location: "Jammu, Kashmir",
      languages: ["English", "Hindi", "Urdu"],
      availability: "Evenings",
      category: "devops",
      online: false,
      socials: { linkedin: "https://linkedin.com/" }
    },
    {
      id: 3,
      name: "Priya Sharma",
      title: "UX Design Lead",
      company: "Adobe",
      avatar: "https://via.placeholder.com/150x150/f59e0b/ffffff?text=PS",
      expertise: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      experience: "6+ years",
      mentees: 32,
      bio: "Design thinking enthusiast who believes in creating user-centered experiences. I help aspiring designers build strong portfolios and land their dream jobs.",
      specialties: ["Design Systems", "User Research", "Portfolio Review"],
      location: "Bangalore, India",
      languages: ["English", "Hindi"],
      availability: "Flexible",
      category: "design",
      online: true
    },
    {
      id: 4,
      name: "Aamir Khan",
      title: "Data Scientist",
      company: "Netflix",
      avatar: "https://via.placeholder.com/150x150/8b5cf6/ffffff?text=AK",
      expertise: ["Python", "Machine Learning", "TensorFlow", "PyTorch"],
      experience: "4+ years",
      mentees: 15,
      bio: "ML engineer passionate about making AI accessible. I guide students through data science projects and help them understand complex algorithms.",
      specialties: ["Machine Learning", "Data Analysis", "Research"],
      location: "Anantnag, Kashmir",
      languages: ["English", "Urdu", "Kashmiri"],
      availability: "Weekends",
      category: "data",
      online: true
    },
    {
      id: 5,
      name: "Fatima Ali",
      title: "Open Source Advocate",
      company: "Red Hat",
      avatar: "https://via.placeholder.com/150x150/ef4444/ffffff?text=FA",
      expertise: ["Linux", "Open Source", "Community Building", "Git"],
      experience: "8+ years",
      mentees: 45,
      bio: "Long-time open source contributor and community builder. I help newcomers navigate the open source world and find their first contributions.",
      specialties: ["Open Source", "Community Management", "Technical Writing"],
      location: "Srinagar, Kashmir",
      languages: ["English", "Urdu", "Kashmiri", "Arabic"],
      availability: "Flexible",
      category: "opensource",
      online: false
    },
    {
      id: 6,
      name: "Rajesh Kumar",
      title: "Mobile App Developer",
      company: "Uber",
      avatar: "https://via.placeholder.com/150x150/06b6d4/ffffff?text=RK",
      expertise: ["React Native", "Flutter", "iOS", "Android"],
      experience: "5+ years",
      mentees: 20,
      bio: "Mobile development expert with apps used by millions. I love teaching mobile development and helping developers build their first apps.",
      specialties: ["Mobile Development", "App Store Optimization", "Cross-platform"],
      location: "Delhi, India",
      languages: ["English", "Hindi"],
      availability: "Evenings",
      category: "mobile",
      online: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Mentors', icon: '👥' },
    { value: 'engineering', label: 'Engineering', icon: '⚙️' },
    { value: 'devops', label: 'DevOps', icon: '☁️' },
    { value: 'design', label: 'Design', icon: '🎨' },
    { value: 'data', label: 'Data Science', icon: '📊' },
    { value: 'opensource', label: 'Open Source', icon: '🌐' },
    { value: 'mobile', label: 'Mobile', icon: '📱' }
  ];

  const normalizedExperience = (exp) => {
    if (!exp) return 0;
    const match = /([0-9]+)\+?/i.exec(exp);
    return match ? parseInt(match[1], 10) : 0;
  };

  const filteredMentors = useMemo(() => {
    let list = mentors;

    // Category filter
    if (selectedCategory !== 'all') {
      list = list.filter(m => m.category === selectedCategory);
    }
    // Online only
    if (onlineOnly) {
      list = list.filter(m => m.online);
    }
    // Search by name, title, company, expertise, location
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(m => (
        m.name.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.company.toLowerCase().includes(q) ||
        m.location.toLowerCase().includes(q) ||
        (m.expertise || []).some(s => s.toLowerCase().includes(q))
      ));
    }

    // Sort
    if (sortBy === 'experience') {
      list = [...list].sort((a, b) => normalizedExperience(b.experience) - normalizedExperience(a.experience));
    } else if (sortBy === 'mentees') {
      list = [...list].sort((a, b) => (b.mentees || 0) - (a.mentees || 0));
    } else if (sortBy === 'name') {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }

    return list;
  }, [mentors, selectedCategory, onlineOnly, searchTerm, sortBy]);

  const visibleMentors = useMemo(() => filteredMentors.slice(0, visibleCount), [filteredMentors, visibleCount]);

  const openMentorModal = (mentor) => {
    setSelectedMentor(mentor);
  };

  const closeMentorModal = () => {
    setSelectedMentor(null);
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 py-16 text-center">
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Mentors
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Connect with experienced professionals who are passionate about
            helping you grow in your tech journey. Our mentors provide guidance,
            code reviews, and career advice.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white dark:bg-gray-900 py-12 md:py-16 border-b border-gray-300 dark:border-gray-700 w-full overflow-x-hidden overflow-y-visible box-border">
        <div className="max-w-6xl w-full mx-auto px-10 box-border">
          <div className="flex flex-wrap justify-center items-center gap-6 max-w-full mx-auto px-6 box-border overflow-visible">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-3xl py-7 px-6 text-center cursor-pointer transition-all duration-500 flex flex-col items-center gap-3.5 shadow-lg shadow-gray-300/50 dark:shadow-gray-900/50 relative overflow-hidden min-w-[160px] max-w-[200px] flex-0 box-border text-gray-900 dark:text-gray-100 hover:bg-gradient-to-br hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-700 dark:hover:to-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-300/50 dark:hover:shadow-gray-900/50 ${selectedCategory === category.value ? 'bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 border-blue-700 dark:border-blue-600 text-white shadow-xl shadow-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/50 -translate-y-1 scale-105' : ''}`}
              >
                <div className="text-4xl transition-transform duration-300">{category.icon}</div>
                <span className="font-bold text-base tracking-wider">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 w-full overflow-x-hidden overflow-y-visible box-border">
        <div className="max-w-6xl w-full mx-auto px-10 box-border">
          <div className="mb-12 text-center max-w-full mx-auto px-8 box-border">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedCategory === 'all' 
                ? `All Mentors (${filteredMentors.length})` 
                : `${categories.find(c => c.value === selectedCategory)?.label} Mentors (${filteredMentors.length})`
              }
            </h2>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-between gap-4 mb-6 mx-auto px-8 max-w-full box-border">
            <div className="relative flex-1 max-w-[520px]">
              <input
                type="text"
                className="w-full py-3.5 pl-11 pr-10 border-2 border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none transition-all duration-200 focus:border-blue-500 dark:focus:border-blue-400 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
                placeholder="Search mentors, skills, company..."
                value={searchTerm}
                aria-label="Search mentors, skills, company"
                onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(6); }}
              />
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 py-1.5 px-3 border-2 border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800">
                <input type="checkbox" checked={onlineOnly} onChange={(e) => { setOnlineOnly(e.target.checked); setVisibleCount(6); }} className="accent-blue-500" />
                <span className="text-gray-900 dark:text-white font-semibold">Online only</span>
              </label>
              <select className="py-3 px-4 rounded-2xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white" value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort mentors"
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="experience">Sort: Experience</option>
                <option value="mentees">Sort: Mentees</option>
                <option value="name">Sort: Name</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-full mx-auto py-4 box-border overflow-visible">
            {visibleMentors.map((mentor) => (
              <div key={mentor.id} className="bg-gradient-to-br from-white to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 shadow-xl shadow-gray-300/50 dark:shadow-gray-900/50 transition-all duration-500 text-center relative overflow-hidden border-2 border-gray-300 dark:border-gray-700 backdrop-blur-sm max-w-full box-border hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-300/50 dark:hover:shadow-gray-900/50 hover:border-blue-500 dark:hover:border-blue-400">
                <div className="relative w-25 h-25 mx-auto mb-6 transition-transform duration-500 hover:scale-110">
                  <img src={mentor.avatar} alt={mentor.name} className="w-full h-full rounded-full object-cover shadow-xl shadow-gray-300/50 dark:shadow-gray-900/50 transition-all duration-500 border-4 border-gray-300 dark:border-gray-600 hover:shadow-2xl hover:shadow-gray-300/50 dark:hover:shadow-gray-900/50 hover:border-blue-500 dark:hover:border-blue-400" />
                  {mentor.online && <div className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 bg-green-500"></div>}
                </div>
                
                <div className="mentor-info">
                  <h3 className="text-2xl font-extrabold text-black dark:text-white mb-2 leading-tight">{mentor.name}</h3>
                  <p className="text-base font-semibold text-gray-700 dark:text-gray-400 mb-1.5 leading-tight">{mentor.title}</p>
                  <p className="text-base text-blue-600 dark:text-blue-400 font-bold mb-6 leading-tight">@ {mentor.company}</p>
                  
                  <div className="flex justify-around mb-6 p-7 bg-gray-100 dark:bg-gray-800 rounded-2xl border-2 border-gray-300 dark:border-gray-700 transition-all duration-300 shadow-md shadow-gray-300/50 dark:shadow-gray-900/50 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-105 hover:shadow-lg hover:shadow-gray-300/50 dark:hover:shadow-gray-900/50">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <span className="text-2xl font-extrabold text-blue-500 dark:text-blue-400 leading-none">{mentor.experience}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-300 capitalize leading-tight">Experience</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <span className="text-2xl font-extrabold text-blue-500 dark:text-blue-400 leading-none">{mentor.mentees}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-300 capitalize leading-tight">Mentees</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center mb-7">
                    {mentor.expertise.slice(0, 3).map((skill, index) => (
                      <span key={index} className="bg-gray-100 dark:bg-gray-700 text-blue-500 dark:text-blue-400 py-2 px-5 rounded-2xl text-sm font-semibold border-2 border-gray-300 dark:border-gray-600 transition-all duration-300 shadow-md shadow-gray-300/50 dark:shadow-gray-900/50 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30">{skill}</span>
                    ))}
                    {mentor.expertise.length > 3 && (
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 py-2 px-5 rounded-2xl text-sm font-bold border-2 border-gray-300 dark:border-gray-600">+{mentor.expertise.length - 3}</span>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <button 
                      onClick={() => openMentorModal(mentor)}
                      className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30 border-2 border-transparent relative overflow-hidden hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleMentors.length < filteredMentors.length && (
            <div className="flex justify-center mt-4">
              <button className="min-w-[160px] inline-flex items-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 border-2 border-blue-500 dark:border-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800 hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50" onClick={() => setVisibleCount((c) => c + 6)}>
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Become a Mentor CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-800 dark:to-blue-600 py-16 text-white">
        <div className="max-w-6xl w-full mx-auto px-10 box-border">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-5 text-white leading-tight">Want to Become a Mentor?</h2>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-10 leading-relaxed">
              Share your knowledge and help the next generation of developers grow. 
              Join our mentor community and make a real impact.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="#" className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white shadow-lg shadow-blue-500/30 border-2 border-transparent relative overflow-hidden hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 dark:hover:from-blue-700 dark:hover:to-blue-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50">Apply to be a Mentor</a>
              <a href="#" className="inline-flex items-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 border-2 border-white dark:border-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Modal */}
      {selectedMentor && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/75 dark:bg-black/85 flex items-center justify-center z-1000 p-8" onClick={closeMentorModal}>
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 bg-gray-200 dark:bg-gray-700 border-none rounded-full w-10 h-10 flex items-center justify-center text-xl cursor-pointer text-gray-500 dark:text-gray-300 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-700 dark:hover:text-white" onClick={closeMentorModal}>×</button>
            
            <div className="flex items-center gap-6 p-8 border-b border-gray-200 dark:border-gray-700">
              <img src={selectedMentor.avatar} alt={selectedMentor.name} className="w-25 h-25 rounded-full object-cover" />
              <div className="modal-info">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedMentor.name}</h2>
                <p className="text-base text-gray-500 dark:text-gray-400 mb-1">{selectedMentor.title}</p>
                <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold mb-1">@ {selectedMentor.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">📍 {selectedMentor.location}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">About</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{selectedMentor.bio}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMentor.expertise.map((skill, index) => (
                    <span key={index} className="bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400 py-1 px-3 rounded-2xl text-sm font-semibold border border-gray-300 dark:border-gray-600">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMentor.specialties.map((specialty, index) => (
                    <span key={index} className="bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/30 dark:to-yellow-800/30 text-amber-800 dark:text-amber-400 py-1 px-3 rounded-2xl text-sm font-medium border border-amber-300 dark:border-amber-700">{specialty}</span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
                <p className="text-gray-500 dark:text-gray-400">{selectedMentor.languages.join(', ')}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Availability</h3>
                <p className="text-gray-500 dark:text-gray-400">{selectedMentor.availability}</p>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white shadow-lg shadow-blue-500/30 border-2 border-transparent relative overflow-hidden hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 dark:hover:from-blue-700 dark:hover:to-blue-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50">Request Mentorship</button>
                <button className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 border-2 border-blue-500 dark:border-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800 hover:text-white hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentors;
