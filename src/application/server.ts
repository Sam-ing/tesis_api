import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "../infraestructure/database/postgres";
import userProfileRouter from "../infraestructure/routes/userProfile.routes";
import locationsRouter from "../infraestructure/routes/locations.routes";
import loginRouter from "../infraestructure/routes/login.routes";
interface Options{
    port?: number;
}
export class Server{
    
    public readonly app = express()
    private readonly port: number;
    
    constructor(options: Options){
        const {port = 3000} = options;
        
        this.port = port
        this.app
        this.app.use(morgan("dev"))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(userProfileRouter)
        this.app.use(locationsRouter)
        this.app.use(loginRouter)
        
    }

    async start(){
        dotenv.config({ path: __dirname+'/.env' });
        console.log(process.env.DATABASE_URL)
        await AppDataSource.initialize()
        this.app.listen(this.port, () => {
            return console.log(`Express is listening at http://localhost:${this.port}`);
          });
    }
}