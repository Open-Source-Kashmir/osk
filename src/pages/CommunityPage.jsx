import React from "react";
import Footer from "../components/shared/Footer";
import { ArrowDown } from "lucide-react";


const CommunityPage = () => {
  return (
    <div className='min-h-screen'>
      <div className="flex flex-col items-center py-0 max-w-4xl mx-auto text-center px-4">
        {/* Mission Section */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 mt-16">The OSK Community</h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl">
          At Open Source Kashmir (OSK), our mission is to build a
          community-driven initiative that empowers the people of Kashmir to
          code, collaborate, and contribute to open-source projects.
        </p>

        {/* How to Join/Benefits Section */}
        <section className="max-w-2xl bg-white p-8 rounded-xl shadow-sm mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Get Involved</h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            We welcome contributors of all skill levels and place a strong
            emphasis on awareness, mentorship, and collaboration. Being a part of the OSK community is the perfect opportunity to gain practical, hands-on experience in software collaboration.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            To get started, browse through <a href="" className="text-blue-600 hover:underline">Contribution Ideas</a> on
            our GitHub and find something you feel comfortable contributing to.
          </p>

          {/* Call to Action Section */}
          <ol className="flex flex-col justify-center items-center py-0 list-none">
            <li className="flex flex-col items-center">
              <div className="bg-gray-300 py-3 px-6 rounded-lg shadow-sm font-medium w-full max-w-xs text-center box-border">
                <span>Fork & Clone the Repo</span>
              </div>
              <ArrowDown className="scale-95 text-indigo-400 my-2" />
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-gray-300 py-3 px-6 rounded-lg shadow-sm font-medium w-full max-w-xs text-center box-border">
                <span>Create a New Branch</span>
              </div>
              <ArrowDown className="scale-95 text-indigo-400 my-2" />
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-gray-300 py-3 px-6 rounded-lg shadow-sm font-medium w-full max-w-xs text-center box-border">
                <span>Make Changes and Commit</span>
              </div>
              <ArrowDown className="scale-95 text-indigo-400 my-2" />
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-gray-300 py-3 px-6 rounded-lg shadow-sm font-medium w-full max-w-xs text-center box-border">
                <span>Push and Open a Pull Request (PR)</span>
              </div>
            </li>
          </ol>

        </section>

        <section className="flex justify-center items-center my-12">
          <a
            href="https://github.com/Open-Source-Kashmir/osk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-3.5 px-8 rounded-lg font-bold shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default CommunityPage;