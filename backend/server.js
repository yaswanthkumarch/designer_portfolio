import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import connect from './connectDB/connect.js';
import projectRouter from './routes/project.route.js';
import blogRouter from './routes/blogs.route.js';




const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();


// app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRouter);
app.use('/api/blogs', blogRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "/frontend","dist","index.html"));
});
app.listen(8000,() => {
    connect();
    console.log('Server is running on port 8000');
});