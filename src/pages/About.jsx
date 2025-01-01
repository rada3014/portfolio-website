import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

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
          {/* Branding */}
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

          {/* Navigation */}
          <ul className="flex items-center text-white dark:text-gray-300 font-medium space-x-4">
            <li><a href="/projects" className="hover:text-blue-400">Projects</a></li>
            <span>|</span>
            <li><a href="/collaborations" className="hover:text-blue-400">Collaborations</a></li>
            <span>|</span>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <span>|</span>
            <li><a href="/contact" className="hover:text-blue-400">Contact Me</a></li>
            <span>|</span>
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
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-gray-200 dark:text-white mb-2">
          Hello, I'm <span className="text-blue-400">Rahul Arora</span>.
        </h1>
        <p className="text-sm md:text-xl text-gray-400 dark:text-gray-300 mb-4">
          I'm a <span className="font-semibold">Data Scientist</span> with a passion for building <em>intelligent systems</em> and solving <em>real-world problems</em>.
        </p>
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 shadow-md">
            Contact me here →
          </button>
          <button className="bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-md hover:bg-gray-400 shadow-md">
            Download CV
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="mt-12 px-4 md:px-0">
        <h2 className="text-2xl font-bold text-center text-gray-200 dark:text-white mb-4">About Me</h2>
        <p className="text-center text-gray-400 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          After graduating with a degree in <span className="font-medium">Computer Science</span>, I decided to pursue my passion for problem-solving through data. 
          I’ve worked on various machine learning projects, focusing on predictive modeling, and building scalable data pipelines. 
          My favorite part of programming is solving complex problems and seeing the impact of my work in real-world scenarios.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mt-12 px-4 md:px-0">
        <h2 className="text-3xl font-bold text-center text-gray-200 dark:text-white mb-8">My Skills</h2>
        <div className="flex justify-center flex-wrap gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Python */}
          <div className="relative group flex flex-col items-center">
            <div className="text-6xl text-blue-500 group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <i className="devicon-python-plain"></i>
            </div>
            {/* Tooltip */}
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2">
              Python
            </span>
          </div>

          {/* SQL */}
          <div className="relative group flex flex-col items-center">
            <div className="text-6xl text-yellow-500 group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <i className="devicon-mysql-plain"></i>
            </div>
            {/* Tooltip */}
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2">
              SQL
            </span>
          </div>

          {/* PySpark */}
          <div className="relative group flex flex-col items-center">
            <div className="text-6xl text-orange-500 group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <i className="devicon-apachespark-plain"></i>
            </div>
            {/* Tooltip */}
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2">
              PySpark
            </span>
          </div>

          {/* Power BI (Alternate Icon) */}
          <div className="relative group flex flex-col items-center">
            <div className="text-6xl text-yellow-600 group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <i className="fa-brands fa-microsoft"></i>
            </div>
            {/* Tooltip */}
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2">
              Power BI
            </span>
          </div>

          {/* Excel */}
          <div className="relative group flex flex-col items-center">
            <div className="text-6xl text-green-500 group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <i className="fa-solid fa-file-excel"></i>
            </div>
            {/* Tooltip */}
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2">
              Excel
            </span>
          </div>

          {/* Scikit-learn */}
          <div className="relative group flex flex-col items-center">
            <div className="text-6xl text-yellow-400 group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <i className="devicon-scikitlearn-plain"></i>
            </div>
            {/* Tooltip */}
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2">
              Scikit-learn
            </span>
          </div>

          {/* TensorFlow */}
          <div className="relative group flex flex-col items-center">
            <div className="text-6xl text-orange-400 group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <i className="devicon-tensorflow-original"></i>
            </div>
            {/* Tooltip */}
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2">
              TensorFlow
            </span>
          </div>

          {/* PyTorch */}
          <div className="relative group flex flex-col items-center">
            <div className="text-6xl text-red-500 group-hover:scale-110 transition-transform duration-300 ease-in-out">
              <i className="devicon-pytorch-original"></i>
            </div>
            {/* Tooltip */}
            <span className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 mt-2">
              PyTorch
            </span>
          </div>

        </div>
      </section>
      {/* Experience Timeline */}
  <section className="mt-12 px-4 md:px-0">
  <h2 className="text-3xl font-bold text-center text-gray-200 dark:text-white mb-12">My Experience</h2>
  <div className="relative flex flex-col items-center">
    {/* Vertical Line */}
    <div className="absolute w-1 bg-blue-500 h-full left-1/2 transform -translate-x-1/2"></div>

    {/* Timeline Items */}
    {[
      {
        id: 1,
        title: 'Associate Engineer → Senior Software Engineer',
        company: 'KPIT Technologies',
        location: 'Pune, India',
        duration: '2016 - 2021',
        description: 'Built software solutions for automotive technologies, optimized systems, and delivered key projects across multiple teams.',
        icon: <FaGraduationCap />,
      },
      {
        id: 2,
        title: 'Senior Data Analyst → Data Scientist',
        company: 'Tiger Analytics',
        location: 'Remote, India',
        duration: '2021 - 2023',
        description: 'Worked on advanced analytics projects, built predictive models, and provided data-driven insights for clients.',
        icon: <FaBriefcase />,
      },
      {
        id: 3,
        title: 'Senior Analyst',
        company: 'United Airlines',
        location: 'Remote, India',
        duration: '2023 - Present',
        description: 'Leading data analysis initiatives to optimize operational efficiency and deliver actionable insights across teams.',
        icon: <FaCode />,
      },
    ].map((item, index) => (
      <motion.div
        key={item.id}
        className={`relative flex flex-col md:flex-row items-center mb-16 w-full`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
      >
        {/* Year Display */}
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'text-right pr-4 md:pr-8 order-1' : 'text-left pl-4 md:pl-8 order-2'}`}>
          <p className="text-gray-400 dark:text-gray-500 text-md font-medium">{item.duration}</p>
        </div>

        {/* Icon */}
        <div className="w-12 h-12 bg-white dark:bg-gray-800 border-2 border-blue-500 rounded-full flex items-center justify-center shadow-md absolute md:left-1/2 transform md:-translate-x-1/2 z-10">
          {item.icon}
        </div>

        {/* Floating Card with Arrow */}
        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'text-left pl-8 pr-4 md:pl-8 md:pr-12 order-2' : 'text-right pr-8 pl-4 md:pl-12 md:pr-8 order-1'}`}>
          <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out">
            {/* Card Content */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
            <h4 className="text-sm md:text-md text-gray-600 dark:text-gray-300 font-medium">
              {item.company} — {item.location}
            </h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Horizontal Bar Below Timeline */}
  <div className="w-full mt-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
  </section>
    </div>
  );
};

export default About;