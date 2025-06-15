import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HartronSkillCenter, HartronAdvanceSkillCenter } from './DataCourse';

export default function ChooseRole() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Hartron Advance Skill Center');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const heroRef = useRef(null);

  const filteredRoles = selectedCategory === 'Hartron Advance Skill Center'
    ? HartronAdvanceSkillCenter
    : selectedDuration === 'All'
      ? HartronSkillCenter
      : HartronSkillCenter.filter(course => course.durationType === selectedDuration);

  const displayedRoles = showAll ? filteredRoles : filteredRoles.slice(0, 3);

  const durationTypes = ['All', ...new Set(HartronSkillCenter.map(course => course.durationType))];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const tabContent = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="px-4 sm:px-6 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          ref={heroRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Ready to <span className="text-blue-600">reimagine</span> your career?
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get the skills and real-world experience employers want with our Career Accelerators.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex justify-center gap-4 sm:gap-20 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {['Hartron Skill Center', 'Hartron Advance Skill Center'].map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 text-lg font-medium rounded-full transition-colors ${
                selectedCategory === cat 
                  ? 'text-white bg-blue-600 shadow-lg shadow-blue-500/20' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
                if (cat === 'Hartron Advance Skill Center') {
                  setSelectedDuration('All');
                }
              }}
            >
              {cat} Course
              {selectedCategory === cat && (
                <motion.span 
                  layoutId="tabUnderline"
                  className="absolute inset-0 bg-blue-600 rounded-full z-[-1]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Duration Filter */}
        {selectedCategory === 'Hartron Skill Center' && (
          <motion.div 
            className="flex justify-center gap-4 mb-8 flex-wrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {durationTypes.map((duration) => (
              <motion.button
                key={duration}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  selectedDuration === duration
                    ? 'text-white bg-blue-600 shadow-md'
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => {
                  setSelectedDuration(duration);
                  setShowAll(false);
                }}
              >
                {duration}
              </motion.button>
            ))}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedDuration}`}
            variants={tabContent}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12"
          >
            {/* Heading and View All */}
            <div className="flex justify-between items-center mb-8">
              <motion.h2 
                className="text-2xl md:text-3xl font-semibold text-gray-800"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {selectedCategory === 'Hartron Skill Center' 
                  ? selectedDuration === 'All' 
                    ? 'All Courses' 
                    : `${selectedDuration} Courses`
                  : 'Explore all roles'}
              </motion.h2>
              {!showAll && filteredRoles.length > 3 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAll(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  View all courses
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              )}
            </div>

            {/* Role Cards */}
            {filteredRoles.length > 0 ? (
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-8 lg:grid-cols-3 md:grid-cols-2"
              >
                {displayedRoles.map((role, idx) => (
                  <motion.div
                    key={idx}
                    variants={item}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full relative"
                  >
                    {hoveredCard === idx && (
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                    <div className="relative overflow-hidden h-48">
                      <motion.img 
                        className="w-full h-full object-cover"
                        src={role.img} 
                        alt={role.title}
                        initial={{ scale: 1 }}
                        animate={{ 
                          scale: hoveredCard === idx ? 1.05 : 1,
                          transition: { duration: 0.5 }
                        }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
                        initial={{ opacity: 0.4 }}
                        animate={{ 
                          opacity: hoveredCard === idx ? 0.6 : 0.4,
                          transition: { duration: 0.3 }
                        }}
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 relative inline-block">
                        <span>{role.title}</span>
                        <motion.span 
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                          initial={{ width: 0 }}
                          animate={{ width: hoveredCard === idx ? '100%' : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </h3>

                      <p className="text-gray-600 mb-4">{role.description}</p>

                      {role.likes && (
                        <motion.div 
                          className="mb-4 bg-gray-50 p-3 rounded-lg"
                          whileHover={{ scale: 1.02 }}
                        >
                          <p className="font-medium text-gray-800 mb-1">If you like:</p>
                          <p className="text-gray-600 text-sm">{role.likes}</p>
                        </motion.div>
                      )}

                      {role.skills && (
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-800 mb-2">Key Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill, i) => (
                              <motion.span 
                                key={i} 
                                className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                                whileHover={{ 
                                  scale: 1.1,
                                  backgroundColor: "#3b82f6",
                                  color: "#ffffff"
                                }}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-auto pt-4">
                        <div className="flex flex-col gap-1 text-sm text-gray-500 mb-2">
                          {role.duration && (
                            <p><strong>Duration:</strong> {role.duration}</p>
                          )}
                          {role.durationType && (
                            <p><strong>Course Type:</strong> {role.durationType}</p>
                          )}
                          {role.fee && (
                            <p><strong>Fee:</strong> {role.fee}</p>
                          )}
                          {role.eligibility && (
                            <p><strong>Eligibility:</strong> {role.eligibility}</p>
                          )}
                        </div>
                        {role.certification && (
                          <p className="text-sm text-gray-500"><strong>Certification:</strong> {role.certification}</p>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5), 0 2px 4px -1px rgba(59, 130, 246, 0.06)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-gray-500 text-lg">No courses found for the selected duration.</p>
              </motion.div>
            )}

            {/* Show Less Button */}
            {showAll && filteredRoles.length > 3 && (
              <motion.div 
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowAll(false);
                    heroRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                >
                  Show Less
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
