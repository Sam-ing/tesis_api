import { DataSource } from "typeorm";
import { UserProfile } from "../models/userProfile.model"
import { Adress, Country, Locality, Province } from "../models/locations.models";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    url: process.env.DATABASE_URL,
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "tesis",
    synchronize: true,
    logging: true,
    entities: [Locality, Province, Country, Adress, UserProfile],
    subscribers: [],
    migrations: []
})