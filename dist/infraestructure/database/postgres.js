"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const userProfile_model_1 = require("../models/userProfile.model");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Samuel2024",
    database: "tesis",
    synchronize: true,
    logging: true,
    entities: [userProfile_model_1.userProfile],
    subscribers: [],
    migrations: []
});
