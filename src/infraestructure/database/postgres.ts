import { DataSource } from "typeorm";
import { UserProfile } from "../models/userProfile.model"
import { Adress, Country, Locality, Province } from "../models/locations.models";

let port = "5432";
if (process.env.PGPORT){
    port = process.env.PGPORT;
};
console.log(process.env.PGHOST, process.env.PGPORT, process.env.PGUSER, process.env.PGPASSWORD, process.env.PGUSER)
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: parseInt(port),
    username: process.env.PGUSER,
    password: process.env.PGHPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: true,
    logging: true,
    ssl: false,
    entities: [Locality, Province, Country, Adress, UserProfile],
    subscribers: [],
    migrations: []
})