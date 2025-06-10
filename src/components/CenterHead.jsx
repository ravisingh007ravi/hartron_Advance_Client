import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope, FaQuoteLeft, FaChevronRight } from 'react-icons/fa';

export default function ProfessionalProfile() {
  const profileData = {
    imgURL: 'https://hartronkaithal.in/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-30-at-10.07.26-AM.jpeg',
    name: 'Balvinder Dhull',
    title: 'Centre Head',
    headline: 'At Hartron, we empower individuals with IT excellence, fostering innovation and growth for a digitally advanced and self-reliant future.',
    bio: 'With over 15 years of experience in IT education and center management, I am passionate about bridging the digital divide and creating opportunities through technology.',
    stats: [
      { value: '10K+', label: 'Students Trained' },
      { value: '15+', label: 'Years Experience' },
      { value: '100+', label: 'Courses Offered' }
    ],
    testimonials: [
      {
        quote: "Under Balvinder's leadership, our center has become a benchmark for IT education excellence in the region.",
        author: "Rajesh Kumar, Senior Instructor"
      },
      {
        quote: "His vision for digital empowerment has transformed countless careers in our community.",
        author: "Priya Sharma, Alumni"
      }
    ]
  };

  // Animation variants
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
    show: { opacity: 1, y: 0 }
  };

  const card = {
    offscreen: {
      y: 100,
      opacity: 0,
      rotateX: -15
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Profile Card */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <motion.div
            variants={card}
            className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Profile Image */}
            <div className="lg:w-2/5 relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-full w-full"
              >
                <img
                  src={profileData.imgURL}
                  alt={profileData.name}
                  className="w-full h-full object-cover min-h-[400px]"
                  style={{ transform: 'translateZ(30px)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </div>

            {/* Profile Content */}
            <div className="lg:w-3/5 p-8 md:p-12">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-6"
              >
                <motion.div variants={item}>
                  <span className="inline-block px-4 py-1 text-sm font-semibold tracking-wide text-indigo-700 bg-indigo-100 rounded-full uppercase">
                    {profileData.title}
                  </span>
                </motion.div>

                <motion.h1 
                  variants={item}
                  className="text-4xl md:text-5xl font-bold text-gray-900"
                >
                  {profileData.name}
                </motion.h1>

                <motion.p 
                  variants={item}
                  className="text-xl text-gray-600 leading-relaxed"
                >
                  {profileData.headline}
                </motion.p>

                <motion.p 
                  variants={item}
                  className="text-gray-500"
                >
                  {profileData.bio}
                </motion.p>

                {/* Stats */}
                <motion.div 
                  variants={item}
                  className="grid grid-cols-3 gap-4 pt-4"
                >
                  {profileData.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  variants={item}
                  className="flex space-x-4 pt-6"
                >
                  <motion.a
                    whileHover={{ y: -3, scale: 1.1 }}
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, scale: 1.1 }}
                    href="#"
                    className="text-blue-400 hover:text-blue-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, scale: 1.1 }}
                    href="#"
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label="Email"
                  >
                    <FaEnvelope className="w-6 h-6" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {profileData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <FaQuoteLeft className="text-gray-300 text-2xl mb-4" />
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <p className="font-semibold text-gray-800">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Skills?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our programs and be part of the digital revolution under expert guidance.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center mx-auto"
            >
              Explore Programs <FaChevronRight className="ml-2" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}