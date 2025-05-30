"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfile = void 0;
const userProfile_pg_repository_1 = require("../repositories/userProfile.pg.repository");
const userProfile_useCase_1 = require("../../application/userProfile/userProfile.useCase");
const userProfile_controller_1 = require("./userProfile/userProfile.controller");
class userProfile {
    constructor() {
        this.useCase = new userProfile_useCase_1.UserProfileUseCase(new userProfile_pg_repository_1.userProfilePGRepository());
        this.controller = new userProfile_controller_1.userProfileController(this.useCase);
    }
}
exports.userProfile = userProfile;
