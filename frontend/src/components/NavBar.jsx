// import React, { useState } from 'react';
// import { FaFacebookF, FaInstagram } from 'react-icons/fa';
// import { Link } from 'react-router';

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//         <nav className="bg-gray-100 px-4 py-4 md:px-8 lg:px-16 shadow-md fixed w-full top-0 z-40">
//             <div className="flex justify-between items-center"> 
//                 {/* Logo Section */}
//                 <Link to="/" className="text-2xl font-light text-gray-700">
//                     <span className="block leading-none">aakriti</span>
//                     <span className="block leading-none">saraf</span>
//                     <span className="block leading-none">design</span>
//                 </Link>

//                 {/* Menu Button for Mobile */}
//                 <div className="md:hidden">
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
//                     >
//                         <svg
//                             className="w-6 h-6"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h16m-7 6h7"
//                             ></path>
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Navigation Links */}
//                 <div className={`md:flex items-center space-x-8 ${isOpen ? 'block ' : 'hidden'} md:block`}>
//                     <Link to="/about"
//                         className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700"
//                     >
//                         About
//                     </Link>
//                     <Link to="/projects"
//                         className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700"
//                     >
//                         Projects
//                     </Link>
//                     <Link to="/blogs"
//                         className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700"
//                     >
//                         Blog
//                     </Link>
//                     <Link to="/contact"
//                         className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700"
//                     >
//                         Contact
//                     </Link>

//                     {/* Social Icons */}
//                     <div className="flex space-x-4">
//                             <a href="#" className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700 hover:bg-gray-200 px-2 py-1 rounded">
//                             <FaInstagram size={18} />
//                         </a>
//                             <a href="#" className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700 hover:bg-gray-200 px-2 py-1 rounded">
//                             <FaFacebookF size={18} />
//                         </a>
//                     </div>
//                 </div>
//             </div>
        
//         </nav>
//         <div className="mb-24"></div>
//         </>
//     );
// };

// export default NavBar;

import React, { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-gray-100 px-4 py-4 md:px-8 lg:px-16 shadow-md fixed w-full top-0 z-40">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link to="/" className="text-2xl font-light text-gray-700">
                        <span className="block leading-none">madhu</span>i</span>
                        <span className="block leading-none">saraf</span>
                        <span className="block leading-none">design</span>
                    </Link>

                    {/* Menu Button for Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div
                        className={`${isOpen ? 'block' : 'hidden'
                            } absolute right-0 top-full w-full bg-gray-100 md:static  md:flex md:items-center md:space-x-8 `}
                    >
                        <div className="flex flex-col md:absolute md:right-0 md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 px-4 py-4 md:py-0">
                            <Link
                                to="/about"
                                className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700"
                                onClick={()=>setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/projects"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700"
                            >
                                Projects
                            </Link>
                            <Link
                                to="/blogs"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700"
                            >
                                Blog
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700"
                            >
                                Contact
                            </Link>

                            {/* Social Icons */}
                            <div className="flex space-x-4">
                                <a
                                    onClick={() => setIsOpen(false)}
                                    href="#"
                                    className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700 hover:bg-gray-200 px-2 py-1 rounded"
                                >
                                    <FaInstagram size={18} />
                                </a>
                                <a
                                    onClick={() => setIsOpen(false)}
                                    href="#"
                                    className="text-gray-700 text-sm hover:text-gray-900 border-b-2 border-transparent hover:border-gray-700 hover:bg-gray-200 px-2 py-1 rounded"
                                >
                                    <FaFacebookF size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer to prevent content from being hidden behind fixed navbar */}
            <div className="mb-24"></div>
        </>
    );
};

export default NavBar;
