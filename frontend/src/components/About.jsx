import React from "react";
import { FaPencilAlt, FaMagic, FaRobot, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-purple-200 via-indigo-300 to-blue-400 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-blue-600 text-white shadow-xl rounded-xl p-8 mb-12">
          <h1 className="text-5xl font-extrabold text-center mb-8">
            About AI Writing Assistant
          </h1>
          <p className="text-xl text-gray-100 mb-6 leading-relaxed">
            AI Writing Assistant is a cutting-edge tool designed to elevate your
            writing experience. Powered by advanced artificial intelligence, our
            platform offers a suite of features to enhance your writing quality,
            boost your productivity, and unleash your creativity.
          </p>
          <p className="text-xl text-gray-100">
            Whether you're a student, professional writer, or anyone looking to
            improve their writing, our AI-driven tools are here to support you
            every step of the way.
          </p>
        </div>

        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-10">
          Key Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
         
          <div className="bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 shadow-xl rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center">
            <FaPencilAlt className="text-5xl text-blue-500 mb-6" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Grammar Correction
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Advanced AI algorithms detect and correct grammatical errors, ensuring your writing is polished and professional.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 shadow-xl rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center">
            <FaMagic className="text-5xl text-purple-500 mb-6" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Spell Check
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Comprehensive spell-checking capability catches typos and suggests corrections, maintaining the integrity of your text.
            </p>
          </div>

          
          <div className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 shadow-xl rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center">
            <FaRobot className="text-5xl text-green-500 mb-6" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              AI-Powered Rephrasing
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Intelligent rephrasing suggestions help you diversify your language and improve clarity and impact.
            </p>
          </div>

         
          <div className="bg-gradient-to-r from-red-100 via-red-200 to-red-300 shadow-xl rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out flex flex-col items-center">
            <FaChartLine className="text-5xl text-red-500 mb-6" />
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Writing Analytics
            </h3>
            <p className="text-gray-600 text-sm text-center">
              Gain insights into your writing style and track improvements over time with our detailed analytics.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-400 to-blue-600 text-white rounded-lg p-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Writing?
          </h2>
          <p className="text-xl mb-6">
            Join thousands of satisfied users who have elevated their writing
            with AI Writing Assistant.
          </p>
          <Link
            to="/form"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
