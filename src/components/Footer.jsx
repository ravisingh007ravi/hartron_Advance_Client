import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiPython, SiJavascript, SiNodedotjs } from 'react-icons/si';

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
      title: 'Kaithal Hartron Branch',
      address: 'Reboom Chowk, Kamal Road New, Kaithal, Haryana',
      phone: '+91-98123-11612',
      email: 'info@hartronkaithal.com'
    },
    {
      title: 'Second Branch',
      address: 'Pehowa Chowk, Karnal Road New, Kaithal, Haryana',
      phone: '+91-98123-11612',
      email: 'info@hartronkaithal.com'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">CodeMaster</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Empowering learners with high-quality coding education. Designed for all levels and backgrounds.
            </p>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="text-xl text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Centers */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Centers</h3>
            <div className="space-y-6">
              {centers.map((center, index) => (
                <div key={index} className="border-l-4 border-indigo-600 pl-4">
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
                </div>
              ))}
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-4">
              {popularCourses.map((course, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="text-indigo-600 dark:text-indigo-400 text-xl">{course.icon}</span>
                  <a
                    href={course.url}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                  >
                    {course.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} CodeMaster. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-sm text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
