import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    logo: 'https://hartronkaithal.com/backend/web/images/logo-login.jpg',
    title: "Hartron Skill Centre",
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
    logo: 'https://hartronkaithal.in/wp-content/uploads/2024/12/1-7.png',
    title: "Hartron Advance Skill Centre",
    description: "Advanced IT training with certifications in cutting-edge technologies like AI, Web Development, and Cloud computing for career advancement.",
    image: "https://hartronkaithal.in/wp-content/uploads/2024/12/I-1.png",
    highlights: [
  "Advanced technology courses",
  "Professional certifications",
  "Expert instructors",
  "Career development",
  "Hands-on project-based learning"
] 
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const highlightVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1 + 0.4, duration: 0.3 }
  })
};

export default function Course() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 py-16">
      {/* <h2 className="text-center text-4xl font-bold mb-14 text-blue-700">Our Courses</h2> */}

      <div className="grid md:grid-cols-2 gap-12">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="flex justify-center py-5 bg-white">
              <img
                src={course.logo}
                alt={course.title}
                className="h-14 object-contain"
              />
            </div>

            <div className="md:flex">
              <motion.div
                className="md:w-1/2 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={course.image} 
                  alt={course.title}
                  className="rounded-xl w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>

              <div className="p-6 md:w-1/2 flex flex-col justify-between">
                {/* <motion.h3
                  className="text-2xl font-semibold text-gray-800 mb-3"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {course.title}
                </motion.h3> */}

                <motion.p
                  className="text-gray-600 mb-5 text-sm leading-relaxed"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {course.description}
                </motion.p>

                <motion.div initial="hidden" animate="visible">
                  <h4 className="font-semibold text-gray-700 mb-2">Course Highlights:</h4>
                  <ul className="space-y-2 text-sm">
                    {course.highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start text-gray-600"
                        variants={highlightVariants}
                        custom={i}
                      >
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <button className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm">
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
