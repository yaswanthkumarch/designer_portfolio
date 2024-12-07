import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        photographer: '',
        location: '',
        description: '',
        images: [],
    });


    useEffect(() => {
        // Fetch the projects from the backend
        axios.get('/api/projects')
            .then(response => setProjects(response.data.projects))
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
        const files = Array.from(e.target.files);
        const newImages = [];

        // Read each file
        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newImages.push(reader.result);  // Push the image to the newImages array
                if (newImages.length === files.length) {
                    // Only update the state once all files are read
                    setFormData((prevData) => ({
                        ...prevData,
                        images: [...prevData.images, ...newImages],  // Add new images to the existing ones
                    }));
                }
            };
            reader.readAsDataURL(file); // This starts reading the file
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);
        const form = new FormData();
        form.append('title', formData.title);
        form.append('photographer', formData.photographer);
        form.append('location', formData.location);
        form.append('description', formData.description);

        formData.images.forEach((image, index) => {
            form.append(`images[${index}]`, image); // Or just 'images' if the backend expects a flat array
        });
        axios.post('/api/projects/upload', form)
            .then(response => {
                setProjects([...projects, response.data.project]);
                setFormData({ title: '', photographer: '', location: '', description: '', images: [] });
                setIsLoading(false);
                alert('Project uploaded successfully!');
            })
            .catch(error => {
                console.error(error);
                if (error.response && error.response.data && error.response.data.message) {
                    alert(error.response.data.message);  // Show error message
                } else {
                    alert('An unexpected error occurred');
                }
            }).finally(() => {setIsLoading(false);});
    };

    const handleDelete = (id) => {
        axios.delete(`/api/projects/${id}`)
            .then(response => {
                setProjects(projects.filter((project) => project._id !== id));
                alert('Project deleted successfully!');
            })
            .catch(error => console.error(error));
    };

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-screen">
                {/* Left Side - Form */}
                <div className="bg-white p-6  flex flex-col sm:border-b-2 lg:border-r-2 lg:border-b-0  border-blue-400">
                    <div className="relative"><Link to="/admin" ><button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Back</button></Link>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Upload New Project</h2>
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
                            <label htmlFor="photographer" className="block text-sm font-medium text-gray-700">Photographer</label>
                            <input
                                type="text"
                                name="photographer"
                                id="photographer"
                                value={formData.photographer}
                                onChange={handleFormChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                value={formData.location}
                                onChange={handleFormChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                value={formData.description}
                                onChange={handleFormChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Upload Images</label>
                            <input
                                type="file"
                                name="images"
                                id="images"
                                multiple
                                onChange={handleFileChange}
                                className="mt-1"
                            />
                        </div> 
                        {isLoading ? <div className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 text-center" >Uploading...</div>:
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                        Upload Project
                        </button>}
                    </form>
                </div>

                {/* Right Side - Display Projects */}
                <div className="bg-white p-6 rounded-lg shadow-md overflow-y-auto h-screen">
                    <h2 className="text-2xl font-bold mb-4">All Projects</h2>
                    <div className="space-y-4">
                        {projects && projects.length > 0 ? (
                            projects.map((project) => (
                                <div key={project._id} className="flex justify-between items-center border-b py-4">
                                    <div>
                                        <h3 className="font-semibold">{project.title}</h3>
                                        <p>{project.location}</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => handleDelete(project._id)}
                                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No projects available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
