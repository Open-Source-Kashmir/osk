import { useState } from "react";
import { Mail, MapPin, Clock, Send, Github, MessageCircle, Youtube, Instagram } from "lucide-react";

const CONTACT_EMAIL = "opensourcekashmir@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Contact Form Submission: ${formData.subject}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("Opening your email app to send the message.");
    setTimeout(() => setStatus(""), 6000);
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/Open-Source-Kashmir", icon: Github },
    { label: "Discord", href: "https://discord.gg/hgnUsqAmMT", icon: MessageCircle },
    { label: "YouTube", href: "https://youtube.com/", icon: Youtube },
    { label: "Instagram", href: "https://instagram.com/", icon: Instagram },
  ];

  return (
    <section
      id="contact"
      className="border-t-2 border-stone-200 bg-cream-deep dark:border-stone-800 dark:bg-stone-900/40"
    >
      <div className="container-page section-pad">
        <div className="mx-auto max-w-2xl text-center">
          <span className="tag">Contact</span>
          <h2 className="mt-5 font-display text-4xl font-black tracking-tight">
            Get in touch
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-400">
            We're here for your questions, collaboration, and ideas.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <div className="card rounded-3xl border-2 lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-stone-700 dark:text-stone-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your project, questions, or how you'd like to contribute..."
                  value={formData.message}
                  onChange={handleChange}
                  className="input resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                <Send size={16} />
                Send message
              </button>
              {status && (
                <div
                  className={`rounded-xl border-2 px-4 py-3 text-center text-sm font-semibold ${
                    status.includes("Opening")
                      ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400"
                      : "border-red-300 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="space-y-4 lg:col-span-2">
            <div className="card rounded-2xl border-2">
              <h3 className="font-display text-lg font-bold">Contact info</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand-lighter text-brand">
                    <Mail size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-white">Email</p>
                    <a
                      href="mailto:opensourcekashmir@gmail.com"
                      className="text-sm text-stone-600 hover:text-brand dark:text-stone-400 dark:hover:text-brand"
                    >
                      opensourcekashmir@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-forest">
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-white">Based in</p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">
                      Kashmir, with a worldwide community
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                    <Clock size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-stone-900 dark:text-white">Response time</p>
                    <p className="text-sm text-stone-600 dark:text-stone-400">Within 24 hours</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card rounded-2xl border-2">
              <h3 className="font-display text-lg font-bold">Follow us</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border-2 border-stone-200 p-3 text-sm font-semibold text-stone-700 transition-colors hover:border-brand hover:text-brand dark:border-stone-700 dark:text-stone-300 dark:hover:border-brand dark:hover:text-brand"
                    >
                      <Icon size={16} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
