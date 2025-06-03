"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const userProfile_model_1 = require("../models/userProfile.model");
const locations_models_1 = require("../models/locations.models");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
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
