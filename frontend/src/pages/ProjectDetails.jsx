import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const ProjectDetails = () => {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showDetails, setShowDetails] = useState(false); // State to toggle project details

    useEffect(() => {
        axios.get(`/api/projects`)
            .then(response => {
                setProjects(response.data.projects);
                setIsLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    const currentProject = projects.find((project) => project._id === id);

    if (isLoading || !currentProject) {
        return <div>Loading project details...</div>;
    }

    const currentIndex = projects.findIndex((project) => project._id === id);
    const previousProject = projects[currentIndex - 1] || projects[projects.length - 1];
    const nextProject = projects[currentIndex + 1] || projects[0];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Navigation Links */}
            <div className="flex justify-between mb-8">
                <Link to={`/project/${previousProject._id}`} className="text-blue-500">Previous Project</Link>
                <Link to={`/project/${nextProject._id}`} className="text-blue-500">Next Project</Link>
            </div>

            {/* Thumbnail Image */}
            <div className="mb-12">
                <img
                    src={currentProject.thumbnail || "/placeholder.jpg"}
                    alt={currentProject.title}
                    className="w-full h-[60vh] object-cover rounded-lg"
                />
            </div>

            {/* Project Information */}
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4">{currentProject.title}</h2>
                <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Photographer: </span>{currentProject.photographer || "N/A"}
                </p>

                {/* Toggleable Project Details */}
                <div>
                     <div className="flex justify-between border-b-2 border-gray-400">
                         <h2 className="text-lg">Project Details</h2>
                         <button
                             onClick={() => setShowDetails(!showDetails)}
                             className="text-lg"
                         >
                             {!showDetails ? <SlArrowDown/> : <SlArrowUp />}
                         </button>
                     </div>

                     {showDetails && (
                         <div className="mt-4 bg-gray-100 p-4 rounded-md shadow">
                           
                             <p className="text-gray-700 text-justify">{currentProject.description || "No details available."}</p>
                         </div>
                     )}
                 </div>
            </div>

            {/* Display Photos in Full-Width Grid */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Project Photos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentProject.imagesurl.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md">
                            <img
                                src={image}
                                alt={`Project photo ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
