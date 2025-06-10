import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: "Hartron Skill centre",
    description: "This course focuses on practical IT and vocational training with industry-relevant skills to prepare students for immediate employment opportunities.",
    image: "https://hartronkaithal.in/wp-content/uploads/2024/12/I-27.png",
    highlights: [
      "Practical hands-on training",
      "Industry-aligned curriculum",
      "Certification programs",
      "Placement assistance"
    ]
  },
  {
    title: "Hartron Advance Skill centre",
    description: "Advanced IT training with certifications in cutting-edge technologies like AI, Web Development, and Cloud computing for career advancement.",
    image: "https://hartronkaithal.in/wp-content/uploads/2024/12/I-1.png",
    highlights: [
      "Advanced technology courses",
      "Professional certifications",
      "Expert instructors",
      "Career development"
    ]
  }
];

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
  return (
    <div className=" mx-auto px-10 py-16">
      <h2 className="text-center text-4xl font-bold mb-12 text-blue-700">Our Courses</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
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
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="p-8 md:w-1/2">
                <motion.h3
                  className="text-2xl font-bold mb-4 text-gray-800"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {course.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 mb-6 leading-relaxed"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {course.description}
                </motion.p>

                <motion.div initial="hidden" animate="visible">
                  <h4 className="font-semibold text-lg text-gray-700 mb-3">Course Highlights:</h4>
                  <ul className="space-y-2">
                    {course.highlights.map((item, i) => (
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
                  className="mt-6"
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
        ))}
      </div>
    </div>
  );
}
