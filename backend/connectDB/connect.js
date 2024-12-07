import mongoose from "mongoose";

const connect= async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting mongoDb", error.message);
    }
};
export default connect;