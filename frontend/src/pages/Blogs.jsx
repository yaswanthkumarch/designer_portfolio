import axios from 'axios';
import React,{useEffect, useState} from 'react';




const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        // Fetch all blogs from the backend
        axios.get('/api/blogs')
            .then(response => setBlogs(response.data.blogs))
            .catch(error => console.error(error));
    }, []);
    // console.log(blogs);
    return (
        <div className="bg-gray-100 min-h-screen p-4 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Latest Blogs</h1>
            <div className="space-y-12">
                {blogs && blogs.map((blog) => (
                    <div
                        key={blog._id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden md:flex md:space-x-6"
                    >
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-64 object-cover md:h-auto md:w-1/2 lg:w-1/3"
                        />
                        <div className="p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-semibold">{blog.title}</h2>
                                <p className="text-gray-600 text-sm mt-2">
                                    By {blog.author} | {blog.date.slice(0,10)}
                                </p>
                                <p className="text-gray-700 mt-4">{blog.summary}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
