import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Blogs= () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        summary: '',
        image: '',
    });

    useEffect(() => {
        // Fetch all blogs from the backend
        axios.get('/api/blogs')
            .then(response => setBlogs(response.data.blogs))
            .catch(error => console.error(error));
    }, []);

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
                // Only update the state once all files are read
                setFormData((prev) =>({...prev, image: reader.result}));
            }
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.image) {
            alert('Image is required!');
            return;
        }

        setIsLoading(true);
        const form = new FormData();
        form.append('title', formData.title);
        form.append('author', formData.author);
        form.append('summary', formData.summary);
        form.append('image', formData.image);

        axios.post('/api/blogs/upload', form)
            .then(response => {
                setBlogs([response.data.blog, ...blogs]);
                setFormData({ title: '', author: '', summary: '', image: null });
                setIsLoading(false);
                alert('Blog uploaded successfully!');
            })
            .catch(error => {
                console.error(error);
                if (error.response && error.response.data.message) {
                    alert(error.response.data.message);
                } else {
                    alert('An unexpected error occurred');
                }
            }).finally(() => setIsLoading(false));
    };

    const handleDelete = (id) => {
        axios.delete(`/api/blogs/${id}`)
            .then(response => {
                setBlogs(blogs.filter((blog) => blog._id !== id));
                alert('Blog deleted successfully!');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-screen">
                {/* Left Side - Blog Upload Form */}
                <div className="bg-white p-6  flex flex-col sm:border-b-2 lg:border-r-2 lg:border-b-0  border-blue-400">
                    <div className="relative"><Link to="/admin" ><button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Back</button></Link>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Upload New Blog</h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                value={formData.title}
                                onChange={handleFormChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                value={formData.author}
                                onChange={handleFormChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="summary" className="block text-sm font-medium text-gray-700">Summary</label>
                            <textarea
                                name="summary"
                                id="summary"
                                value={formData.summary}
                                onChange={handleFormChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={handleFileChange}
                                className="mt-1"
                                required
                            />
                        </div>
                        {isLoading ? 
                        <div className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-center">Uploading....</div>
                            : <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                                Upload Blog
                            </button>
                        }
    
                    </form>
                </div>

                {/* Right Side - Display Blogs */}
                <div className="bg-white p-6 rounded-lg shadow-md overflow-y-auto h-screen">
                    <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
                    <div className="space-y-4">
                        {blogs ? (
                            blogs.map((blog) => (
                                <div key={blog._id} className="flex justify-between items-center border-b py-4">
                                    <div>
                                        <h3 className="font-semibold">{blog.title}</h3>
                                        <p>{blog.author}</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => handleDelete(blog._id)}
                                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No blogs available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
