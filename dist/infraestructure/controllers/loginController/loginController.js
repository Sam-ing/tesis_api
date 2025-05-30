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
exports.MiddleWaresController = void 0;
const http_response_1 = require("../../../helpers/http.response");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class MiddleWaresController {
    constructor(useCase, httpResponse = new http_response_1.HttpResponse()) {
        this.useCase = useCase;
        this.httpResponse = httpResponse;
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const token = yield this.useCase.login(email, password);
                console.log(token);
                if (!token)
                    return res.status(401).json({ message: "Invalid credentials" });
                req.token = token;
                return next();
            }
            catch (e) {
                console.log(e);
                return this.httpResponse.Ok(res, e);
            }
        });
        this.auth = (req, res, next) => {
            const authHeader = req.headers.authorization;
            if (!authHeader)
                return res.status(401).json({ message: "Token requerido" });
            const token = authHeader.split(" ")[1]; // Remueve "Bearer"
            try {
                const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
                req.user = decoded;
                return next();
            }
            catch (err) {
                return this.httpResponse.Forbidden(res, err);
            }
        };
        this.sendToken = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = req.token;
            return this.httpResponse.Ok(res, { "token": token });
        });
    }
}
exports.MiddleWaresController = MiddleWaresController;
