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
    { 
      number: "50+", 
      label: "Contributors", 
      icon: <UserPlus className="text-green-500" size={40} />,
      bgColor: "bg-green-500/10"
    },
    {
      number: "25+", 
      label: "Projects", 
      icon: <FolderKanban className="text-indigo-500" size={40} />,
      bgColor: "bg-indigo-500/10"
    },
    { 
      number: "15+", 
      label: "Mentors", 
      icon: <GraduationCap className="text-blue-500" size={40} />,
      bgColor: "bg-blue-500/10"
    },
    { 
      number: "5+", 
      label: "Programs", 
      icon: <CalendarRange className="text-cyan-400" size={40} />,
      bgColor: "bg-cyan-500/10"
    }
  ];

  const features = [
    {
      title: "Expert Mentorship",
      description: "Learn from experienced developers and industry professionals who guide you through your open source journey.",
      icon: <Target className="text-red-500" size={40} />,
      bgColor: "bg-red-500/10"
    },
    {
      title: "Real Projects",
      description: "Work on meaningful projects that solve real-world problems and make a positive impact on the community.",
      icon: <FolderKanban className="text-indigo-500" size={40} />,
      bgColor: "bg-indigo-500/10"
    },
    {
      title: "Global Network",
      description: "Connect with developers worldwide and build lasting relationships in the open source ecosystem.",
      icon: <Globe className="text-green-500" size={40} />,
      bgColor: "bg-green-500/10"
    },
    {
      title: "Career Growth",
      description: "Gain valuable experience and skills that boost your career prospects in the tech industry.",
      icon: <TrendingUp className="text-emerald-500" size={40} />,
      bgColor: "bg-emerald-500/10"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 sm:mt-4">
              Join our growing community of open source enthusiasts
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`${stat.bgColor} p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-opacity-20 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Choose Open Source Kashmir?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
              We provide everything you need to succeed in the open source world
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.bgColor} p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-opacity-20 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Programs</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover the most popular open source programs and start your journey today
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredPrograms.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/programs" className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg font-semibold no-underline transition-all duration-300 bg-transparent text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-950 dark:to-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Open Source Journey?</h2>
            <p className="text-xl text-gray-300 dark:text-gray-400 mb-10 leading-relaxed">
              Join our community of passionate developers and make your mark in the open source world.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/learning" className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg font-semibold no-underline transition-all duration-300 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg shadow-green-500/30 border-2 border-transparent hover:bg-gradient-to-r hover:from-green-700 hover:to-green-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 active:scale-95">
                Start Learning
              </Link>
              <Link to="/contributors" className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg font-semibold no-underline transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30 border-2 border-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95">
                Become a Contributor
              </Link>
              <Link to="/mentors" className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg font-semibold no-underline transition-all duration-300 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95">
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
