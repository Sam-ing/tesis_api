import { DataSource } from "typeorm";
import { UserProfile } from "../models/userProfile.model"
import { Adress, Country, Locality, Province } from "../models/locations.models";
import * as dotenv from "dotenv";

dotenv.config();
console.log(process.env.DATABASE_URL)
export const AppDataSource = new DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    ssl: false,
     extra: {
        host:  process.env.DATABASE_URL 
        ? { host: new URL(process.env.DATABASE_URL).hostname }
        : {},
    },
    entities: [Locality, Province, Country, Adress, UserProfile],
    subscribers: [],
    migrations: []
})