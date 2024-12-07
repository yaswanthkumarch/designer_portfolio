import React from "react";

const Contact = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center px-4 py-12">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <img
                    src="https://via.placeholder.com/600x400"
                    alt="Location"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Right side - Contact Info */}
            <div className="w-full lg:w-1/2 pl-0 lg:pl-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

                {/* Inquiries */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Inquiries:</h2>
                    <p className="text-lg text-gray-600">Phone: +91 XXXXXXXXXX</p>
                    <p className="text-lg text-gray-600">Email: <a href="mailto:XXXXXX@gmail.com" className="text-blue-500">XXXXXX@gmail.com</a></p>
                </div>

                {/* Location */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Location:</h2>
                    <p className="text-lg text-gray-600">
                        Taj Avenue, <br />
                        5/1 Lady Curzon Road, <br />
                        Tasker Town, Shivaji Nagar, <br />
                        Bangalore 560001
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
