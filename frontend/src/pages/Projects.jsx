import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Projects.css";  // Importing the external CSS for the flip effect
import axios from "axios";

const Projects = () => {
    // Sample data for projects
    const [projects, setProjects] = useState([]);

    
    useEffect(() => {
        // Fetch the projects from the backend
        axios.get('/api/projects')
            .then(response => {setProjects(response.data.projects);
                // console.log("Projects fetched successfully", response.data.projects);
            })
            .catch(error => console.error(error));
    }, []);


    return (
        <div className="container mx-auto px-4 py-12 h-[78vh]">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Projects</h1>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                {projects && projects.length > 0 ? projects.map((project) => (
                    <Link to={`/project/${project._id}`}
                        key={project._id}
                        className="card relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                    >
                        {/* Card Wrapper - Handle Flip */}
                        <div className="card-inner relative w-full h-48 transform-style-preserve-3d transition-transform duration-500">
                            {/* Front Side - Image */}
                            <div className="card-front absolute inset-0 w-full h-full bg-gray-100">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Back Side - Title */}
                            <div className="card-back absolute inset-0 w-full h-full bg-gray-400 flex justify-center items-center text-white text-xl font-semibold transform rotate-y-180">
                                {project.title}
                            </div>
                        </div>
                    </Link>
                )):<p>No projects in Data Base!!!!</p>}
            </div>
        </div>
    );
};

export default Projects;
