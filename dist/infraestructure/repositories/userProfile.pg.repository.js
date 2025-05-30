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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfilePGRepository = void 0;
const userProfile_model_1 = require("../models/userProfile.model");
const postgres_1 = require("../database/postgres");
class userProfilePGRepository {
    constructor() {
        this.repository = postgres_1.AppDataSource.getRepository(userProfile_model_1.userProfile);
    }
    findUserProfileById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUserProfile = yield this.repository.findOne({ where: { id: id } });
            return foundUserProfile;
        });
    }
    insertUserProfile(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUserProfile = yield this.repository.create(user);
            const savedUserProfile = yield this.repository.save(newUserProfile);
            return savedUserProfile;
        });
    }
    deleteUserProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedUser = yield this.repository.delete(id);
            return deletedUser;
        });
    }
    modifyUserProfile(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUserProfile = yield this.repository.create(user);
            const updatedUser = yield this.repository.save(newUserProfile);
            return updatedUser;
        });
    }
    listUserProfiles() {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUserProfiles = yield this.repository.find();
            return foundUserProfiles;
        });
    }
}
exports.userProfilePGRepository = userProfilePGRepository;
