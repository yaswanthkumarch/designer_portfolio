import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-6">
            <hr className="border-t border-gray-300 mb-4" />
            <div className="text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Aakriti Saraf Design
            </div>
        </footer>
    );
};

export default Footer;
