import { useState, useRef, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';

export default function DropdownMenuProfile() {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const menuItems = [
        { icon: <FiUser className="text-lg" />, label: "Profile", color: "text-blue-500" },
        { icon: <FiSettings className="text-lg" />, label: "Settings", color: "text-gray-500" },
        { icon: <FiLogOut className="text-lg" />, label: "Logout", color: "text-gray-500" }
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                type: "spring",
                stiffness: 200
            }
        }),
        hover: { 
            scale: 1.02,
            backgroundColor: "#f8fafc",
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.98 }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowDropdown(!showDropdown)}
                className="cursor-pointer"
            >
                <motion.div
                    animate={{
                        rotate: showDropdown ? 180 : 0,
                        color: showDropdown ? "#2563eb" : "#4b5563"
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <CgProfile className="h-7 w-7 text-blue-600" />
                </motion.div>
            </motion.div>

            <AnimatePresence>
                {showDropdown && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 10, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                        className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                    >
                        <div className="px-4 py-3 border-b border-gray-100 bg-blue-50">
                            <p className="text-gray-800 font-medium">Ravi Singh</p>
                            <p className="text-xs text-gray-500">MERN Stack Course</p>
                        </div>

                        <motion.div className="py-1">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={itemVariants}
                                    className={`flex items-center px-4 py-3 cursor-pointer ${item.color} hover:text-blue-600`}
                                >
                                    <span className="mr-3">{item.icon}</span>
                                    <span className="font-medium">{item.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}