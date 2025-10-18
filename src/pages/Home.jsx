import { Link } from 'react-router-dom';
import ProgramCard from '../components/ProgramCard';
import Hero from '../components/Hero';
import About from '../components/About';
import { Users, UserPlus, Globe, FolderKanban, GraduationCap, Target, TrendingUp, CalendarRange } from "lucide-react";
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
    { number: "50+", label: "Contributors", icon: <UserPlus color="#22c55e" size={40} /> },
    {
      number: "25+", label: "Projects", icon: <FolderKanban color="#6366f1" size={40} /> },
    { number: "15+", label: "Mentors", icon: <GraduationCap color="#3b82f6" size={40} /> },
    { number: "5+", label: "Programs", icon: <CalendarRange color="#22d3ee" size={40} /> }
  ];

  const features = [
    {
      title: "Expert Mentorship",
      description: "Learn from experienced developers and industry professionals who guide you through your open source journey.",
      icon: <Target color="#ef4444" size={40} />  
    },
    {
      title: "Real Projects",
      description: "Work on meaningful projects that solve real-world problems and make a positive impact on the community.",
      icon: <FolderKanban color="#6366f1" size={40} />
    },
    {
      title: "Global Network",
      description: "Connect with developers worldwide and build lasting relationships in the open source ecosystem.",
      icon: <Globe color="#22c55e" size={40} />
    },
    {
      title: "Career Growth",
      description: "Gain valuable experience and skills that boost your career prospects in the tech industry.",
      icon: <TrendingUp color="#43ba7b" size={40} />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />

      {/* Stats Section */}
      <section className="bg-[#0b1220] py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-[#10172a] p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-white mt-2">{stat.number}</div>
                <p className="text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Open Source Kashmir?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We provide everything you need to succeed in the open source world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center bg-white p-8 rounded-2xl text-center shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the most popular open source programs and start your journey today
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredPrograms.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/programs" className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg font-semibold no-underline transition-all duration-300 bg-transparent text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Open Source Journey?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join our community of passionate developers and make your mark in the open source world.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/contributors" className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg font-semibold no-underline transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30 border-2 border-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40">
                Become a Contributor
              </Link>
              <Link to="/mentors" className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg font-semibold no-underline transition-all duration-300 bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5">
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
