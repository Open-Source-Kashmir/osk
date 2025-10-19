import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react"; 
import "lenis/dist/lenis.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Mentors from "./pages/Mentors";
import Contributors from "./pages/Contributors";
import CommunityPage from "./pages/CommunityPage";
import LearningTrack from "./pages/LearningTrack";
import ModuleDetail from "./pages/ModuleDetail";
import Resources from "./pages/Resources"
import BackToTop from "./components/shared/BackToTop";

export default function App() {
  return (
    <Router>
      {/* Wrap the entire app in ReactLenis to enable smooth scroll */}
      <ReactLenis
        root
        options={{
          duration: 0.8, // scroll duration (smooth speed)
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
          smooth: true,
          syncTouch: false, // disable touch event synchronization
        }}
      >
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <Navbar />

          <main className="pt-24">
            {/* Routed pages */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/contributors" element={<Contributors />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/learning" element={<LearningTrack />} />
              <Route path="/learning/:trackId/:moduleId" element={<ModuleDetail />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </main>

          <Footer />

          {/* Back-to-top button */}
          <BackToTop />
        </div>
      </ReactLenis>
    </Router>
  );
}
