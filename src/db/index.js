import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connect_DB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}?retryWrites=true&w=majority&dbName=${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(connectionInstance);
        console.log(`\nMongoDB connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error in db connect:", error);
        process.exit(1);
    }
}

export default connect_DB;
