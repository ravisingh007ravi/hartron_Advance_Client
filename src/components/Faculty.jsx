import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUserTie } from 'react-icons/fa';

export default function Faculty() {
  const FacultyDATA = [
    { name: 'Ms. Savreen', tech: 'Software Faculty', pos: 'Professional', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Ms.-Savreen.png' },
    { name: 'Ms. Sonia', tech: 'Software Faculty', pos: 'Professional', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Ms.-Sonia.png' },
    { name: 'Ms. Rupali', tech: 'Software Faculty', pos: 'Professional', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Ms.-Rupali.png' },
    { name: 'Ms. Muskan', tech: 'Software Faculty', pos: 'Professional', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Ms.-Muskan.png' },
    { name: 'Ms. Mafi', tech: 'Software Faculty', pos: 'Professional', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Ms.-Mafi.png' },
    { name: 'Mr. Ravi', tech: 'Software Faculty', pos: 'Management', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Mr.-Ravi.png' },
    { name: 'Ms. Konika', tech: 'Software Faculty', pos: 'Management', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Ms.-Konika.png' },
    { name: 'Ms. Komal', tech: 'Software Faculty', pos: 'Management', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Ms.-Komal.png' },
    { name: 'Ms. Himani', tech: 'Software Faculty', pos: 'Management', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Ms.-Himani.png' },
    { name: 'Ms. Aarti', tech: 'Software Faculty', pos: 'Management', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Ms.-Aarti.png' },
    { name: 'Mr. Vishal', tech: 'Software Faculty', pos: 'Management', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Mr.-Vishal.png' },
    { name: 'Mr. Satish', tech: 'Software Faculty', pos: 'Management', img: 'https://hartronkaithal.in/wp-content/uploads/2024/12/Mr.-Satish.png' },
  ];

  const [filter, setFilter] = useState('all'); // 'all' or 'software'

  const filteredData = filter === 'all' 
    ? FacultyDATA 
    : FacultyDATA.filter(f => f.tech === 'Software Faculty');

  // Group by position after filtering
  const facultyByPosition = filteredData.reduce((acc, faculty) => {
    if (!acc[faculty.pos]) acc[faculty.pos] = [];
    acc[faculty.pos].push(faculty);
    return acc;
  }, {});

  const positionIcons = {
    Professional: <FaLaptopCode className="text-indigo-500" />,
    Management: <FaUserTie className="text-blue-500" />
  };

  const positionColors = {
    Professional: 'bg-indigo-100 text-indigo-800',
    Management: 'bg-blue-100 text-blue-800'
  };

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6
      }
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Expert Faculty
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of dedicated professionals committed to your IT education success.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => setFilter('software')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'software' 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Software Faculty
            </button>
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition ${
                filter === 'all' 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Faculty
            </button>
          </div>
        </motion.div>

        {/* Faculty Sections */}
        {Object.entries(facultyByPosition).map(([position, facultyList]) => (
          <div key={position} className="mb-20">
            <div className="flex items-center mb-8">
              <div className={`p-3 rounded-lg ${positionColors[position]} mr-4`}>
                {positionIcons[position]}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{position} Team</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {facultyList.map((faculty, index) => (
                <motion.div
                  key={faculty.name}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative md:h-90"> 
                    <img
                      src={faculty.img}
                      alt={faculty.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900">{faculty.name}</h4>
                    <p className="text-gray-600 mt-1">{faculty.tech}</p>
                    <span className={`inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full ${positionColors[position]}`}>
                      {faculty.pos}
                    </span>
                    <div className="mt-4 flex space-x-4">
                      <button className="text-sm font-medium text-indigo-600 hover:text-indigo-800">
                        View Profile
                      </button>
                      <button className="text-sm font-medium text-gray-600 hover:text-gray-800">
                        Contact
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mt-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in Joining Our Faculty?</h3>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              We're always looking for passionate educators to join our team.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Apply Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}