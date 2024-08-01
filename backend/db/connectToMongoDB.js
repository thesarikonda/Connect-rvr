import mongoose from "mongoose";

const connectToMangoDB = async () => {
    try {
        await mongoose.connect(process.env.MANGO_DB_URI);
        console.log("Connected to mangoDB")
        
    } catch (error) {
        console.log("Error in connecting to mangoDB", error.message)
        
    }
}
export default connectToMangoDB;