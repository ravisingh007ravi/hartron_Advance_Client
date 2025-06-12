import React from 'react';
import { Link } from 'react-router-dom';

export default function ChooseRole() {
  const roles = [
    {
      img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749706316/full_stack_tfxslb.avif',
      title: "Data Analyst",
      description: "A Data Analyst collects, cleans, and interprets data, using tools like Excel, SQL, and Tableau to analyze trends and provide insights for decisions.",
      likes: "analyzing data to find insights, creating reports and visualizations, working with spreadsheets and databases",
      salary: "$289,008",
      jobs: "23,498",
      credentials: [
        "IBM Data Analyst",
        "DeepLearning AI Data Analytics",
        "+ 5 more"
      ]
    },
    {
      img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749706316/cyber-security_wnjhc3.avif',
      title: "Data Scientist",
      description: "A Data Scientist analyzes large datasets to uncover insights, using statistics, machine learning, and visualization to inform business strategies.",
      likes: "analyzing complex datasets, developing machine learning models, solving statistical problems",
      salary: "$452,053",
      jobs: "21,629",
      credentials: [
        "IBM Data Science"
      ]
    },
    {
      img: 'https://res.cloudinary.com/dnpn8ljki/image/upload/v1749706316/Intelligence_wsydm4.avif',
      title: "Cyber Security Analyst",
      description: "A Cyber Security Analyst monitors IT systems, analyzes threats, finds vulnerabilities, and implements measures to protect data from cyber attacks.",
      likes: "protecting networks and data from cyber threats, analyzing security vulnerabilities, developing security protocols",
      salary: "$2,125,458",
      jobs: "2,153",
      credentials: [
        "Google Cybersecurity",
        "Microsoft Cybersecurity Analyst",
        "+ 4 more"
      ]
    }
  ];

  return (
    <div className="px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ready to reimagine your career?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get the skills and real-world experience employers want with Career Accelerators.</p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Explore all roles</h2>
          <Link to='/view-all-course'>
          <button className="text-blue-600 font-medium hover:text-blue-800 transition">
            View all roles →
          </button>
          </Link>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {roles.map((role, idx) => (
            <div key={idx} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
              <img 
                className='w-full h-48 object-cover' 
                src={role.img} 
                alt={role.title} 
              />
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  <span className="text-sm font-medium text-blue-600">{role.title.split(' ')[0]}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.description}</p>
                
                <div className="mb-4 bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium text-gray-800 mb-1">If you like:</p>
                  <p className="text-gray-600 text-sm">{role.likes}</p>
                </div>
                
                <div className="flex gap-4 mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg flex-1">
                    <p className="font-bold text-blue-700 text-lg">{role.salary}</p>
                    <p className="text-xs text-gray-500">median salary</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg flex-1">
                    <p className="font-bold text-green-700 text-lg">{role.jobs}</p>
                    <p className="text-xs text-gray-500">jobs available</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-medium text-gray-800 mb-2">Credentials</h4>
                  <ul className="space-y-2">
                    {role.credentials.map((credential, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}