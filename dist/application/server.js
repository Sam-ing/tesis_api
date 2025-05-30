"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const postgres_1 = require("../infraestructure/database/postgres");
const userProfile_routes_1 = __importDefault(require("../infraestructure/routes/userProfile.routes"));
const locations_routes_1 = __importDefault(require("../infraestructure/routes/locations.routes"));
const login_routes_1 = __importDefault(require("../infraestructure/routes/login.routes"));
class Server {
    constructor(options) {
        this.app = (0, express_1.default)();
        const { port = 3000 } = options;
        this.port = port;
        this.app;
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(userProfile_routes_1.default);
        this.app.use(locations_routes_1.default);
        this.app.use(login_routes_1.default);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            dotenv_1.default.config({ path: __dirname + '/.env' });
            yield postgres_1.AppDataSource.initialize();
            this.app.listen(this.port, () => {
                return console.log(`Express is listening at http://localhost:${this.port}`);
            });
        });
    }
}
exports.Server = Server;
