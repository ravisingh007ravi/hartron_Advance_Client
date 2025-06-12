import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBookOpen,
  FaMapMarkedAlt,
  FaBlog,
  FaPhoneAlt,
  FaHome,
} from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';
import { MdClose } from 'react-icons/md';
import DropdownMenuProfile from './DropdownMenuProfile';
import DropDownMenu from './DropDownMenu';
import AllCourseDropDown from './AllCourseDropDown';

export default function Navbar() {
  const [bar, setBar] = useState(false);
  const [login, setLogIn] = useState(false);

  const MENU_DATA = [
    { id: 1, label: 'Home', link: '/', icon: <FaHome className="inline mr-1" /> },
    { id: 2, type: 'dropdown' },
    { id: 3, type: 'AllCourseDropDown' },
    { id: 4, label: 'Branches', link: '/branches', icon: <FaMapMarkedAlt className="inline mr-1" /> },
    { id: 5, label: 'Examination', link: '/examination', icon: <FaBlog className="inline mr-1" /> },
    { id: 6, label: 'Contact Us', link: '/contact', icon: <FaPhoneAlt className="inline mr-1" /> },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="text-[#1877F2] hover:text-[#145DBF]" />, url: '#' },
    { icon: <FaInstagram className="text-[#E1306C] hover:text-[#C13584]" />, url: '#' },
    { icon: <FaYoutube className="text-[#FF0000] hover:text-[#CC0000]" />, url: '#' },
  ];

  const Auth = [
    // {name:"Sign up",href:'/sign-up',css:'px-4 py-1.5 text-sm font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition'},
    {name:"Log-In",href:'/log-in',css:'px-4 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 transition'},
  ]

  return (
    <header className="w-full sticky top-0 z-50">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-indigo-800 to-blue-600 text-white text-sm text-center py-2 px-4"
      >
        <div className="container mx-auto py-2 flex justify-center items-center">
          <span className="mr-2">🎓</span>
          <p>
            Learning to code? Check out our{' '}
            <a href="#" className="text-yellow-300 underline font-medium hover:text-yellow-200 transition">
              Coding Fundamentals
            </a>{' '}course for beginners!
          </p>
        </div>
      </motion.div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dnpn8ljki/image/upload/v1749452665/logo_1_exrbma.png"
                  alt="Academy Logo"
                  className="h-15"
                />
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {MENU_DATA.map((item) => (
                <motion.div key={item.id} whileHover={{ scale: 1.05 }} className="relative group">
                  {item.type === 'dropdown' ? (
                    <DropDownMenu />
                  ) : item.type === 'AllCourseDropDown' ? (
                    <AllCourseDropDown />
                  ) : (
                    <Link
                      to={item.link}
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                        item.current ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.icon && <span className="mr-1">{item.icon}</span>}
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2, color: '#3b82f6' }}
                    className="text-gray-600 hover:text-blue-500 text-xl"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <div>
                {login ? (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <DropdownMenuProfile />
                  </motion.div>
                ) : (
                  <div className="hidden lg:flex items-center gap-5">
                    {
                      Auth.map(({name,href,css},index)=>(
                        <Link to={href}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={css}>
                        {name}
                      </motion.button>
                    </Link>
                      ))
                    }
                  </div>
                )}
              </div>

              <div className="md:hidden">
                {bar ? <MdClose size={25} onClick={() => setBar(!bar)} /> : <FaBarsStaggered size={25} onClick={() => setBar(!bar)} />}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={bar ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.1, when: 'beforeChildren' } },
          closed: { opacity: 0, height: 0, transition: { staggerChildren: 0.05, staggerDirection: -1, when: 'afterChildren' } },
        }}
        className="md:hidden w-full bg-white overflow-hidden border-t border-gray-200 shadow-inner"
      >
        <ul className="flex flex-col text-center space-y-2 p-4">
          {MENU_DATA.map((item, key) => (
            <motion.li key={key} variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: -20 } }} className="relative">
              {item.type === 'dropdown' ? (
                <DropDownMenu />
              ) : item.type === 'AllCourseDropDown' ? (
                <AllCourseDropDown />
              ) : (
                <Link
                  to={item.link}
                  className="flex items-center justify-center gap-2 rounded-md text-lg font-medium px-3 py-2 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                >
                  <span className="text-xl text-blue-500">{item.icon}</span>
                  {item.label}
                </Link>
              )}
            </motion.li>
          ))}

          <div className="lg:hidden flex justify-center mt-4">
            <div className="flex items-center gap-4">
               {
                      Auth.map(({name,href,css},index)=>(
                        <Link to={href}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={css}>
                        {name}
                      </motion.button>
                    </Link>
                      ))
                    }
            </div>
          </div>
        </ul>
      </motion.div>
    </header>
  );
}