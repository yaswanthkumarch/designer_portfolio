// import React from "react";

// const About = () => {
//     return (
//         <div className="flex flex-col space-y-16">
//             {/* First Section: Left side photo, right side content */}
//             <div className="flex items-center justify-between px-8 py-12 space-x-8">
//                 <div className="flex-1">
//                     <img
//                         src="https://via.placeholder.com/600x400"
//                         alt="About Photo"
//                         className="w-full h-auto rounded-lg shadow-lg object-cover"
//                     />
//                 </div>
//                 <div className="flex-1">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
//                     <p className="text-gray-700 text-lg mb-4">
//                         We are a company dedicated to providing the best services to our
//                         customers. Our team consists of highly skilled professionals who
//                         work hard to deliver results that exceed expectations. Our mission is
//                         to make the world a better place through innovation and dedication to
//                         excellence.
//                     </p>
//                     <p className="text-gray-700 text-lg">
//                         With years of experience and a commitment to quality, we are here to
//                         lead the way in our industry. Join us as we work towards achieving
//                         great things together.
//                     </p>
//                 </div>
//             </div>

//             {/* Second Section: Right side photo, left side content */}
//             <div className="flex items-center justify-between px-8 py-12 space-x-8 flex-row-reverse">
//                 <div className="flex-1">
//                     <img
//                         src="https://via.placeholder.com/600x400"
//                         alt="About Photo"
//                         className="w-full h-auto rounded-lg shadow-lg object-cover"
//                     />
//                 </div>
//                 <div className="flex-1">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
//                     <p className="text-gray-700 text-lg mb-4">
//                         Our vision is to be a global leader in our field, known for
//                         delivering innovative solutions that positively impact the world. We
//                         aim to create a sustainable future by fostering a culture of
//                         collaboration, creativity, and integrity.
//                     </p>
//                     <p className="text-gray-700 text-lg">
//                         We believe in the power of people and ideas, and we strive to create
//                         an environment that encourages growth, learning, and success for
//                         everyone involved.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;

import React from "react";

const About = () => {
    return (
        <div className="flex flex-col space-y-16 px-4 md:px-8">
            {/* First Section: Left side photo, right side content */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 py-12">
                <div className="flex-1 w-full">
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="About Photo"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
                <div className="flex-1 w-full">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                        About Us
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg mb-4">
                        We are a company dedicated to providing the best services to our
                        customers. Our team consists of highly skilled professionals who
                        work hard to deliver results that exceed expectations. Our mission is
                        to make the world a better place through innovation and dedication to
                        excellence.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg">
                        With years of experience and a commitment to quality, we are here to
                        lead the way in our industry. Join us as we work towards achieving
                        great things together.
                    </p>
                </div>
            </div>

            {/* Second Section: Right side photo, left side content */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 py-12">
                
                <div className="flex-1 w-full">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                        Our Vision
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg mb-4">
                        Our vision is to be a global leader in our field, known for
                        delivering innovative solutions that positively impact the world. We
                        aim to create a sustainable future by fostering a culture of
                        collaboration, creativity, and integrity.
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg">
                        We believe in the power of people and ideas, and we strive to create
                        an environment that encourages growth, learning, and success for
                        everyone involved.
                    </p>
                </div>
                <div className="flex-1 w-full">
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="About Photo"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
