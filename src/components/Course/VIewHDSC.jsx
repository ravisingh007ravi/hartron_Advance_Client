import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaClock, FaChartLine, FaBriefcase, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';

export default function VIewHDSC() {
  const { courseId } = useParams();
  let formattedCourseId = courseId.replace(/_/g, ' ');

  const data = {
    img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749896041/AI_-_Database_Administrator_pqxej8.jpg',
    title: "AI - Database Administrator",
    description: "A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.",
    likes: "Analyzing data to find insights, creating reports and visualizations, working with spreadsheets and databases",
    salary: "$289,008",
    jobs: "23,498",
    credentials: [
      "IBM Data Analyst",
      "DeepLearning AI Data Analytics",
      "+ 5 more"
    ],
    eligibility:
      "● Completed 2nd year of an undergraduate (UG) program (3 or 4 years in Engineering/Science), OR\n" +
      "● Completed 2nd year of a diploma after 12th grade, OR\n" +
      "● Possess an NSQF Level 4 qualification with 3 years of relevant work experience",
    Duration_hours: "450",
    NSQF: "5.0",
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">

        {/* Course Header */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-8 mb-12"
        >
          <div className="md:w-1/3">
            <motion.img 
              src={data.img} 
              alt={data.title}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>
          
          <div className="md:w-2/3">
            <motion.h1 
              className="text-3xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              {data.title}
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              variants={itemVariants}
            >
              {data.description}
            </motion.p>
            
            <motion.div 
              className="flex items-center text-red-500 mb-6"
              variants={itemVariants}
            >
              <FaHeart className="mr-2" />
              <span className="text-gray-700">{data.likes}</span>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
              variants={itemVariants}
            >
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaChartLine className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Avg. Salary</p>
                  <p className="font-bold text-gray-900">{data.salary}</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaBriefcase className="text-green-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Job Openings</p>
                  <p className="font-bold text-gray-900">{data.jobs}</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <FaClock className="text-purple-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-bold text-gray-900">{data.Duration_hours} hours</p>
                </div>
              </div>
            </motion.div>
            
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              Enroll Now <FaArrowRight className="ml-2" />
            </motion.button>
          </div>
        </motion.div>

        {/* Course Details */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
        >
          {/* Credentials */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FiAward className="text-yellow-500 mr-2" />
              Credentials
            </h2>
            <ul className="space-y-3">
              {data.credentials.map((credential, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Eligibility */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold mb-4">Eligibility</h2>
            <div className="whitespace-pre-line text-gray-700">
              {data.eligibility}
            </div>
          </motion.div>
          
          {/* NSQF Level */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm"
            variants={itemVariants}
          >
            <h2 className="text-xl font-semibold mb-4">NSQF Level</h2>
            <div className="flex items-center justify-center">
              <div className="bg-indigo-100 text-indigo-800 text-4xl font-bold rounded-full w-24 h-24 flex items-center justify-center">
                {data.NSQF}
              </div>
            </div>
            <p className="text-center mt-4 text-gray-600">
              National Skill Qualification Framework
            </p>
          </motion.div>
        </motion.div>

        {/* Curriculum Section */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-sm mb-12"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold mb-6">Curriculum Overview</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((module) => (
              <motion.div 
                key={module}
                className="border-b border-gray-200 pb-4"
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Module {module}: Core Concepts</h3>
                  <span className="text-sm text-gray-500">10 lessons</span>
                </div>
                <p className="text-gray-600 mt-1 text-sm">
                  Covers the fundamental concepts and practical applications...
                </p>
              </motion.div>
            ))}
          </div>
          <button className="mt-6 text-blue-600 font-medium flex items-center">
            View full curriculum <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}