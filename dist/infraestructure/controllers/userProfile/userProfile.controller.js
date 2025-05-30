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
exports.userProfileController = void 0;
const http_response_1 = require("../../../helpers/http.response");
class userProfileController {
    constructor(useCase, httpResponse = new http_response_1.HttpResponse()) {
        this.useCase = useCase;
        this.httpResponse = httpResponse;
        this.insert = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userProfile = yield this.useCase.registerUserProfile(req.body);
                return this.httpResponse.Created(res, userProfile);
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.findOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const userProfile = yield this.useCase.findUserProfileById(id);
                return userProfile ? this.httpResponse.Ok(res, userProfile) : this.httpResponse.NotFound(res, "User Profile not found");
            }
            catch (e) {
                console.log(e);
                return this.httpResponse.Error(res, e);
            }
        });
        this.findAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userProfiles = yield this.useCase.getAllUserProfiles();
                return userProfiles.length > 0 ? this.httpResponse.Ok(res, userProfiles) : this.httpResponse.NotFound(res, "No User Profiles found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const deleteResult = yield this.useCase.deleteUserProfile(id);
                return deleteResult ? this.httpResponse.Ok(res, "User Profile deleted successfuly") : this.httpResponse.NotFound(res, "User Profile not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                const fields = req.body;
                const updatedUserProfile = yield this.useCase.modifyUserProfile(id, fields);
                return updatedUserProfile ? this.httpResponse.Ok(res, updatedUserProfile) : this.httpResponse.NotFound(res, "User Profile not found");
            }
            catch (e) {
                return this.httpResponse.Error(res, e);
            }
        });
    }
}
exports.userProfileController = userProfileController;
