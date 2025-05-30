import { userProfilePGRepository } from "../repositories/userProfile.pg.repository";
import { UserProfileUseCase } from "../../application/userProfile/userProfile.useCase";
import { userProfileController } from "./userProfile/userProfile.controller";
import { countryPGRepository, localityPGRepository, provincePGRepository } from "../repositories/locations.pg.repositories";
import { countryController, localityController, provinceController } from "./locations/locations.controllers";
import { CountryUseCase, LocalityUseCase, ProvinceUseCase } from "../../application/locations/locations.useCases";
import { LoginUser } from "../../application/login/userLogin";
import { MiddleWaresController } from "./loginController/loginController";


export class controllersHandler{

    public getUserProfileController(){
        const useCase = new UserProfileUseCase(new userProfilePGRepository())
        const controller = new userProfileController(useCase)
        return controller
    }

    public getLocalityController(){
        const useCase = new LocalityUseCase(new localityPGRepository())
        const controller = new localityController(useCase)
        return controller
    }

    public getProvinceController(){
        const useCase = new ProvinceUseCase(new provincePGRepository(), new localityPGRepository())
        const controller = new provinceController(useCase)
        return controller
    }

    public getCountryController(){
        const useCase = new CountryUseCase(new countryPGRepository())
        const controller = new countryController(useCase)
        return controller
    }

    public getMiddleWaresController(){
        const useCase = new LoginUser(new userProfilePGRepository)
        const controller = new MiddleWaresController(useCase)
        return controller
    }

}



