import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiPython, SiJavascript, SiNodedotjs } from 'react-icons/si';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
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

export default function Footer() {
  const socialLinks = [
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaGithub />, url: '#' },
    { icon: <FaLinkedin />, url: '#' }
  ];

  const quickLinks = [
    { text: 'All Courses', url: '#' },
    { text: 'About Us', url: '#' },
    { text: 'Our Team', url: '#' },
    { text: 'Student Projects', url: '#' },
    { text: 'Careers', url: '#' }
  ];

  const popularCourses = [
    { text: 'Web Development Bootcamp', url: '#', icon: <SiReact /> },
    { text: 'Python for Beginners', url: '#', icon: <SiPython /> },
    { text: 'JavaScript Mastery', url: '#', icon: <SiJavascript /> },
    { text: 'Node.js Fundamentals', url: '#', icon: <SiNodedotjs /> },
    { text: 'React Advanced Patterns', url: '#', icon: <SiReact /> }
  ];

  const legalLinks = [
    { text: 'Privacy Policy', url: '#' },
    { text: 'Terms of Service', url: '#' },
    { text: 'Cookie Policy', url: '#' }
  ];

  const centers = [
    {
      title: 'Main Branch',
      address: 'Pehowa Chowk, Karnal Road New, Kaithal, Haryana',
      phone: '+91-98123-11612',
      email: 'info@hartronkaithal.com',
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8096.21540052882!2d76.39495477080348!3d29.804269311411765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911e11e8f818173%3A0x1595f54ee9ec6572!2sHARTRON%20KAITHAL!5e1!3m2!1sen!2sin!4v1750005268337!5m2!1sen!2sin"
    },
    {
      title: 'Second Branch',
      address: 'Above TVS Agency Ambala Road, Kaithal, Haryana',
      phone: '+91-98123-11612',
      email: 'info@hartronkaithal.com',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1711.281864500633!2d76.40973728653523!3d29.810611617077175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911e15adcf65f71%3A0x5d4ae97ebd3834f3!2sDigiberry!5e1!3m2!1sen!2sin!4v1749889686583!5m2!1sen!2sin'
    },
  ];

  const [activeMap, setActiveMap] = React.useState(centers[0].map);

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* About Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">CodeMaster</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Empowering learners with high-quality coding education. Designed for all levels and backgrounds.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -2 }}
                  className="text-xl text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={link.url}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Our Centers */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Our Centers</h3>
            <div className="space-y-6">
              {centers.map((center, index) => (
                <motion.div 
                  key={index} 
                  className={`border-l-4 ${activeMap === center.map ? 'border-indigo-600' : 'border-gray-300'} pl-4 cursor-pointer`}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveMap(center.map)}
                >
                  <h4 className="font-semibold text-indigo-600 dark:text-indigo-400">{center.title}</h4>
                  <p className="flex items-start text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <FaMapMarkerAlt className="mr-2 mt-1 text-indigo-500" />
                    {center.address}
                  </p>
                  <p className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <FaPhone className="mr-2 text-indigo-500" />
                    {center.phone}
                  </p>
                  <p className="flex items-center text-sm text-gray-600 dark:text-gray-300 mt-1">
                    <FaEnvelope className="mr-2 text-indigo-500" />
                    {center.email}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Popular Courses */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-4">
              {popularCourses.map((course, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-indigo-600 dark:text-indigo-400 text-xl">{course.icon}</span>
                  <a
                    href={course.url}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {course.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center mb-6 text-indigo-600 dark:text-indigo-400">Come Visit Us</h3>
          <motion.div 
            className="rounded-xl overflow-hidden border-4 border-indigo-500 shadow-lg"
            whileHover={{ scale: 1.01 }}
          >
            <iframe 
              src={activeMap}
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </motion.div>
          <div className="flex justify-center mt-4 space-x-4">
            {centers.map((center, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveMap(center.map)}
                className={`px-4 py-2 rounded-lg ${activeMap === center.map ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {center.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} CodeMaster. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            {legalLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                whileHover={{ y: -2 }}
                className="text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                {link.text}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}