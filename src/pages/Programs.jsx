import { useState } from 'react';
import ProgramCard from '../components/ProgramCard';
import gsocLogo from '../assets/GSoc.png';
import lfLogo from '../assets/linux.png';
import outreachyLogo from '../assets/outreachy.png';
import mlhLogo from '../assets/mlh.png';
import seasonofDocsLogo from '../assets/docs.png';
import githubLogo from '../assets/github.png';
import codeforgoodLogo from '../assets/jp.png';
import fossasiaLogo from '../assets/fossasia.png';


const Programs = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const programs = [
    {
      title: "Google Summer of Code",
      description: "Work on real-world projects with leading open source organizations during summer break. GSoC is a global program focused on introducing students to open source software development.",
      organization: "Google",
      duration: "12-22 weeks",
      stipend: "$3000-$6600",
      applicationDeadline: "March 2024",
      skills: ["Programming", "Open Source", "Git", "Documentation"],
      link: "https://summerofcode.withgoogle.com/",
      featured: true,
      category: "internship",
      logo: gsocLogo
    },
    {
      title: "LFX Mentorship",
      description: "Get mentored by experienced developers while contributing to Linux Foundation projects. Work on cutting-edge cloud native, networking, and edge technologies.",
      organization: "Linux Foundation",
      duration: "12 weeks",
      stipend: "$3000-$6000",
      applicationDeadline: "Rolling",
      skills: ["Linux", "Cloud", "DevOps", "Kubernetes"],
      link: "https://mentorship.lfx.linuxfoundation.org/",
      category: "mentorship",
      logo: lfLogo
    },
    {
      title: "Outreachy",
      description: "Provides internships to work on open source projects. Outreachy supports diversity in open source and tech by providing internships to underrepresented groups.",
      organization: "Outreachy",
      duration: "13 weeks",
      stipend: "$7000",
      applicationDeadline: "February & August",
      skills: ["Programming", "Documentation", "UX", "Translation"],
      link: "https://www.outreachy.org/",
      category: "internship",
      logo: outreachyLogo
    },
    {
      title: "MLH Fellowship",
      description: "A remote internship alternative for aspiring technologists. Fellows contribute to Open Source projects that power the world's software.",
      organization: "Major League Hacking",
      duration: "12 weeks",
      stipend: "Varies",
      applicationDeadline: "Rolling",
      skills: ["Web Development", "Mobile Apps", "DevOps", "Data Science"],
      link: "https://fellowship.mlh.io/",
      category: "fellowship",
      logo: mlhLogo
    },
    {
      title: "GitHub Campus Experts",
      description: "A program for student leaders passionate about growing the developer community at their school. Experts receive training and support.",
      organization: "GitHub",
      duration: "1 year",
      stipend: "Benefits & Swag",
      applicationDeadline: "Rolling",
      skills: ["Community Building", "Leadership", "Git", "Public Speaking"],
      link: "https://education.github.com/experts",
      category: "community",
      logo: githubLogo
    },
    {
      title: "Code for Good",
      description: "Annual hackathon where developers create solutions for non-profit organizations. Focus on using technology to solve social problems.",
      organization: "JPMorgan Chase",
      duration: "48 hours",
      stipend: "Prizes",
      applicationDeadline: "September",
      skills: ["Full-Stack Development", "Problem Solving", "Teamwork"],
      link: "https://www.jpmorgan.com/technology/code-for-good",
      category: "hackathon",
      logo: codeforgoodLogo

    },
    {
      title: "FOSSASIA Codeheat",
      description: "Contest for developers to contribute to FOSSASIA projects. Participants work on various open source projects throughout the contest period.",
      organization: "FOSSASIA",
      duration: "3 months",
      stipend: "Prizes & Swag",
      applicationDeadline: "October",
      skills: ["JavaScript", "Python", "Android", "Web Development"],
      link: "https://codeheat.org/",
      category: "contest",
      logo: fossasiaLogo
    },
    {
      title: "C4GT (Code for Good Together)",
      description: "A comprehensive program that brings together developers, designers, and contributors to work on open source projects that create positive social impact. Focus on building sustainable solutions for communities.",
      organization: "C4GT Foundation",
      duration: "6 months",
      stipend: "$2000-$5000",
      applicationDeadline: "January",
      skills: ["Full-Stack Development", "UI/UX Design", "Project Management", "Social Impact"],
      link: "https://c4gt.org/",
      category: "fellowship",
      logo: codeforgoodLogo
    },
    {
      title: "Google Season of Docs",
      description: "Brings technical writers and open source projects together to improve documentation. Writers work with mentors from open source organizations to create better docs.",
      organization: "Google",
      duration: "3-5 months",
      stipend: "$2500-$15000",
      applicationDeadline: "April",
      skills: ["Technical Writing", "Documentation", "Communication", "Open Source"],
      link: "https://developers.google.com/season-of-docs",
      category: "documentation",
      logo: seasonofDocsLogo
    },
    {
      title: "Rails Girls Summer of Code",
      description: "A global fellowship program for women and non-binary coders. Participants work on open source projects with the support of mentors and coaches.",
      organization: "Rails Girls",
      duration: "3 months",
      stipend: "€300-€500/month",
      applicationDeadline: "March",
      skills: ["Ruby on Rails", "Open Source", "Mentoring", "Community"],
      link: "https://railsgirlssummerofcode.org/",
      category: "fellowship",
      logo: githubLogo
    }
  ];

  const categories = [
    { value: 'all', label: 'All Programs' },
    { value: 'internship', label: 'Internships' },
    { value: 'mentorship', label: 'Mentorship' },
    { value: 'fellowship', label: 'Fellowships' },
    { value: 'documentation', label: 'Documentation' },
    { value: 'community', label: 'Community' },
    { value: 'hackathon', label: 'Hackathons' },
    { value: 'contest', label: 'Contests' }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesFilter = filter === 'all' || program.category === filter;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      program.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full overflow-x-hidden relative">
      {/* Header Section */}
      <section className="text-center pt-32 pb-16 px-5 bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2.5">Open Source Programs</h1>
          <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover amazing opportunities to contribute to open source projects, gain experience,
            and connect with the global developer community.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 py-2.5 sticky top-20 z-40">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 py-2.5 px-5">
            <div className="relative flex-1 basis-[250px] min-w-[250px] max-w-[350px]">
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2.5 pl-3 pr-9 rounded-lg border border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm transition-all duration-300 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:shadow-[0_0_3px_rgba(0,123,255,0.3)]"
              />
              <svg className="absolute right-2.5 top-2.5 text-gray-500 dark:text-gray-400" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-2.5">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`rounded-2xl py-2 px-4 cursor-pointer transition-all duration-300 text-sm font-medium ${filter === category.value ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white border-2 border-blue-600 shadow-lg hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5' : 'bg-gray-100 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-500 hover:shadow-lg transform hover:-translate-y-1 hover:scale-102'}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-10 px-5 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-[1200px] mx-auto">
          {filteredPrograms.length > 0 ? (
            <>
              <div className="font-semibold text-gray-600 dark:text-gray-400 mb-5 text-center">
                {filteredPrograms.length} program{filteredPrograms.length !== 1 ? 's' : ''} found
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
                {filteredPrograms.map((program, index) => (
                  <ProgramCard key={index} {...program} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-15 text-gray-600 dark:text-gray-400">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No programs found</h3>
              <p className="mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => { setFilter('all'); setSearchTerm(''); }}
                className="inline-block py-2.5 px-5 rounded-lg bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-14 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight bg-gradient-to-r from-blue-400 via-sky-300 to-blue-700 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed">
              Join our community and get guidance on how to apply to these programs.
              Our mentors can help you prepare your applications and increase your chances of success.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#" className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg font-semibold no-underline transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30 border-2 border-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95">
                Join Our Discord
              </a>
              <a href="#" className="inline-flex items-center gap-2 py-3.5 px-8 rounded-lg font-semibold no-underline transition-all duration-300 bg-white text-gray-900 shadow-lg border-2 border-transparent hover:bg-gray-100 hover:-translate-y-1 hover:shadow-2xl active:scale-95 dark:bg-transparent dark:text-white dark:border-gray-300 dark:hover:bg-slate-700">
                Get Mentorship
              </a>
            </div>
          </div>
        </div>  
      </section>
    </div>
  );
};

export default Programs;
