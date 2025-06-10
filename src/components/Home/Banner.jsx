import React from 'react';
import { motion } from 'framer-motion';
import BGImg from '../../assets/BannerBackgroundImage.png';
import { Link } from 'react-router-dom';

export default function Banner() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full md:h-[450px] h-[750px]"
      >
        <img className="w-full h-full object-cover object-center" src={BGImg} alt="bannerBG"/>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/10 ">
        <div className="max-w-7xl w-full px-6 md:px-1 grid md:grid-cols-2 items-center gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Get <motion.span 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5
                }}
                className="bg-yellow-300 px-1 inline-block"
              >really</motion.span> good at programming
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-lg text-gray-700"
            >
              Develop fluency in <strong>76 programming languages</strong> with our unique blend of learning, practice and mentoring. Exercism is fun, effective and <strong>100% free, forever</strong>.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
                           <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition shadow-lg"
              >
                <Link to='/sign-up'> 
                Sign up for free</Link>
              </motion.button>
              

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition shadow-md"
              >
                Explore Course
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <motion.img
              src="https://assets.exercism.org/assets/graphics/landing-page-top-74da2134b88efcf34b05e804987fdfb832771716.svg"
              alt="Programming illustration"
              className="w-full max-w-md"
              whileHover={{ rotate: 2, scale: 1.02 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}