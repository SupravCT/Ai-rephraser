import React, { useState } from "react";
import axios from "axios";
import { FaSpellCheck, FaSyncAlt, FaCheck } from "react-icons/fa";
import { SiGrammarly } from "react-icons/si";
import { usePrivy } from "@privy-io/react-auth";

const Form = () => {
  const { getAccessToken } = usePrivy();
  const [text, setText] = useState("");
  const [rephrasedText, setRephrasedText] = useState("");
  const [spellCheckedText, setSpellCheckedText] = useState("");
  const [grammarCheckedText, setGrammarCheckedText] = useState("");

  const handleTextChange = (e) => setText(e.target.value);

  const rephraseText = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/analyse",
        { sentence: text },
        {
          headers: {
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        }
      );
      setRephrasedText(response.data.rephrased);
    } catch (error) {
      console.error("Error rephrasing text:", error);
    }
  };

  const checkSpelling = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/spell",
        { text },
        {
          headers: {
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        }
      );
      setSpellCheckedText(response.data.rephrased);
    } catch (error) {
      console.error("Error checking spelling:", error);
    }
  };

  const checkGrammar = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/grammar",
        { text }
      );
      setGrammarCheckedText(response.data.rephrased);
    } catch (error) {
      console.error("Error checking grammar:", error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="bg-white shadow-lg rounded-xl p-6 mb-10 bg-opacity-80">
            <h2 className="text-3xl font-semibold mb-4 text-teal-600">AI Writing Assistant</h2>
            <p className="mb-6 text-gray-700">Enhance your writing with advanced AI-powered tools. Improve your grammar, spelling, and rephrase sentences easily!</p>
            <textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Type your text here..."
              rows={10}
              className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none bg-gray-100 text-gray-900"
            />
            <div className="flex justify-end mt-6 space-x-6">
              <button
                onClick={checkSpelling}
                className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-700 transition duration-300 flex items-center"
              >
                <FaSpellCheck className="mr-2" />
                Check Spelling
              </button>
              <button
                onClick={checkGrammar}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
              >
                <SiGrammarly className="mr-2" />
                Check Grammar
              </button>
              <button
                onClick={rephraseText}
                className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 flex items-center"
              >
                <FaSyncAlt className="mr-2" />
                Rephrase Text
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {spellCheckedText && (
              <div className="bg-white shadow-lg rounded-xl p-6 mb-6 bg-opacity-80">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
                  <FaSpellCheck className="text-teal-500 mr-2" />
                  Spell Checked Text
                </h3>
                <p className="mb-4 text-gray-700">{spellCheckedText}</p>
                <button
                  onClick={() => setText(spellCheckedText)}
                  className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300 flex items-center"
                >
                  <FaCheck className="mr-2" />
                  Accept
                </button>
              </div>
            )}
            {grammarCheckedText && (
              <div className="bg-white shadow-lg rounded-xl p-6 mb-6 bg-opacity-80">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
                  <SiGrammarly className="text-blue-500 mr-2" />
                  Grammar Checked Text
                </h3>
                <p className="mb-4 text-gray-700">{grammarCheckedText}</p>
                <button
                  onClick={() => setText(grammarCheckedText)}
                  className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition duration-300 flex items-center"
                >
                  <FaCheck className="mr-2" />
                  Accept
                </button>
              </div>
            )}
          </div>

          {rephrasedText && (
            <div className="bg-white shadow-lg rounded-xl p-6 my-8 bg-opacity-80">
              <h3 className="text-xl font-semibold mb-4 flex items-center text-purple-600">
                <FaSyncAlt className="mr-2" />
                Rephrased Text:
              </h3>
              <textarea
                value={rephrasedText}
                readOnly
                rows={10}
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none bg-gray-100 text-gray-900"
              />
            </div>
          )}
        </div>

        <div className="md:col-span-1">
          <div className="bg-white shadow-lg rounded-xl p-6 sticky top-10 bg-opacity-80">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-green-500">
              <FaCheck className="mr-2" />
              Accepted Corrections
            </h3>
            <p className="mb-4 text-gray-600">Your approved corrections will appear here.</p>
            <p className="text-gray-500 italic">{text ? text : "No corrections yet."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
