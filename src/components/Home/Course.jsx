import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const courses = {
  hartron: {
    title: "Hartron Skill Center",
    description: "This course focuses on practical IT and vocational training with industry-relevant skills.",
    image: "https://hartronkaithal.in/wp-content/uploads/2024/12/I-27.png"
  },
  advance: {
    title: "Hartron Advance Skill Center",
    description: "Advanced IT training with certifications in AI, Web Development, and Cloud technologies.",
    image: "https://hartronkaithal.in/wp-content/uploads/2024/12/I-1.png"
  }
};

export default function Course() {
  const [selected, setSelected] = useState('hartron');

  const selectedCourse = courses[selected];

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSelected('hartron')}
          className={`px-4 py-2 rounded-md font-semibold border ${
            selected === 'hartron' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border-blue-600'
          }`}
        >
          Hartron Skill Center
        </button>
        <button
          onClick={() => setSelected('advance')}
          className={`px-4 py-2 rounded-md font-semibold border ${
            selected === 'advance' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border-blue-600'
          }`}
        >
          Hartron Advance Skill Center
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="bg-white shadow-md rounded-lg p-6 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>
          <img
            src={selectedCourse.image}
            alt={selectedCourse.title}
            className="w-full h-auto rounded-md mb-4"
          />
          <p className="text-gray-700">{selectedCourse.description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
