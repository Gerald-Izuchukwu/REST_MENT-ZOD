import mongoose from "mongoose";
import config from "config"
import logger from "./logger";

async function connect(){
    try {
        const dbURI = config.get<string>("dbUri")
        await mongoose.connect(dbURI)
        logger.info(`DB connected at ${dbURI}`)    
    } catch (error) {
        logger.error("Could not connect to DB");
        process.exit(1)
    }
}

export default connect