import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Mentors from "./pages/Mentors";
import Contributors from "./pages/Contributors";
import CommunityPage from "./pages/CommunityPage";

export default function App() {
  return (
    <Router>
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
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}