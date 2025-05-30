"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllersHandler = void 0;
const userProfile_pg_repository_1 = require("../repositories/userProfile.pg.repository");
const userProfile_useCase_1 = require("../../application/userProfile/userProfile.useCase");
const userProfile_controller_1 = require("./userProfile/userProfile.controller");
const locations_pg_repositories_1 = require("../repositories/locations.pg.repositories");
const locations_controllers_1 = require("./locations/locations.controllers");
const locations_useCases_1 = require("../../application/locations/locations.useCases");
const userLogin_1 = require("../../application/login/userLogin");
const loginController_1 = require("./loginController/loginController");
class controllersHandler {
    getUserProfileController() {
        const useCase = new userProfile_useCase_1.UserProfileUseCase(new userProfile_pg_repository_1.userProfilePGRepository());
        const controller = new userProfile_controller_1.userProfileController(useCase);
        return controller;
    }
    getLocalityController() {
        const useCase = new locations_useCases_1.LocalityUseCase(new locations_pg_repositories_1.localityPGRepository());
        const controller = new locations_controllers_1.localityController(useCase);
        return controller;
    }
    getProvinceController() {
        const useCase = new locations_useCases_1.ProvinceUseCase(new locations_pg_repositories_1.provincePGRepository(), new locations_pg_repositories_1.localityPGRepository());
        const controller = new locations_controllers_1.provinceController(useCase);
        return controller;
    }
    getCountryController() {
        const useCase = new locations_useCases_1.CountryUseCase(new locations_pg_repositories_1.countryPGRepository());
        const controller = new locations_controllers_1.countryController(useCase);
        return controller;
    }
    getMiddleWaresController() {
        const useCase = new userLogin_1.LoginUser(new userProfile_pg_repository_1.userProfilePGRepository);
        const controller = new loginController_1.MiddleWaresController(useCase);
        return controller;
    }
}
exports.controllersHandler = controllersHandler;
