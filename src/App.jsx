import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Mentors from "./pages/Mentors";
import Contributors from "./pages/Contributors";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <main className="main-content">
          {/* Shared static sections like Hero & About */}
          <Hero />
          <About />
          {/* Routed pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/contributors" element={<Contributors />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}