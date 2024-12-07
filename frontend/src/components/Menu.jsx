// // import React, { useState, useRef } from "react";
// // import { FaBars } from "react-icons/fa";
// // import { Link } from "react-router-dom";

// // const Menu = () => {
// //     const [isMenuVisible, setIsMenuVisible] = useState(false);
// //     const [isDragging, setIsDragging] = useState(false);
// //     const [position, setPosition] = useState({ x: 50, y: 50 }); // Initial position of the button
// //     const buttonRef = useRef(null); // Reference to the draggable button

// //     // Handle mouse or touch down event to start dragging
// //     const handleStart = (e) => {
// //         setIsDragging(true);
// //         e.preventDefault(); // Prevent any default action
// //     };

// //     // Handle mouse or touch move event to update button position
// //     const handleMove = (e) => {
// //         if (isDragging) {
// //             const clientX = e.touches ? e.touches[0].clientX : e.clientX;
// //             const clientY = e.touches ? e.touches[0].clientY : e.clientY;

// //             const rect = buttonRef.current.getBoundingClientRect();
// //             const newX = Math.max(0, Math.min(clientX - rect.width / 2, window.innerWidth - rect.width));
// //             const newY = Math.max(0, Math.min(clientY - rect.height / 2, window.innerHeight - rect.height));

// //             setPosition({ x: newX, y: newY });
// //         }
// //     };

// //     // Handle mouse or touch up event to stop dragging and snap to nearest boundary
// //     const handleEnd = () => {
// //         setIsDragging(false);

// //         const { x, y } = position;
// //         const screenWidth = window.innerWidth;
// //         const screenHeight = window.innerHeight;

// //         const snapToLeft = x < screenWidth / 2;
// //         const snapToRight = x >= screenWidth / 2;
// //         const snapToBottom = y >= screenHeight / 2;

// //         const snappedPosition = snapToLeft
// //             ? { x: 0, y: snapToBottom ? screenHeight - 100 : screenHeight / 2 - 50 }
// //             : snapToRight
// //                 ? { x: screenWidth - 50, y: snapToBottom ? screenHeight - 100 : screenHeight / 2 - 50 }
// //                 : { x: screenWidth / 2 - 50, y: screenHeight - 100 };

// //         setPosition(snappedPosition);
// //     };

// //     // Toggle menu visibility
// //     const handleButtonClick = (e) => {
// //         setIsMenuVisible((prev) => !prev);
// //         e.stopPropagation(); // Prevent event propagation to dragging events
// //     };

// //     return (
// //         <div
// //             onMouseMove={handleMove}
// //             onTouchMove={handleMove}
// //             onMouseUp={handleEnd}
// //             onTouchEnd={handleEnd}
// //         >
// //             {/* Draggable Button */}
// //             <div
// //                 ref={buttonRef}
// //                 className="fixed bg-blue-500 p-4 rounded-full text-white cursor-pointer z-50"
// //                 style={{ left: `${position.x}px`, top: `${position.y}px` }}
// //                 onMouseDown={handleStart}
// //                 onTouchStart={handleStart}
// //             >
// //                 <FaBars size={24} onClick={handleButtonClick} />
// //             </div>

// //             {/* Vertical Menu - Toggle on Button Click */}
// //             {isMenuVisible && (
// //                 <div
// //                     className="fixed bg-white shadow-lg p-4 rounded-lg z-50"
// //                     style={{
// //                         left: `${Math.min(
// //                             Math.max(position.x + 60, 10),
// //                             window.innerWidth - 200
// //                         )}px`, // Keep menu within screen horizontally
// //                         top: `${Math.min(
// //                             Math.max(position.y, 10),
// //                             window.innerHeight - 200
// //                         )}px`, // Keep menu within screen vertically
// //                     }}
// //                 >
// //                     <Link to="/about" className="block text-gray-800 hover:text-blue-500 mb-2">About</Link>
// //                     <Link to="/projects" className="block text-gray-800 hover:text-blue-500 mb-2">Projects</Link>
// //                     <Link to="/blogs" className="block text-gray-800 hover:text-blue-500 mb-2">Blogs</Link>
// //                     <Link to="/contact" className="block text-gray-800 hover:text-blue-500 mb-2">Contact</Link>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Menu;

import React, { useRef, useState } from "react";
import "./MenuComponent.css";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
    const navRef = useRef(null); // Reference for the nav element
    const [isOpen, setIsOpen] = useState(false); // State to handle menu toggle

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    const onDrag = (e) => {
        const nav = navRef.current;
        const navStyle = window.getComputedStyle(nav);
        const navTop = parseInt(navStyle.top);
        const navHeight = parseInt(navStyle.height);
        const windHeight = window.innerHeight;

        const movementY = e.movementY;
        const newTop = navTop + movementY;

        // Constrain the movement within the vertical bounds
        if (newTop >= 0 && newTop <= windHeight - navHeight) {
            nav.style.top = `${newTop}px`;
        }
    };


    const handleMouseDown = () => {
        const nav = navRef.current;
        nav.addEventListener("mousemove", onDrag);
    };

    const handleMouseUpOrLeave = () => {
        const nav = navRef.current;
        nav.removeEventListener("mousemove", onDrag);
    };

    return (
        <nav
            ref={navRef}
            className={`menu-nav ${isOpen ? "open" : ""} z-50 `}
            style={{ top: "20px", right: "0" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
        >
            <div className="nav-content">
                <div className="toggle-btn" onClick={toggleMenu}>
                    <FaPlus />
                </div>
                <span style={{ "--i": 1 }}>
                    <Link to="/">
                        <i className="bx bxs-map">Home</i>
                    </Link>
                </span>
                <span style={{ "--i": 2 }}>
                    <Link to="/contact">
                        <i className="bx bxs-camera">Contact</i>
                    </Link>
                </span>
                <span style={{ "--i": 3 }}>
                    <Link to="/blogs">
                        <i className="bx bxs-alarm">Blogs</i>
                    </Link>
                </span>
                <span style={{ "--i": 4 }}>
                    <Link to="/projects">
                        <i className="bx bxs-map">Projects</i>
                    </Link>
                </span>
                <span style={{ "--i": 5 }}>
                    <Link to="/about">
                        <i className="bx bxs-map">About</i>
                    </Link>
                </span>
            </div>
        </nav>
    );
};

export default Menu;
