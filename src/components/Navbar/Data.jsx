import { FaUniversity, FaChalkboardTeacher, FaUserTie, FaUserShield, FaUsers,} from 'react-icons/fa';


export  const AboutData = [
    { name: 'Hartron Skill Center', link: '/hartron_skill_center', icon: <FaUniversity className="text-blue-500 mr-2" />,},
    {  name: 'Hartron Advanced Skill Center',  link: '/hartron_advanced_skill_center',  icon: <FaChalkboardTeacher className="text-green-500 mr-2" />,},
    { name: 'Center Head', link: '/center_head', icon: <FaUserTie className="text-indigo-500 mr-2" />,},
    { name: 'Admin Panel', link: '/admin_panel', icon: <FaUserShield className="text-red-500 mr-2" />, },
    { name: 'Faculty', link: '/faculty', icon: <FaUsers className="text-purple-500 mr-2" />,},
  ];
