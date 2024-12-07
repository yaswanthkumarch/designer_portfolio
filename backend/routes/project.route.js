import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.config.js";

import ProjectData from "../models/projectModel.model.js";

const router = express.Router();

// Configure Multer Storage with Cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "project-images", // Cloudinary folder name
        allowed_formats: ["jpg", "jpeg", "png"], // Accepted file formats
    },
});

const upload = multer({ storage });

//Delete function from cloudinary
const deleteImage = async (imageUri) => {
    try {
        // Extract the public_id from the image URI
        const urlParts = imageUri.split('/');
        const versionIndex = urlParts.findIndex(part => part.startsWith('v'));
        const publicIdWithExtension = urlParts.slice(versionIndex + 1).join('/');
        const publicId = publicIdWithExtension.split('.')[0]; // Remove the file extension

        // Call Cloudinary's API to delete the image
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
};

// POST: Create a New Project
router.post("/upload", upload.array("images", 10), async (req, res) => {
    try {
        const { title, photographer, location, description, images } = req.body;
        
        if (!title || !photographer || !location || !description || !images) {
            return res.status(400).json({ message: "All fields and images are required" });
        }

        const existingProject = await ProjectData.findOne({ title });
        if (existingProject) {
            return res.status(400).json({ message: "A project with this title already exists" });
        }

        const imageUrls=[];
        for(const base64Image of images){
            const uploadedResponse = await cloudinary.uploader.upload(base64Image, {
                folder: "project-images",
                allowed_formats: ["jpg", "jpeg", "png"],
            });
            imageUrls.push(uploadedResponse.secure_url); 
        }
        // Extract URLs from uploaded images
        const thumbnailUrl = imageUrls[0];

        // Save project to MongoDB
        const project = new ProjectData({
            title,
            photographer,
            location,
            description,
            thumbnail: thumbnailUrl,
            imagesurl: imageUrls,
        });

        await project.save();
        res.status(201).json({ message: "Project uploaded successfully", project });
    } catch (error) {
        console.error("Error uploading project:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// GET: Retrieve All Projects
router.get("/", async (req, res) => {
    try {
        const projects = await ProjectData.find();
        res.status(200).json({ message: "Projects retrieved successfully", projects });
    } catch (error) {
        console.error("Error retrieving projects:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// GET: Retrieve a Single Project by ID
router.get("/:id", async (req, res) => {
    try {
        const project = await ProjectData.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json({ message: "Project retrieved successfully", project });
    } catch (error) {
        console.error("Error retrieving project:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// PUT: Update a Project by ID
router.put("/:id", upload.array("images", 10), async (req, res) => {
    try {
        const { title, photographer, location, description } = req.body;

        if (!title || !photographer || !location || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const project = await ProjectData.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }

        // Update fields
        project.title = title;
        project.photographer = photographer;
        project.location = location;
        project.description = description;

        // If new images are uploaded, replace the existing ones
        if (req.files && req.files.length > 0) {
            const imageUrls = req.files.map(file => file.path);
            project.thumbnail = imageUrls[0]; // Update thumbnail
            project.imagesurl = imageUrls;   // Update image URLs
        }

        await project.save();
        res.status(200).json({ message: "Project updated successfully", project });
    } catch (error) {
        console.error("Error updating project:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// DELETE: Delete a Project by ID
router.delete("/:id", async (req, res) => {
    try {
        const project = await ProjectData.findByIdAndDelete(req.params.id);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        
        for (const img of project.imagesurl) {
            deleteImage(img);  // Delete images from cloudinary before deleting from the database
        }
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        console.error("Error deleting project:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

export default router;
