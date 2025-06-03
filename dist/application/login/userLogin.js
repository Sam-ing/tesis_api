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
exports.LoginUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginUser {
    constructor(userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userProfile = yield this.userProfileRepository.findByEmail(email);
            if (!userProfile)
                return null;
            const match = yield bcrypt_1.default.compare(password, userProfile.password);
            if (!match)
                return null;
            const token = jsonwebtoken_1.default.sign({ id: userProfile.id, email: userProfile.email }, process.env.SECRET_KEY, { expiresIn: "1h" });
            return token;
        });
    }
}
exports.LoginUser = LoginUser;
