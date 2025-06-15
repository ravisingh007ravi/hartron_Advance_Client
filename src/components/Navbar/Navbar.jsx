import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkedAlt, FaBlog, FaPhoneAlt, FaHome, } from 'react-icons/fa';
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
    { name: "Log-In", href: '/log-in', css: 'px-4 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 transition' },
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
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dnpn8ljki/image/upload/v1749452665/logo_1_exrbma.png"
                  alt="Academy Logo"
                  className="h-15"
                />
                <h1 className='text-blue-900 font-extrabold text-xl'>HARTRON KAITHAL</h1>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1 pt-10">
              {MENU_DATA.map((item) => (
                <motion.div key={item.id} whileHover={{ scale: 1.05 }} className="relative group ">
                  {item.type === 'dropdown' ? (
                    <DropDownMenu />
                  ) : item.type === 'AllCourseDropDown' ? (
                    <div className='text-md'><AllCourseDropDown /></div>
                  ) : (
                    <Link
                      to={item.link}
                      className={`px-3 py-2 rounded-md text-md font-medium flex items-center ${item.current ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
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
                      Auth.map(({ name, href, css }, index) => (
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

              <div className="lg:hidden">
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
    open: { 
      opacity: 1, 
      height: 'auto', 
      transition: { 
        staggerChildren: 0.07, 
        when: 'beforeChildren' 
      } 
    },
    closed: { 
      opacity: 0, 
      height: 0, 
      transition: { 
        staggerChildren: 0.05, 
        staggerDirection: -1, 
        when: 'afterChildren' 
      } 
    },
  }}
  className="lg:hidden w-full bg-white overflow-hidden border-t border-gray-100 shadow-lg"
>
  <ul className="flex flex-col p-4 space-y-1">
    {MENU_DATA.map((item, key) => (
      <motion.li 
        key={key} 
        variants={{ 
          open: { 
            opacity: 1, 
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 24 }
          }, 
          closed: { 
            opacity: 0, 
            y: -10,
            transition: { duration: 0.2 }
          } 
        }} 
        className="relative"
      >
        {item.type === 'dropdown' ? (
          <DropDownMenu />
        ) : item.type === 'AllCourseDropDown' ? (
          <AllCourseDropDown />
        ) : (
          <Link
            to={item.link}
            className="flex items-center justify-between gap-3 rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-colors hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100"
          >
            <span className="flex items-center gap-3">
              <span className="text-xl text-blue-500">{item.icon}</span>
              {item.label}
            </span>
            {item.type === 'link' && <IoIosArrowForward className="text-gray-400" />}
          </Link>
        )}
      </motion.li>
    ))}

    <motion.div 
      variants={{
        open: { 
          opacity: 1,
          y: 0,
          transition: { delay: 0.2 } 
        },
        closed: { 
          opacity: 0,
          y: 10,
          transition: { duration: 0.15 }
        }
      }}
      className="lg:hidden flex justify-center mt-3 pt-3 border-t border-gray-100"
    >
      <div className="flex items-center gap-3 w-full px-2">
        {Auth.map(({ name, href, css }, index) => (
          <Link 
            to={href} 
            key={index}
            className="flex-1"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`${css} w-full py-2.5 px-4 rounded-lg font-medium text-sm transition-colors duration-200 shadow-sm`}
            >
              {name}
            </motion.button>
          </Link>
        ))}
      </div>
    </motion.div>
  </ul>
</motion.div>
    </header>
  );
}