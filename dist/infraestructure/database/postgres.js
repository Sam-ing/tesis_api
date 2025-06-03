"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const userProfile_model_1 = require("../models/userProfile.model");
const locations_models_1 = require("../models/locations.models");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: __dirname + '/.env' });
let port = "5432";
if (process.env.PGPORT) {
    port = process.env.PGPORT;
}
;
console.log(process.env.PGHOST, process.env.PGPORT, process.env.PGUSER, process.env.PGPASSWORD, process.env.PGUSER);
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: parseInt(port),
    username: process.env.PGUSER,
    password: process.env.PGHPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: true,
    logging: true,
    ssl: false,
    entities: [locations_models_1.Locality, locations_models_1.Province, locations_models_1.Country, locations_models_1.Adress, userProfile_model_1.UserProfile],
    subscribers: [],
    migrations: []
});
