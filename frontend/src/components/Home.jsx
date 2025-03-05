import React from "react";
import { FaPencilAlt, FaSpellCheck, FaSyncAlt } from "react-icons/fa";
import ai from "../images/ai.avif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        
        <section className="bg-gradient-to-r from-teal-400 to-blue-600 text-white py-24 px-6 md:px-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Transform Your Writing with Cutting-Edge AI
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Experience seamless grammar correction, spelling fixes, and smart rephrasing with the latest AI technology to take your writing to the next level.
              </p>
              <Link
                to="/form"
                className="bg-white text-teal-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-teal-100 transition duration-300 ease-in-out shadow-lg"
              >
                Start Writing Now
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={ai}
                alt="AI Writing"
                className="rounded-xl shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-3 hover:shadow-2xl"
                style={{ width: "80%", height: "auto" }}
              />
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gradient-to-r from-purple-100 via-indigo-200 to-pink-100">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
              Unlock Powerful Features for Enhanced Writing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                <FaPencilAlt className="text-6xl text-teal-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Smart Grammar Correction
                </h3>
                <p className="text-gray-600">
                  Leverage AI-powered grammar checking that understands context and suggests improvements to help you write with clarity and confidence.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                <FaSpellCheck className="text-6xl text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Advanced Spell Checker
                </h3>
                <p className="text-gray-600">
                  Catch even the toughest spelling errors using our robust AI dictionary and context-aware suggestions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
                <FaSyncAlt className="text-6xl text-purple-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Intelligent Rephrasing
                </h3>
                <p className="text-gray-600">
                  Rephrase your sentences with AI to improve readability, tone, and impact tailored to your specific writing style.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="text-sm">
          &copy; 2025 Suprav Chand. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
