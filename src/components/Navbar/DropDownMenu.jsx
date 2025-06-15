import { useState } from 'react';
import { FaUniversity, } from 'react-icons/fa';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { AboutData } from './Data';
import { Link } from 'react-router-dom';

export default function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div>
      {/* Desktop Dropdown */}
      <div
        className="hidden lg:inline-block relative text-left"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex justify-center items-center px-4 py-2 rounded-t-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          <div className="flex items-center">
            <FaUniversity className="inline mr-1" />
            <span>About</span>
          </div>
          {isOpen ? <IoIosArrowUp className="ml-2" /> : <IoIosArrowDown className="ml-2" />}
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-0 w-56 origin-top-left bg-gray-100 border border-gray-200 rounded-md shadow-lg z-50">
            {AboutData.map(({ name, link, icon }, index) => (
              <Link key={index}
                to={link}
                className="flex items-center px-4 py-3 text-sm rounded-md text-gray-700 hover:bg-blue-500 hover:text-white"
              >
                {icon}
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="lg:hidden block px-4 py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full px-4 py-3 text-base font-medium text-gray-800 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <div className="flex items-center">
            <FaUniversity className="mr-3 text-blue-600" />
            <span className="font-semibold">About</span>
          </div>
          <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <IoIosArrowDown />
          </span>        </button>

        {isOpen && (
          <div className="  w-full  ">
            {AboutData.map(({ name, link, icon }) => (
              <a
                key={name}
                href={link}
                      className="w-full text-left px-3 py-2.5 flex  items-center border mt-2 rounded-md border-gray-200 hover:bg-blue-100 text-sm transition-colors duration-150"
              >
                <div className='pl-2'>{icon}</div>
                <div className='font-semibold text-gray-800'>{name}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
