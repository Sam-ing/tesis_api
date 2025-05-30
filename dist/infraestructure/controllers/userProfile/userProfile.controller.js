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
class userProfileController {
    constructor(useCase) {
        this.useCase = useCase;
    }
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("asdasdsad");
            const userProfile = yield this.useCase.registerUserProfile(req);
            res.statusCode = 201;
            res.send({ userProfile });
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const userProfile = yield this.useCase.findUserProfileById(id);
            if (userProfile) {
                res.statusCode = 200;
                res.send({ userProfile });
            }
            else {
                res.statusCode = 404;
                res.send("userProfile not found");
            }
        });
    }
    findAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userProfiles = yield this.useCase.getAllUserProfiles();
            res.statusCode = 200;
            res.send({ userProfiles });
        });
    }
}
exports.userProfileController = userProfileController;
