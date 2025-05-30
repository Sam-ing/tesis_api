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
exports.UserProfileUseCase = void 0;
const userProfile_value_1 = require("../../domain/userProfile/userProfile.value");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserProfileUseCase {
    constructor(userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }
    registerUserProfile(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = yield bcrypt_1.default.hash(data.password, 10);
            data.password = password;
            const userProfile = new userProfile_value_1.userProfileValue(data);
            const registeredUser = yield this.userProfileRepository.insertUserProfile(userProfile);
            let newUserProfile = undefined;
            if (registeredUser) {
                newUserProfile = new userProfile_value_1.userProfileValue(registeredUser);
            }
            else {
                newUserProfile = registeredUser;
            }
            return newUserProfile;
        });
    }
    findUserProfileById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userProfileRepository.findUserProfileById(id);
            let foundUser = undefined;
            if (user) {
                foundUser = new userProfile_value_1.userProfileValue(user);
            }
            else {
                foundUser = user;
            }
            return foundUser;
        });
    }
    deleteUserProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteResult = yield this.userProfileRepository.deleteUserProfile(id);
            return deleteResult.affected ? true : false;
        });
    }
    modifyUserProfile(id, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateResult = yield this.userProfileRepository.modifyUserProfile(id, fields);
            return updateResult.affected ? (updateResult.affected > 0) ? this.findUserProfileById(id) : null : null;
        });
    }
    getAllUserProfiles() {
        return __awaiter(this, void 0, void 0, function* () {
            const userProfiles = yield this.userProfileRepository.listUserProfiles();
            let userProfilesList = undefined;
            if (userProfiles) {
                userProfilesList = userProfiles.map(s => new userProfile_value_1.userProfileValue(s));
            }
            else {
                userProfilesList = userProfiles;
            }
            return userProfilesList;
        });
    }
}
exports.UserProfileUseCase = UserProfileUseCase;
