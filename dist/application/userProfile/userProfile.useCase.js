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
exports.UserProfileUseCase = void 0;
const userProfile_value_1 = require("../../domain/userProfile/userProfile.value");
class UserProfileUseCase {
    constructor(userProfileRepository) {
        this.userProfileRepository = userProfileRepository;
    }
    registerUserProfile(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userProfile = new userProfile_value_1.userProfileValue(user);
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
            const deltedUserProfile = this.userProfileRepository.deleteUserProfile(id);
            return deltedUserProfile;
        });
    }
    modifyUserProfile(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userProfile = new userProfile_value_1.userProfileValue(user);
            const updatedUserProfile = yield this.userProfileRepository.modifyUserProfile(userProfile);
            let newUserProfile = undefined;
            if (updatedUserProfile) {
                newUserProfile = new userProfile_value_1.userProfileValue(updatedUserProfile);
            }
            else {
                newUserProfile = updatedUserProfile;
            }
            return newUserProfile;
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
