import { useState } from 'react';
import { FaBookOpen, FaGraduationCap, FaCertificate, FaBolt } from 'react-icons/fa';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowRight, MdOutlineComputer } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function AllCourseDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeType, setActiveType] = useState(null);

  const AllCourse = [
    {
      name: 'Diploma Course',
      icon: <FaGraduationCap className="mr-2 text-blue-600" />,
      type: [
        { name: 'PGDCA Computer Course', link: '/pgdca_computing', icon: <MdOutlineComputer className="mr-2 text-indigo-500" /> },
        { name: 'DCAA Computer Science', link: '/dcaa_computer_science', icon: <MdOutlineComputer className="mr-2 text-indigo-500" /> }
      ]
    },
    {
      name: 'Certificate Course',
      icon: <FaCertificate className="mr-2 text-green-600" />,
      type: [
        { name: 'Diploma in Designing & Publishing (DDP)', link: '/diploma_in_designing_publishing', icon: <MdOutlineComputer className="mr-2 text-indigo-500" /> },
        { name: 'DCA Computer Course | Hartron', link: '/dca_computer_course', icon: <MdOutlineComputer className="mr-2 text-indigo-500" /> }
      ]
    },
    {
      name: 'Short Term Course',
      icon: <FaBolt className="mr-2 text-yellow-600" />,
      type: [
        { name: 'DCA Computer Course | Hartron', link: '/short_term_dca_computer_course', icon: <MdOutlineComputer className="mr-2 text-indigo-500" /> }
      ]
    }
  ];

  return (
    <div>
      {/* Desktop Dropdown */}
      <div
        className="hidden lg:inline-block relative text-left"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          setIsOpen(false);
          setActiveType(null);
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center items-center px-4 py-2 rounded-t-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          <FaBookOpen className="mr-2" />
          <span>Courses</span>
          {isOpen ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
        </button>

        {isOpen && (
          <div className="absolute left-0 w-[18rem] bg-gray-100 border border-gray-300 rounded-md shadow-lg z-50">
            {AllCourse.map((course) => (
              <div
                key={course.name}
                onMouseEnter={() => setActiveType(course.name)}
                className="group relative"
              >
                <div className="px-4 py-3 cursor-pointer flex justify-between items-center text-gray-700 hover:bg-blue-500 hover:text-white">
                  <span className="flex items-center">{course.icon}{course.name}</span>
                  <MdKeyboardArrowRight />
                </div>
                {activeType === course.name && (
                  <div className="absolute left-full top-0 mt-0 w-72 bg-gray-100 border border-gray-300 rounded-md shadow-lg z-50">
                    {course.type.map((sub) => (
                      <Link
                        to={sub.link}
                        key={sub.name}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white flex items-center"
                      >
                        {sub.icon}
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="block lg:hidden w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-4 py-3 font-medium text-gray-700 border-gray-300 focus:outline-none"
        >
          <div className="flex items-center w-full justify-center">
            <FaBookOpen className="inline mr-2" />
            <span>Courses</span>
          </div>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>

        {isOpen && (
          <div className="w-full border rounded-b-md bg-gray-100">
            {AllCourse.map((course, index) => (
              <div key={index} className="border-t">
                <div
                  onClick={() =>
                    activeType === course.name ? setActiveType(null) : setActiveType(course.name)
                  }
                  className="px-4 py-3 cursor-pointer flex justify-between items-center text-gray-700 hover:bg-blue-500 hover:text-white"
                >
                  <span className="flex items-center">{course.icon}{course.name}</span>
                  {activeType === course.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {activeType === course.name &&
                  course.type.map((sub, i) => (
                    <Link
                      to={sub.link}
                      key={i}
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-400 hover:text-white flex items-center"
                    >
                      {sub.icon}
                      {sub.name}
                    </Link>
                  ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
