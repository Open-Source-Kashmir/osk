import gsocLogo from "../assets/GSoc.png";
import lfLogo from "../assets/linux.png";
import outreachyLogo from "../assets/outreachy.png";
import mlhLogo from "../assets/mlh.png";
import seasonOfDocsLogo from "../assets/docs.png";
import githubLogo from "../assets/github.png";
import codeForGoodLogo from "../assets/jp.png";
import fossasiaLogo from "../assets/fossasia.png";

export const programs = [
  {
    slug: "gsoc",
    title: "Google Summer of Code",
    description:
      "Work on real-world projects with leading open source organizations during the summer break, mentored by experienced developers.",
    organization: "Google",
    duration: "12-22 weeks",
    stipend: "$3,000 - $6,600",
    applicationDeadline: "March 2026",
    skills: ["Programming", "Open Source", "Git", "Documentation"],
    link: "https://summerofcode.withgoogle.com/",
    featured: true,
    category: "internship",
    logo: gsocLogo,
  },
  {
    slug: "lfx",
    title: "LFX Mentorship",
    description:
      "Get mentored by experienced developers while contributing to Linux Foundation projects across cloud native, networking, and edge technologies.",
    organization: "Linux Foundation",
    duration: "12 weeks",
    stipend: "$3,000 - $6,000",
    applicationDeadline: "Rolling",
    skills: ["Linux", "Cloud", "DevOps", "Kubernetes"],
    link: "https://mentorship.lfx.linuxfoundation.org/",
    featured: true,
    category: "mentorship",
    logo: lfLogo,
  },
  {
    slug: "outreachy",
    title: "Outreachy",
    description:
      "Provides paid internships to work on open source projects, supporting diversity in open source and tech for underrepresented groups.",
    organization: "Outreachy",
    duration: "13 weeks",
    stipend: "$7,000",
    applicationDeadline: "Feb & Aug",
    skills: ["Programming", "Documentation", "UX", "Translation"],
    link: "https://www.outreachy.org/",
    featured: false,
    category: "internship",
    logo: outreachyLogo,
  },
  {
    slug: "mlh-fellowship",
    title: "MLH Fellowship",
    description:
      "A remote internship alternative for aspiring technologists. Contribute to open source projects that power the world's software.",
    organization: "Major League Hacking",
    duration: "12 weeks",
    stipend: "Varies",
    applicationDeadline: "Rolling",
    skills: ["Web Development", "Mobile Apps", "DevOps", "Data Science"],
    link: "https://fellowship.mlh.io/",
    featured: false,
    category: "fellowship",
    logo: mlhLogo,
  },
  {
    slug: "github-campus-experts",
    title: "GitHub Campus Experts",
    description:
      "A program for student leaders passionate about growing the developer community at their school, with training and support from GitHub.",
    organization: "GitHub",
    duration: "1 year",
    stipend: "Benefits & Swag",
    applicationDeadline: "Rolling",
    skills: ["Community Building", "Leadership", "Git", "Public Speaking"],
    link: "https://education.github.com/experts",
    featured: false,
    category: "community",
    logo: githubLogo,
  },
  {
    slug: "code-for-good",
    title: "Code for Good",
    description:
      "An annual hackathon where developers create solutions for non-profit organizations using technology to solve social problems.",
    organization: "JPMorgan Chase",
    duration: "48 hours",
    stipend: "Prizes",
    applicationDeadline: "September",
    skills: ["Full-Stack Development", "Problem Solving", "Teamwork"],
    link: "https://www.jpmorgan.com/technology/code-for-good",
    featured: false,
    category: "hackathon",
    logo: codeForGoodLogo,
  },
  {
    slug: "fossasia-codeheat",
    title: "FOSSASIA Codeheat",
    description:
      "A contest for developers to contribute to FOSSASIA projects and win prizes while working on impactful open source software.",
    organization: "FOSSASIA",
    duration: "3 months",
    stipend: "Prizes & Swag",
    applicationDeadline: "October",
    skills: ["JavaScript", "Python", "Android", "Web Development"],
    link: "https://codeheat.org/",
    featured: false,
    category: "contest",
    logo: fossasiaLogo,
  },
  {
    slug: "season-of-docs",
    title: "Google Season of Docs",
    description:
      "Brings technical writers and open source projects together to improve documentation with the support of mentors.",
    organization: "Google",
    duration: "3-5 months",
    stipend: "$2,500 - $15,000",
    applicationDeadline: "April",
    skills: ["Technical Writing", "Documentation", "Communication"],
    link: "https://developers.google.com/season-of-docs",
    featured: false,
    category: "documentation",
    logo: seasonOfDocsLogo,
  },
  {
    slug: "rails-girls-summer-of-code",
    title: "Rails Girls Summer of Code",
    description:
      "A global fellowship program for women and non-binary coders to work on open source projects with mentors and coaches.",
    organization: "Rails Girls",
    duration: "3 months",
    stipend: "€300-€500/month",
    applicationDeadline: "March",
    skills: ["Ruby on Rails", "Open Source", "Mentoring", "Community"],
    link: "https://railsgirlssummerofcode.org/",
    featured: false,
    category: "fellowship",
    logo: githubLogo,
  },
];

export const programCategories = [
  { value: "all", label: "All Programs" },
  { value: "internship", label: "Internships" },
  { value: "mentorship", label: "Mentorship" },
  { value: "fellowship", label: "Fellowships" },
  { value: "documentation", label: "Documentation" },
  { value: "community", label: "Community" },
  { value: "hackathon", label: "Hackathons" },
  { value: "contest", label: "Contests" },
];
