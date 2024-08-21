import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class database {
    static async connect() {
        try {
            await mongoose.connect(process.env.DB_HOST);
            console.log("Database connected successfully");
        } catch (error) {
            console.log(error);
            console.log("Error in database connection");
        }
    }

}
export default database;