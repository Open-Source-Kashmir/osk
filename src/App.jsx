import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Community from "./pages/Community";
import Learn from "./pages/Learn";
import ModuleDetail from "./pages/ModuleDetail";
import BackToTop from "./components/shared/BackToTop";

export default function App() {
  return (
    <Router>
      <ReactLenis
        root
        options={{
          duration: 0.9,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          syncTouch: false,
        }}
      >
        <div className="flex min-h-screen flex-col bg-cream dark:bg-night">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/community" element={<Community />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/learn/:trackId/:moduleId" element={<ModuleDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </ReactLenis>
    </Router>
  );
}
