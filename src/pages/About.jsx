import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const [darkMode, setDarkMode] = useState(true); // Dark Mode Default

  // Toggle Dark/Light Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-purple-50 to-gray-100'}`}>
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 dark:bg-gray-900 backdrop-blur-md shadow-md z-50">
        <div className="flex justify-between items-center px-8 py-4">
          
          {/* Left Section: Stylish Branding */}
          <motion.div
            className="flex items-center space-x-1 text-white dark:text-blue-400 text-2xl font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-400">{'<'}</span>
            <span className="font-signature">Rahul Arora</span>
            <span className="text-gray-400">{'/>'}</span>
          </motion.div>

          {/* Right Section: Navigation Menu */}
          <ul className="flex items-center text-white dark:text-gray-300 font-medium space-x-4">
            <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
            <span>|</span>
            <li><a href="/collaborations" className="hover:text-blue-400">Collaborations</a></li>
            <span>|</span>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <span>|</span>
            <li><a href="/contact" className="hover:text-blue-400">Contact Me</a></li>
            <span>|</span>
            {/* Light/Dark Toggle Button */}
            <li>
              <button
                onClick={toggleDarkMode}
                className="text-xl text-white hover:text-yellow-400 transition"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 text-center px-4 md:px-0">
        <div className="flex justify-center mb-4">
          <img
            src="/profile.jpg"
            alt="Your Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-200 dark:text-white mb-2">
          Hello, I'm <span className="text-blue-400">Rahul Arora</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-400 dark:text-gray-300 mb-4">
          I'm a <span className="font-semibold">Data Scientist</span> with a passion for building <em>intelligent systems</em> and solving <em>real-world problems</em>.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-md">
            Contact me here →
          </button>
          <button className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-md hover:bg-gray-400 shadow-md">
            Download CV
          </button>
        </div>
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-2xl text-gray-400 dark:text-gray-300">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-400" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-200" />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope className="hover:text-red-400" />
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mt-12 px-4 md:px-0">
        <h2 className="text-2xl font-bold text-center text-gray-200 dark:text-white mb-4">About Me</h2>
        <p className="text-center text-gray-400 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          After graduating with a degree in <span className="font-medium">Computer Science</span>, I decided to pursue my passion for problem-solving through data. I’ve worked on various machine learning projects, focusing on predictive modeling, and building scalable data pipelines. My favorite part of programming is solving complex problems and seeing the impact of my work in real-world scenarios.
        </p>
      </section>
    </div>
  );
};

export default About;