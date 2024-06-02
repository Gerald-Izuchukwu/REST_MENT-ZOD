import config from "config"
import express from "express"
import connect from "./utils/connect"
import logger from "./utils/logger"
import routes from "./routes"
const app = express()
const PORT = config.get<number>('port')


app.listen(PORT, async()=>{
    logger.info(`App is running on http://localhost:${PORT}`);
    await connect() 
    routes(app)   
})