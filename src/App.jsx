import './App.css';

export default function App() {
  return (
    <div className="container">
      {/* Hero Section */}
      <h1 className="title">Open Source Kashmir</h1>
      <p className="subtitle">
        Empowering Kashmir to code, collaborate, and contribute to global open source projects.
      </p>
      <a
        href="https://github.com/Open-Source-Kashmir"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        Join Us on GitHub
      </a>

      {/* About Section */}
      <section className="about">
        <h2 className='font-bold'>About Us</h2>
        <p>
          We are building an open source ecosystem in Kashmir to help developers learn, 
          build, and contribute to global projects. Through projects, mentorship, and events, 
          we connect local talent with opportunities like LFX, GSoC, and C4GT.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Open Source Kashmir
      </footer>
    </div>
  );
}
