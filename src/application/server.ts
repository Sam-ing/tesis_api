import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from 'dotenv';
import * as path from 'path';
import { AppDataSource } from "../infraestructure/database/postgres";
import userProfileRouter from "../infraestructure/routes/userProfile.routes";
import locationsRouter from "../infraestructure/routes/locations.routes";
import loginRouter from "../infraestructure/routes/login.routes";

export class Server{
    
    public readonly app = express()
    
    constructor(){
        this.app
        this.app.use(morgan("dev"))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(userProfileRouter)
        this.app.use(locationsRouter)
        this.app.use(loginRouter)
        
    }

    async start(){
        dotenv.config({ path:  path.join(__dirname, '../../.env') });
        await AppDataSource.initialize()
        this.app.listen(process.env.PORT, () => {
            return console.log(`Express is listening at ${process.env.HOST}:${process.env.PORT}`);
          });
    }
}