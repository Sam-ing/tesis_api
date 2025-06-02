import { DataSource } from "typeorm";
import { UserProfile } from "../models/userProfile.model"
import { Adress, Country, Locality, Province } from "../models/locations.models";
import * as dotenv from "dotenv";

dotenv.config();
console.log(process.env.DATABASE_URL)
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres.railway.internal",
    port: 5432,
    username: "postgres",
    password: "RPSHsJhOkqsrSDtQgfYUlhdytMNsqHuj",
    database: "railway",
    //url: "postgresql://postgres:RPSHsJhOkqsrSDtQgfYUlhdytMNsqHuj@postgres.railway.internal:5432/railway",
    synchronize: true,
    logging: true,
    ssl: false,
    //extra: "postgres.railway.internal",
    entities: [Locality, Province, Country, Adress, UserProfile],
    subscribers: [],
    migrations: []
})