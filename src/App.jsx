import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Mentors from "./pages/Mentors";
import Contributors from "./pages/Contributors";
import CommunityPage from "./pages/CommunityPage";
import BackToTop from "./components/shared/BackToTop";

export default function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 0.8, // scroll speed (1.2s for smooth flow)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default easing
      smooth: true,
      smoothTouch: false, // disable smooth on mobile for performance
    });

    // RAF loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup when component unmounts
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <Navbar />

        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/contributors" element={<Contributors />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}
