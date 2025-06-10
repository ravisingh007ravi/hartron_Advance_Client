import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const courses = {
  hartron: {
    title: "Hartron Skill Center",
    description: "This course focuses on practical IT and vocational training with industry-relevant skills to prepare students for immediate employment opportunities.",
    image: "https://hartronkaithal.in/wp-content/uploads/2024/12/I-27.png",
    highlights: [
      "Practical hands-on training",
      "Industry-aligned curriculum",
      "Certification programs",
      "Placement assistance"
    ]
  },
  advance: {
    title: "Hartron Advance Skill Center",
    description: "Advanced IT training with certifications in cutting-edge technologies like AI, Web Development, and Cloud computing for career advancement.",
    image: "https://hartronkaithal.in/wp-content/uploads/2024/12/I-1.png",
    highlights: [
      "Advanced technology courses",
      "Professional certifications",
      "Expert instructors",
      "Career development"
    ]
  }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    rotateX: -10
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    rotateX: 10,
    transition: { duration: 0.4 }
  }
};

const highlightVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.4,
      duration: 0.3
    }
  })
};

export default function Course() {
  const [selected, setSelected] = useState('hartron');
  const selectedCourse = courses[selected];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(courses).map((key) => (
          <motion.button
            key={key}
            onClick={() => setSelected(key)}
            className={`px-6 py-3 rounded-full font-semibold border-2 text-sm sm:text-base ${
              selected === key 
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                : 'bg-white text-gray-800 border-blue-600 hover:bg-blue-50'
            }`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            {courses[key].title}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="md:flex">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={selectedCourse.image}
                alt={selectedCourse.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div className="p-8 md:w-1/2">
              <motion.h2 
                className="text-3xl font-bold mb-4 text-gray-800"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {selectedCourse.title}
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {selectedCourse.description}
              </motion.p>
              
              <motion.div 
                className="mb-6"
                initial="hidden"
                animate="visible"
              >
                <h3 className="font-semibold text-lg text-gray-700 mb-3">Course Highlights:</h3>
                <ul className="space-y-2">
                  {selectedCourse.highlights.map((item, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start text-gray-600"
                      variants={highlightVariants}
                      custom={i}
                    >
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
                  Enroll Now
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}