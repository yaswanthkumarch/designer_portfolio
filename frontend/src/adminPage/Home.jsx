import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-md lg:max-w-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
                    Admin Dashboard
                </h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Link to="/admin/projects"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 w-full text-sm md:text-base"
                    >
                        Manage Projects
                    </Link>
                    <Link
                        to="/admin/blogs"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-300 w-full text-sm md:text-base"
                    >
                        Manage Blogs
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
