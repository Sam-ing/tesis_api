"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const userProfile_model_1 = require("../models/userProfile.model");
const locations_models_1 = require("../models/locations.models");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    url: process.env.DATABASE_URL,
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "tesis",
    synchronize: true,
    logging: true,
    entities: [locations_models_1.Locality, locations_models_1.Province, locations_models_1.Country, locations_models_1.Adress, userProfile_model_1.UserProfile],
    subscribers: [],
    migrations: []
});
