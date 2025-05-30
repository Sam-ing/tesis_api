import { Request, Response } from "express";
import { UserProfileUseCase } from "../../../application/userProfile/userProfile.useCase";
import { HttpResponse } from "../../../helpers/http.response";

export class userProfileController {

    constructor(
        private useCase:UserProfileUseCase, 
        private readonly httpResponse:HttpResponse = new HttpResponse()){}

    public insert = async (req:Request, res:Response) => {
        try{
            const userProfile = await this.useCase.registerUserProfile(req.body)
            return this.httpResponse.Created(res, userProfile)
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public findOne = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const userProfile = await this.useCase.findUserProfileById(id)
            return  userProfile ? this.httpResponse.Ok(res, userProfile) : this.httpResponse.NotFound(res, "User Profile not found")
        } catch (e){
            console.log(e)
            return this.httpResponse.Error(res, e)
        } 
    }

    public findAll = async (_req:Request, res:Response) => {
        try{
            const userProfiles = await this.useCase.getAllUserProfiles()
            return userProfiles.length > 0 ? this.httpResponse.Ok(res, userProfiles) : this.httpResponse.NotFound(res, "No User Profiles found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public delete = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const deleteResult = await this.useCase.deleteUserProfile(id)
            return deleteResult ? this.httpResponse.Ok(res, "User Profile deleted successfuly") : this.httpResponse.NotFound(res, "User Profile not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }

    public update = async (req:Request, res:Response) => {
        try{
            const id = parseInt(req.params.id)
            const fields = req.body
            const updatedUserProfile = await this.useCase.modifyUserProfile(id, fields)
            return updatedUserProfile ? this.httpResponse.Ok(res, updatedUserProfile) : this.httpResponse.NotFound(res, "User Profile not found")
        } catch (e){
            return this.httpResponse.Error(res, e)
        }
    }
}