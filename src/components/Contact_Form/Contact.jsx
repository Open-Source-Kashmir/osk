import { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { FaDiscord, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    console.log('Form data:', formData);
    
    setLoading(true);
    setStatus('Sending...');
    
    try {
      console.log('Sending request to backend...');
      const response = await fetch('http://localhost:5002/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      const result = await response.json();
      console.log('Response data:', result);
      
      if (response.ok) {
        console.log('Email sent successfully!');
        setStatus("Message sent! We'll reply within 24 hours.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.log('Server error:', result.message);
        setStatus(result.message || "Failed to send. Try again.");
      }
    } catch (error) {
      console.error('Network/Connection error:', error);
      setStatus('Network error. Try again.');
    }
    
    setLoading(false);
    console.log('Form submission completed');
    setTimeout(() => setStatus(''), 6000);
  };

  return (
    <div className="w-full py-16 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3 bg-gradient-to-r from-blue-400 via-sky-300 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 font-medium max-w-xl mx-auto">
          We're here for your questions, collaboration, and ideas. Get in touch!
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Send Message */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Send Message</h2>
            <form className="space-y-7" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-gray-700 dark:text-gray-200 mb-2.5">Full Name *</label>
                <input
                  name="name"
                  id="name"
                  placeholder="Enter your full name"
                  className="block w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-base px-5 py-3 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-base font-semibold text-gray-700 dark:text-gray-200 mb-2.5">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="block w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-base px-5 py-3 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-base font-semibold text-gray-700 dark:text-gray-200 mb-2.5">Subject *</label>
                <input
                  name="subject"
                  id="subject"
                  placeholder="Enter the subject"
                  className="block w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-base px-5 py-3 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-base font-semibold text-gray-700 dark:text-gray-200 mb-2.5">Message *</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Tell us about your project, questions, or how you'd like to contribute..."
                  className="block w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-base px-5 py-3 rounded-xl placeholder:text-gray-500 dark:placeholder:text-gray-400 border border-gray-200 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full mt-1 py-3.5 font-semibold text-lg rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <FiSend size={20} />
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <div className={`p-4 text-sm rounded-xl text-center font-bold mt-3 ${
                  status.includes('sent')
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-700"
                    : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-700"
                }`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Right: Info + Social stacked vertically */}
        <div className="flex flex-col justify-between gap-8">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl p-8 flex-1">
            <h2 className="text-2xl font-bold mb-7 text-gray-900 dark:text-white">Contact Info</h2>
            <ul className="flex flex-col gap-7">
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-700/10 dark:bg-blue-700/20 flex items-center justify-center rounded-xl">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <span>
                  <b className="text-gray-900 dark:text-white">Email</b><br />
                  <a href="mailto:tharramzan.ofi@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-blue-400 transition">
                    tharramzan.ofi@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-700/10 dark:bg-blue-700/20 flex items-center justify-center rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <span>
                  <b className="text-gray-900 dark:text-white">Global Presence</b><br />
                  <span className="text-gray-700 dark:text-gray-200">Worldwide Community</span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 bg-blue-700/10 dark:bg-blue-700/20 flex items-center justify-center rounded-xl">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <span>
                  <b className="text-gray-900 dark:text-white">Response Time</b><br />
                  <span className="text-gray-700 dark:text-gray-200">Within 24 hours</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl p-8 flex-1">
            <h2 className="text-2xl font-bold mb-7 text-gray-900 dark:text-white">Connect With Us</h2>
            <div className="grid grid-cols-2 gap-5">
              <a href="https://github.com/Open-Source-Kashmir/osk" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg hover:border-blue-600 transition group">
                <FaGithub size={32} className="text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-400" />
                <span className="text-base font-semibold text-gray-900 dark:text-white">GitHub</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Contribute to our projects</span>
              </a>
              <a href="https://discord.com/invite/hgnUsqAmMT" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg hover:border-blue-600 transition group">
                <FaDiscord size={32} className="text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-400" />
                <span className="text-base font-semibold text-gray-900 dark:text-white">Discord</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Join our community</span>
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg hover:border-blue-600 transition group">
                <FaYoutube size={32} className="text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-400" />
                <span className="text-base font-semibold text-gray-900 dark:text-white">YouTube</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Tutorials & talks</span>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-lg hover:border-blue-600 transition group">
                <FaInstagram size={32} className="text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-400" />
                <span className="text-base font-semibold text-gray-900 dark:text-white">Instagram</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 text-center">Community highlights</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}