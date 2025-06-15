import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaUniversity, FaChalkboardTeacher, FaNetworkWired, FaLaptopCode } from 'react-icons/fa';
import {
  MdOutlineComputer, MdSecurity, MdCloud, MdDesignServices, MdAccountBalance, MdWeb, MdCode,
  MdPhoneAndroid, MdEmail, MdAttachMoney, MdStorage
} from 'react-icons/md';
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineRobot } from 'react-icons/ai';
import { BsDatabaseGear, BsFileEarmarkSpreadsheet } from 'react-icons/bs';
import { TbCloudDataConnection } from "react-icons/tb";
import { SiAutodesk } from 'react-icons/si';

const courseIcons = {
  // Hartron Skill Centre
  "COMPUTER HARDWARE AND NETWORKING ASSOCIATE": <FaNetworkWired className="mr-2 text-indigo-500" />,
  "COURSE IN COMPUTER APPLICATION": <BsFileEarmarkSpreadsheet className="mr-2 text-indigo-500" />,
  "COURSE IN DIGITAL ACCOUNTING": <MdAccountBalance className="mr-2 text-indigo-500" />,
  "COURSE IN DESIGNING AND PUBLISHING": <MdDesignServices className="mr-2 text-indigo-500" />,
  "COURSE IN WEB TECHNOLOGY": <MdWeb className="mr-2 text-indigo-500" />,
  "COURSE IN SOFTWARE DEVELOPMENT": <MdCode className="mr-2 text-indigo-500" />,
  "ADVANCED COURSE IN COMPUTER APPLICATION": <FaLaptopCode className="mr-2 text-indigo-500" />,
  "DIGITAL MARKETING ASSISTANT": <MdEmail className="mr-2 text-indigo-500" />,
  "SOFTWARE OR APPLICATION TESTING ASSISTANT": <MdCode className="mr-2 text-indigo-500" />,
  "ASSISTANT PHP DEVELOPER": <MdWeb className="mr-2 text-indigo-500" />,
  "HARDWARE PERIPHERAL AND INSTALLATION ASSISTANT": <FaNetworkWired className="mr-2 text-indigo-500" />,
  "APPLICATION DEVELOPMENT - ANDROID": <MdPhoneAndroid className="mr-2 text-indigo-500" />,
  "COURSE IN IT FOUNDATION AND TOOLS": <MdOutlineComputer className="mr-2 text-indigo-500" />,
  "CERTIFICATE COURSE IN COMPUTER BASICS & ACCOUNTING": <MdAccountBalance className="mr-2 text-indigo-500" />,
  "CERTIFICATE COURSE IN WEB DESIGNING AND MULTIMEDIA": <MdDesignServices className="mr-2 text-indigo-500" />,
  "C LANGUAGE": <MdCode className="mr-2 text-indigo-500" />,
  "C PLUS PLUS WITH OOPS": <MdCode className="mr-2 text-indigo-500" />,
  "PHP WITH MYSQL": <MdStorage className="mr-2 text-indigo-500" />,
  "CORE JAVA": <MdCode className="mr-2 text-indigo-500" />,
  "ADVANCE JAVA": <MdCode className="mr-2 text-indigo-500" />,
  "FINANCIAL ACCOUNTING": <MdAttachMoney className="mr-2 text-indigo-500" />,
  "AUTOCAD": <SiAutodesk className="mr-2 text-indigo-500" />,
  "FUNDAMENTALS OF CYBER SECURITY": <MdSecurity className="mr-2 text-indigo-500" />,
  "PROGRAMMING WITH PYTHON": <MdCode className="mr-2 text-indigo-500" />,
  "FUNDAMENTALS OF COMPUTER": <MdOutlineComputer className="mr-2 text-indigo-500" />,

  // Hartron Advanced Skill Centre
  "AI - Database Administrator": <BsDatabaseGear className="mr-2 text-indigo-500" />,
  "AI Data Scientist": <AiOutlineRobot className="mr-2 text-indigo-500" />,
  "Artificial Intelligence Application Developer": <AiOutlineRobot className="mr-2 text-indigo-500" />,
  "Artificial Intelligence Associate": <AiOutlineRobot className="mr-2 text-indigo-500" />,
  "Cyber Secured Web Development Associate": <MdSecurity className="mr-2 text-indigo-500" />,
  "Cyber Security and Social Media Analyst": <MdSecurity className="mr-2 text-indigo-500" />,
  "Cyber Security Associate": <MdSecurity className="mr-2 text-indigo-500" />,
  "Data Analysis Associate": <BsDatabaseGear className="mr-2 text-indigo-500" />,
  "Internet of Things (IoT) Associate": <TbCloudDataConnection className="mr-2 text-indigo-500" />,
  "IoT - Software Analyst": <TbCloudDataConnection className="mr-2 text-indigo-500" />,
  "Junior Cloud Computing Associate": <MdCloud className="mr-2 text-indigo-500" />,
  "Junior Cyber Security Associate": <MdSecurity className="mr-2 text-indigo-500" />,
  "Junior Data Analyst": <BsDatabaseGear className="mr-2 text-indigo-500" />,
};

export default function AllCourseDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCenter, setActiveCenter] = useState(null);
  const [activeDuration, setActiveDuration] = useState(null);

  const AllCourse = [
    {
      name: 'Hartron Advanced Skill centre',
      icon: <FaChalkboardTeacher className="mr-2 text-green-600" />,
      link: '/advanced-courses',
      courses: [
        'AI - Database Administrator',
        'AI Data Scientist',
        'Artificial Intelligence Application Developer',
        'Artificial Intelligence Associate',
        'Cyber Secured Web Development Associate',
        'Cyber Security and Social Media Analyst',
        'Cyber Security Associate',
        'Data Analysis Associate',
        'Internet of Things (IoT) Associate',
        'IoT - Software Analyst',
        'Junior Cloud Computing Associate',
        'Junior Cyber Security Associate',
        'Junior Data Analyst'
      ]
    },
    {
      name: 'Hartron Skill centre',
      icon: <FaUniversity className="mr-2 text-blue-600" />,
      durations: [
        {
          name: 'Long Term Course',
          icon: <MdOutlineComputer className="mr-2 text-indigo-500" />,
          courses: [
            "COMPUTER HARDWARE AND NETWORKING ASSOCIATE",
            "COURSE IN COMPUTER APPLICATION",
            "COURSE IN DIGITAL ACCOUNTING",
            "COURSE IN DESIGNING AND PUBLISHING",
            "COURSE IN WEB TECHNOLOGY",
            "COURSE IN SOFTWARE DEVELOPMENT",
            "ADVANCED COURSE IN COMPUTER APPLICATION"
          ],
        },
        {
          name: 'Medium Term Course',
          icon: <MdOutlineComputer className="mr-2 text-indigo-500" />,
          courses: [
            "DIGITAL MARKETING ASSISTANT",
            "SOFTWARE OR APPLICATION TESTING ASSISTANT",
            "ASSISTANT PHP DEVELOPER",
            "HARDWARE PERIPHERAL AND INSTALLATION ASSISTANT",
            "APPLICATION DEVELOPMENT - ANDROID",
            "COURSE IN IT FOUNDATION AND TOOLS",
            "CERTIFICATE COURSE IN COMPUTER BASICS & ACCOUNTING",
            "CERTIFICATE COURSE IN WEB DESIGNING AND MULTIMEDIA"
          ],
        },
        {
          name: 'Short Term Course',
          icon: <MdOutlineComputer className="mr-2 text-indigo-500" />,
          courses: [
            "C LANGUAGE",
            "C PLUS PLUS WITH OOPS",
            "PHP WITH MYSQL",
            "CORE JAVA",
            "ADVANCE JAVA",
            "FINANCIAL ACCOUNTING",
            "AUTOCAD",
            "FUNDAMENTALS OF CYBER SECURITY",
            "PROGRAMMING WITH PYTHON",
            "FUNDAMENTALS OF COMPUTER"
          ],
        }
      ]
    },
  ];

  const renderCourses = (courses) => {
    return courses.map((courseName) => (
      <Link
        to={`/hasc/${courseName.toLowerCase().replace(/\s+/g, '-')}`}
        key={courseName}
        className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white flex items-center"
      >
        {courseIcons[courseName] || <MdOutlineComputer className="mr-2 text-indigo-500" />}
        {courseName}
      </Link>
    ));
  };

  return (
    <div>
      {/* Desktop Dropdown */}
      <div
        className="hidden lg:inline-block relative text-left"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          setIsOpen(false);
          setActiveCenter(null);
          setActiveDuration(null);
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center items-center px-4 py-2 rounded-t-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          <FaBookOpen className="mr-2" />
          <span className='text-md'>Courses</span>
          {isOpen ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
        </button>

        {isOpen && (
          <div className="absolute left-0 w-80 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            {AllCourse.map((center) => (
              <div
                key={center.name}
                onMouseEnter={() => {
                  setActiveCenter(center.name);
                  setActiveDuration(null);
                }}
                className="group relative"
              >
                {center.link ? (
                  <div className="px-4  py-3  cursor-pointer flex justify-between items-center text-gray-700 hover:bg-blue-500 hover:text-white">
                    <span className="flex items-center">{center.icon}{center.name}</span>
                    <IoIosArrowForward />
                  </div>
                ) : (
                  <div className="px-4 py-3 cursor-pointer flex justify-between items-center text-gray-700 hover:bg-blue-500 hover:text-white">
                    <span className="flex items-center">{center.icon}{center.name}</span>
                    <IoIosArrowForward />
                  </div>
                )}

                {activeCenter === center.name && center.durations && (
                  <div className="absolute left-full top-0 w-60 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                    {center.durations.map((duration) => (
                      <div
                        key={duration.name}
                        onMouseEnter={() => setActiveDuration(duration.name)}
                        className="group relative"
                      >
                        <div className="px-4 py-3 cursor-pointer flex justify-between items-center text-gray-700 hover:bg-blue-500 hover:text-white">
                          <span className="flex items-center">{duration.icon}{duration.name}</span>
                          <IoIosArrowForward />
                        </div>

                        {activeDuration === duration.name && (
                          <div className="absolute left-full top-0 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                            {renderCourses(duration.courses)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeCenter === center.name && center.courses && (
                  <div className="absolute left-full top-0 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                    {renderCourses(center.courses)}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>


      {/* Mobile Dropdown */}
      <div className="lg:hidden block px-4 py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full px-4 py-3 text-base font-medium text-gray-800 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          aria-expanded={isOpen}
          aria-label="Courses menu"
        >
          <span className="flex items-center">
            <FaBookOpen className="mr-3 text-blue-600" />
            <span className="font-semibold">Courses</span>
          </span>
          <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <IoIosArrowDown />
          </span>
        </button>

        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="mt-2 border border-gray-200 rounded-lg bg-white shadow-md">
            {AllCourse.map((center, index) => (
              <div key={index} className="border-t border-gray-100 first:border-t-0">
                <button
                  onClick={() => setActiveCenter(activeCenter === center.name ? null : center.name)}
                  className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-blue-50 transition-colors duration-150"
                  aria-expanded={activeCenter === center.name}
                >
                  <span className="flex items-center text-gray-700">
                    <span className="mr-3 text-blue-500">{center.icon}</span>
                    <span className="font-medium">{center.name}</span>
                  </span>
                  <span className={`transform transition-transform duration-200 ${activeCenter === center.name ? 'rotate-180' : ''}`}>
                    <IoIosArrowDown size={14} />
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeCenter === center.name ? 'max-h-screen' : 'max-h-0'}`}>
                  {center.durations && (
                    <div className="pl-6 pr-2">
                      {center.durations.map((duration, dIndex) => (
                        <div key={dIndex} className="border-t border-gray-100 first:border-t-0">
                          <button
                            onClick={() => setActiveDuration(activeDuration === duration.name ? null : duration.name)}
                            className="w-full text-left px-3 py-2.5 flex justify-between items-center hover:bg-blue-100 text-sm transition-colors duration-150"
                            aria-expanded={activeDuration === duration.name}
                          >
                            <span className="flex items-center text-gray-600">
                              <span className="mr-2 text-blue-400">{duration.icon}</span>
                              {duration.name}
                            </span>
                            <span className={`transform transition-transform duration-200 ${activeDuration === duration.name ? 'rotate-180' : ''}`}>
                              <IoIosArrowDown size={12} />
                            </span>
                          </button>

                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDuration === duration.name ? 'max-h-screen' : 'max-h-0'}`}>
                            <div className="pl-4 pb-2">
                              {renderCourses(duration.courses)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {center.courses && (
                    <div className="pl-6 pr-2 pb-2">
                      {renderCourses(center.courses)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
